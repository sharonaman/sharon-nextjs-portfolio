import Reveal from "@/components/Reveal";

export default function SectionHeading({ number, title, description }: { number: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="section-heading">
      <Reveal>
        <div className="section-number">{number} / PORTFOLIO</div>
        <h2>{title}</h2>
      </Reveal>
      {description && <Reveal delay={0.12}><p>{description}</p></Reveal>}
    </div>
  );
}
