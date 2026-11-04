import { Award, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { certifications, education } from "@/lib/portfolio-data";

export default function Education() {
  return (
    <section className="section container" id="education">
      <SectionHeading number="05" title={<>Learning never stops.</>} description="Academic foundations and focused learning across cloud and DevOps practices." />
      <div className="education-grid">
        {education.map(item => <Reveal key={item.degree} className="education-card">
          <div className="education-icon"><GraduationCap size={19} /></div>
          <div><h3>{item.degree}</h3><p>{item.institution} <span>·</span> {item.period}</p></div>
        </Reveal>)}
      </div>
      <Reveal className="certifications">
        <div className="cert-heading"><Award size={17} /><span>TRAINING &amp; CERTIFICATIONS</span></div>
        <div className="cert-list">{certifications.map(item => <span className="cert-pill" key={item}>{item}</span>)}</div>
      </Reveal>
    </section>
  );
}
