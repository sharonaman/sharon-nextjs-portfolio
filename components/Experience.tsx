import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/portfolio-data";

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <SectionHeading number="03" title={<>Professional journey.</>} description="Hands-on experience in DevOps engineering, cloud infrastructure and application delivery." />
      <div className="timeline">
        {experience.map((job, index) => <Reveal key={job.company} delay={index * 0.08} className="job">
          <div className="job-date"><span>{job.period}</span><small>{job.location}</small></div>
          <div className="job-content"><h3>{job.role}</h3><div className="company-name">{job.company}</div>
            <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
          </div>
        </Reveal>)}
      </div>
    </section>
  );
}
