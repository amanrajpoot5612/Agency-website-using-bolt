interface TestimonialsProps { data: { heading: { headingP1: string; headingP2: string }; subHeading: string; testimonials: { name: string; role: string; content: string }[] }; }
export const Testimonials = ({ data }: TestimonialsProps) => (
  <section id="testimonials" className="section testimonial-section"><div className="shell">
    <p className="eyebrow">Client notes / In their words</p>
    <div className="quote-grid"><div><h2>{data.heading.headingP1}<em>{data.heading.headingP2}</em></h2><p className="quote-intro">{data.subHeading}</p></div>
      <div className="quotes">{data.testimonials.slice(0, 3).map((item, i) => <blockquote key={item.name}><span>“</span><p>{item.content}</p><footer><strong>{item.name}</strong><small>{item.role}</small><i>0{i + 1}</i></footer></blockquote>)}</div>
    </div>
  </div></section>
);
