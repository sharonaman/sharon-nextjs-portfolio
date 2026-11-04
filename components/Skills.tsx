import { Cloud, GitBranch, Container, Blocks, Activity, Package, ShieldCheck, Server } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/portfolio-data";

const icons = [Cloud, GitBranch, Container, Blocks, Activity, Package, ShieldCheck, Server];

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <SectionHeading number="02" title={<>Tools I work with.</>} description="A practical toolset across cloud platforms, delivery automation, containers, infrastructure and observability." />
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];
          return <Reveal key={group.title} delay={(index % 4) * 0.06} className="skill-card">
            <div className="skill-title"><span><Icon size={17} /></span><h3>{group.title}</h3></div>
            <div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
          </Reveal>;
        })}
      </div>
    </section>
  );
}
