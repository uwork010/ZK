"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export default function Footer() {
  const pathname = usePathname();
  const lenis = useLenis();
  const scrollToTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 2 });
  };

  if (pathname === "/") {
    return (
      <footer data-home-footer className="relative border-t border-glass-border px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1.1fr] xl:gap-8">
          <div className="max-w-sm">
            <Link href="/" className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white">CORE &amp; CRAFT</Link>
            <p className="mt-4 text-sm leading-6 text-text-secondary">Full-Service Technology &amp; Creative Agency building digital products, software, AI solutions, websites, apps, games, and creative experiences from idea to launch.</p>
            <p className="mt-5 text-xs text-text-muted">&copy; 2026 CORE &amp; CRAFT. All rights reserved.</p>
          </div>

          <FooterLinks title="Services" links={[
            ["Web Development", "/services/web-development"],
            ["Mobile App Development", "/services/mobile-app-development"],
            ["AI & Automation", "/services/ai-automation"],
            ["Custom Software", "/services/custom-software-development"],
            ["UI/UX Design", "/services/ui-ux-product-design"],
            ["Game Development", "/services/game-development"],
          ]} />
          <FooterLinks title="Company" links={[
            ["About", "/about"],
            ["Work", "/work"],
            ["Insights", "/insights"],
            ["Contact", "/contact"],
          ]} />
          <FooterLinks title="Solutions" links={[
            ["Startups", "/solutions/startups"],
            ["SaaS Companies", "/solutions/saas-companies"],
            ["Business Automation", "/solutions/business-automation"],
            ["Digital Transformation", "/solutions/digital-transformation"],
          ]} />
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-label">Contact</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-text-secondary">
              <a href="mailto:uwork428@gmail.com" className="transition-colors hover:text-white">uwork428@gmail.com</a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">+92 370 5752100</a>
            </div>
            <div className="mt-6 flex gap-4 text-xs text-text-muted">
              <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
              <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative border-t border-glass-border px-6 py-3">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs sm:flex-row sm:gap-4">
        <div className="text-center sm:text-left">
          <p className="font-semibold uppercase tracking-[0.12em] text-white">CORE &amp; CRAFT</p>
          <p className="mt-1 text-text-muted">Full-Service Technology &amp; Creative Agency.</p>
          <p className="mt-1 text-text-muted">&copy; {new Date().getFullYear()} CORE &amp; CRAFT</p>
        </div>

        <nav aria-label="Legal" className="flex items-center gap-4 text-text-muted">
          <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
        </nav>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 text-text-muted transition-colors hover:text-primary"
        >
          Back to top
          <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}

const whatsappHref = `https://wa.me/923705752100?text=${encodeURIComponent("Hi, I visited your website and would like to discuss a project.")}`;

function FooterLinks({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-label">{title}</h2>
      <ul className="mt-4 flex flex-col items-start gap-3 text-sm text-text-secondary">
        {links.map(([label, href]) => <li key={label}><Link href={href} className="transition-colors hover:text-white">{label}</Link></li>)}
      </ul>
    </nav>
  );
}
