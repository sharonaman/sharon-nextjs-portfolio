import { ArrowUpRight, Github } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#home">SHARON<span>.</span></a>
        <p>Cloud · Automation · Continuous Delivery</p>
        <a className="footer-github" href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a>
        <small>© {new Date().getFullYear()} Sharon Aman. All rights reserved.</small>
      </div>
    </footer>
  );
}
