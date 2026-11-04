import { Gauge, Workflow, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { metrics, principles } from "@/lib/portfolio-data";

const icons = [Workflow, Gauge, Users];

export default function About() {
  return (
    <section className="section container" id="about">
      <SectionHeading number="01" title={<>Reliable systems.<br />Repeatable delivery.</>} description="A DevOps engineer with 3+ years of experience supporting cloud infrastructure, application deployments and automation across development and production environments." />
      <div className="about-grid">
        <Reveal className="glass-panel about-main">
          <p>I work across the software delivery lifecycle: building and maintaining CI/CD pipelines, coordinating releases, provisioning infrastructure, supporting containerized applications and improving operational visibility.</p>
          <p>In my current role at MariApps Marine Solutions, I help deliver and support maritime ERP solutions across a large multi-client environment. I focus on dependable deployments, practical automation and collaboration with development, QA and operations teams.</p>
          <div className="metrics-grid">
            {metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
        </Reveal>
        <div className="principles-list">
          {principles.map((item, index) => {
            const Icon = icons[index];
            return <Reveal key={item.number} delay={index * 0.1} className="principle-card">
              <div className="principle-icon"><Icon size={17} /></div>
              <div><b>{item.title}</b><p>{item.description}</p></div>
            </Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}
