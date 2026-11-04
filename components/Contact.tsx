"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Github, Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/portfolio-data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    setNotice("Your email application should open with the message prefilled.");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section container" id="contact">
      <SectionHeading number="06" title={<>Let&apos;s talk<br />about DevOps.</>} description="Interested in working together or discussing a DevOps opportunity? Send me a message." />
      <div className="contact-layout">
        <Reveal className="contact-copy">
          <div className="contact-availability"><span className="status-dot" /> OPEN TO RELEVANT OPPORTUNITIES</div>
          <h3>Have a role or a cloud challenge in mind?</h3>
          <p>I&apos;d be happy to connect and discuss how my experience in cloud infrastructure, CI/CD automation and application delivery could contribute to your team.</p>
          <div className="contact-methods">
            <a href={`mailto:${profile.email}`}><span><Mail size={16} /></span>{profile.email}<ArrowUpRight size={14} /></a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><span><Phone size={16} /></span>{profile.phone}<ArrowUpRight size={14} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><span><Github size={16} /></span>github.com/{profile.githubHandle}<ArrowUpRight size={14} /></a>
            <div><span><MapPin size={16} /></span>{profile.location}</div>
          </div>
        </Reveal>
        <Reveal className="contact-form-card" delay={0.1}>
          <div className="form-heading"><span>01 — SAY HELLO</span><h3>Send a message.</h3></div>
          <form onSubmit={handleSubmit}>
            <label>Your name<input required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" /></label>
            <label>Email address<input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" /></label>
            <label>Message<textarea required rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell me a little about the opportunity..." /></label>
            <button className="button button-primary submit-button" type="submit">Prepare email <Send size={15} /></button>
            {notice && <p className="form-notice" role="status">{notice}</p>}
            <small className="form-footnote">This form opens your default email application. It does not store or silently send your message.</small>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
