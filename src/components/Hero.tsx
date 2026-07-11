import { ArrowDownRight, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  onNavigate: (section: string) => void;
  data: { heading: { headingP1: string; headingP2: string }; subHeading: string; buttons: { button1: string; button2: string }; matrices: { label: string; number: string }[] };
}

export const Hero = ({ onNavigate, data }: HeroProps) => {
  const navigate = useNavigate();
  return (
    <section id="home" className="hero-editorial">
      <div className="hero-rail" aria-hidden="true"><span>INDEPENDENT DIGITAL STUDIO</span><span>INDIA / WORLDWIDE</span></div>
      <div className="hero-main shell">
        <div className="hero-copy">
          <p className="eyebrow">Wired Creations / Digital product agency</p>
          <h1>{data.heading.headingP1} <em>{data.heading.headingP2}</em></h1>
          <p className="hero-lede">{data.subHeading}</p>
          <div className="button-row">
            <button className="button button-dark" onClick={() => navigate('/meeting')}>{data.buttons.button1}<ArrowRight size={17} /></button>
            <button className="button button-ghost" onClick={() => onNavigate('portfolio')}>{data.buttons.button2}<ArrowDownRight size={17} /></button>
          </div>
          <div className="availability"><span className="status-dot" /> Now booking select projects for Q3 2026</div>
        </div>
        <div className="hero-art" aria-label="A visual preview of our product design work">
          <div className="art-top"><span>Project / 024</span><span>PRODUCT DESIGN + BUILD</span></div>
          <div className="browser-mockup">
            <div className="browser-bar"><i/><i/><i/><span>wired / launch system</span></div>
            <div className="mock-body">
              <div className="mock-label">A CLEARER WAY FORWARD</div>
              <div className="mock-title">Built to move<br/>business forward.</div>
              <div className="mock-grid"><div/><div/><div/></div>
            </div>
          </div>
          <div className="art-caption"><p>Strategy, identity, product design and engineering — one senior team from first idea to launch.</p><span><Check size={14}/> Built for momentum</span></div>
        </div>
      </div>
      <div className="hero-stats shell">{data.matrices.map((item, index) => <div key={item.label}><span>0{index + 1}</span><strong>{item.number}</strong><p>{item.label}</p></div>)}</div>
    </section>
  );
};
