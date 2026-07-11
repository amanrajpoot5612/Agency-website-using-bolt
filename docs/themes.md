# Production themes

The website theme is selected at build time. It is not exposed to visitors and no theme switcher is shipped in the browser.

Open `theme.config.js` and change `ACTIVE_THEME` to one of these values:

| Value | Theme | Positioning |
| --- | --- | --- |
| `0` | Electric Cyan | Futuristic, precise, and product-led |
| `1` | Cobalt Violet | Premium SaaS and digital-product studio |
| `2` | Emerald Teal | Trusted engineering, systems, and data |
| `3` | Signal Orange | Energetic launches and growth work |
| `4` | Neon Magenta | Creative technology and experimentation |
| `5` | Arctic Lime | AI, automation, and challenger-brand energy |

After changing the value, run `npm run build` and deploy the new build. The theme configuration remaps the existing semantic `navy`, `cyan`, `slate`, and `gray` tokens across every page.

Do not rename those semantic Tailwind classes in components when adding a theme. Add or adjust palette values in `theme.config.js` instead.
