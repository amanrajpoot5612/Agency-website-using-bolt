export interface AboutProps { data: { heading: { headingP1: string; headingP2: string }; para: { para1: string; para2: string }; textSections: { label: string; text: string }[]; matrices: { label: string; number: string }[] }; }
export const About = ({ data }: AboutProps) => (
  <section id="about" className="section about-section"><div className="shell">
    <div className="about-statement"><p className="eyebrow">The studio / Wired differently</p><h2>{data.heading.headingP1}<em>{data.heading.headingP2}</em></h2><p>{data.para.para1}</p></div>
    <div className="about-details"><div className="about-copy"><p>{data.para.para2}</p>{data.textSections.map((item, i) => <div key={item.label}><span>0{i + 1}</span><h3>{item.label}</h3><p>{item.text}</p></div>)}</div><div className="about-stats">{data.matrices.map(item => <div key={item.label}><strong>{item.number}</strong><span>{item.label}</span></div>)}</div></div>
  </div></section>
);
