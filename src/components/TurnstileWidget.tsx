import { useEffect, useRef } from 'react';

type TurnstileApi = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window { turnstile?: TurnstileApi }
}

const scriptId = 'cloudflare-turnstile-script';

export function TurnstileWidget({ onToken }: { onToken: (token: string) => void }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sitekey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    if (!sitekey) return;
    let widgetId: string | undefined;
    let cancelled = false;

    const render = () => {
      if (cancelled || !container.current || !window.turnstile) return;
      widgetId = window.turnstile.render(container.current, {
        sitekey,
        theme: 'dark',
        callback: onToken,
        'expired-callback': () => onToken(''),
        'error-callback': () => onToken(''),
      });
    };

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (window.turnstile) render();
    else if (existing) existing.addEventListener('load', render, { once: true });
    else {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.addEventListener('load', render, { once: true });
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      existing?.removeEventListener('load', render);
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [onToken]);

  if (!import.meta.env.VITE_TURNSTILE_SITE_KEY) {
    return <p className="text-sm text-red-300">Security verification is not configured.</p>;
  }
  return <div ref={container} aria-label="Security verification" />;
}
