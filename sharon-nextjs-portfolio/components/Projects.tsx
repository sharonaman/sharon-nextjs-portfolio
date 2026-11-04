"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp, Layers3 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/portfolio-data";

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section className="section container" id="projects">
      <SectionHeading number="04" title={<>Engineering in practice.</>} description="Selected cloud and deployment projects from my professional and hands-on experience." />
      <div className="projects-grid">
        {projects.map((project, index) => {
          const isOpen = expanded === project.number;
          return <Reveal key={project.number} delay={(index % 2) * 0.08} className="project-card">
            <div className="project-topline"><span>{project.number} / {project.category}</span><span className="project-cloud">{project.cloud}</span></div>
            <div className="project-symbol"><Layers3 size={21} /></div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-outcome">{project.outcome}</div>
            <div className="tag-list project-tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
            <button className="details-toggle" onClick={() => setExpanded(isOpen ? null : project.number)} aria-expanded={isOpen}>
              {isOpen ? "Hide case study" : "Explore case study"} {isOpen ? <ChevronUp size={15} /> : <ArrowUpRight size={15} />}
            </button>
            <AnimatePresence>
              {isOpen && <motion.div className="project-details" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                <div className="details-inner"><b>Implementation highlights</b><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>
              </motion.div>}
            </AnimatePresence>
          </Reveal>;
        })}
      </div>
    </section>
  );
}
