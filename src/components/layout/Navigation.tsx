"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { navigationGroups } from "@/lib/company-content";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentPathname = pathname ?? "/";
  const isActive = (href: string) =>
    href === "/" ? currentPathname === "/" : currentPathname === href || currentPathname.startsWith(`${href}/`);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenMobileMenu(null);
    setOpenDesktopMenu(null);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-secondary to-primary"
        style={{ scaleX }}
      />

      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={reducedMotion ? false : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.5, ease: "easeOut" }}
        className="fixed inset-x-0 top-4 z-50 px-4"
      >
        <div className={cn(
          "relative mx-auto flex max-w-[1500px] items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-500 sm:px-4",
          isScrolled ? "glass border-white/[0.08] shadow-lg shadow-black/20" : "border-white/[0.06] bg-galaxy-darker/45 backdrop-blur-md"
        )}>
          <Link href="/" onClick={closeMenus} className="flex shrink-0 items-center gap-2.5 rounded-xl px-2 py-1.5" aria-label="Technology Company home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 font-display text-xs font-bold text-primary-light">TC</span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-white sm:block">Technology Company</span>
          </Link>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {navigationGroups.map((item) => (
              <li key={item.href} className="relative flex items-center" onMouseLeave={() => setOpenDesktopMenu(null)}>
                <Link
                  href={item.href}
                  onClick={closeMenus}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-xl px-3 py-2 text-[13px] font-medium transition-colors",
                    isActive(item.href) ? "text-white" : "text-text-secondary hover:text-white"
                  )}
                >
                  {isActive(item.href) && <motion.span layoutId="nav-active" className="absolute inset-0 rounded-xl border border-primary/20 bg-primary/15" transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 30 }} />}
                  <span className="relative z-10">{item.label}</span>
                </Link>
                {"children" in item && item.children && (
                  <>
                    <button
                      type="button"
                      aria-label={`${openDesktopMenu === item.label ? "Close" : "Open"} ${item.label} submenu`}
                      aria-expanded={openDesktopMenu === item.label}
                      onClick={() => setOpenDesktopMenu(openDesktopMenu === item.label ? null : item.label)}
                      className="-ml-2 rounded-lg p-2 text-text-secondary transition-colors hover:text-white"
                    >
                      <ChevronDown size={13} className={cn("transition-transform", openDesktopMenu === item.label && "rotate-180")} />
                    </button>
                    {openDesktopMenu === item.label && (
                      <div className="glass absolute left-0 top-full mt-3 min-w-60 rounded-xl border border-white/[0.08] p-2 shadow-xl shadow-black/30" onKeyDown={(event) => { if (event.key === "Escape") setOpenDesktopMenu(null); }}>
                        <Link href={item.href} onClick={closeMenus} className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-primary-light hover:bg-white/5">Explore {item.label}</Link>
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} onClick={closeMenus} className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-white">{child.label}</Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden xl:block">
            <Link href="/contact" onClick={closeMenus} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary-light">
              Start a Project <ArrowRight size={14} />
            </Link>
          </div>

          <button
            onClick={() => { setMobileOpen(!mobileOpen); setOpenMobileMenu(null); }}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: reducedMotion ? 0 : 0.2 }}
                id="mobile-nav-menu"
                className="glass absolute inset-x-0 top-[calc(100%+0.75rem)] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-white/[0.08] p-3 shadow-2xl shadow-black/40 xl:hidden"
              >
                <ul className="flex flex-col gap-1">
                  {navigationGroups.map((item) => (
                    <li key={item.href}>
                      <div className="flex items-center gap-1">
                        <Link href={item.href} onClick={closeMenus} aria-current={isActive(item.href) ? "page" : undefined} className={cn("flex-1 rounded-xl px-4 py-3 text-sm font-medium", isActive(item.href) ? "bg-primary/15 text-white" : "text-text-secondary hover:bg-white/5 hover:text-white")}>
                          {item.label}
                        </Link>
                        {"children" in item && item.children && (
                          <button type="button" aria-label={`${openMobileMenu === item.label ? "Collapse" : "Expand"} ${item.label} submenu`} aria-expanded={openMobileMenu === item.label} onClick={() => setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)} className="rounded-xl p-3 text-text-secondary hover:bg-white/5 hover:text-white">
                            <ChevronDown size={16} className={cn("transition-transform", openMobileMenu === item.label && "rotate-180")} />
                          </button>
                        )}
                      </div>
                      {"children" in item && item.children && openMobileMenu === item.label && (
                        <ul className="ml-4 border-l border-primary/20 pl-3">
                          {item.children.map((child) => (
                            <li key={child.href}><Link href={child.href} onClick={closeMenus} className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:bg-white/5 hover:text-white">{child.label}</Link></li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" onClick={closeMenus} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light">
                  Start a Project <ArrowRight size={15} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
