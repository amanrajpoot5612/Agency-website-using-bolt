import type { ReactNode } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page-shell min-h-screen bg-navy-950 text-slate-100">
      <Navigation />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
