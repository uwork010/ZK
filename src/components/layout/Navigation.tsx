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
  const [mobileScreen, setMobileScreen] = useState<string | null>(null);
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

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    if (mobileOpen) {
      root.dataset.mobileMenuOpen = "true";
      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
    }

    return () => {
      delete root.dataset.mobileMenuOpen;
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setMobileScreen(null);
        setOpenDesktopMenu(null);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  const currentPathname = pathname ?? "/";
  const isActive = (href: string) =>
    href === "/" ? currentPathname === "/" : currentPathname === href || currentPathname.startsWith(`${href}/`);

  const closeMenus = () => {
    setMobileOpen(false);
    setMobileScreen(null);
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
          <Link href="/" onNavigate={closeMenus} aria-current={isActive("/") ? "page" : undefined} className="flex shrink-0 items-center rounded-xl px-2 py-1.5" aria-label="CORE & CRAFT home">
            <span className="whitespace-nowrap font-display text-xs font-bold uppercase tracking-[0.1em] text-white sm:text-[13px] sm:tracking-[0.14em]">
              CORE <span className="font-medium text-primary-light">&amp;</span> CRAFT
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {navigationGroups.map((item) => (
              <li key={item.href} className="relative flex items-center" onMouseLeave={() => setOpenDesktopMenu(null)}>
                <Link
                  href={item.href}
                  onNavigate={closeMenus}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-xl px-3 py-2 text-[13px] font-medium transition-colors",
                    isActive(item.href) ? "text-white" : "text-text-secondary hover:text-white"
                  )}
                >
                  {isActive(item.href) && <motion.span layoutId="nav-active" className="absolute inset-0 rounded-xl border border-primary/20 bg-primary/15" transition={{ duration: reducedMotion ? 0 : 0.18, ease: "easeOut" }} />}
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
                        <Link href={item.href} onNavigate={closeMenus} className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-primary-light hover:bg-white/5">Explore {item.label}</Link>
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} onNavigate={closeMenus} className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-white">{child.label}</Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden xl:block">
            <Link href="/contact" onNavigate={closeMenus} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-galaxy-darker transition-colors hover:bg-primary-light">
              Start a Project <ArrowRight size={14} />
            </Link>
          </div>

          <button
            onClick={() => {
              if (mobileOpen) closeMenus();
              else {
                setMobileScreen(null);
                setMobileOpen(true);
              }
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Dismiss navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              onClick={closeMenus}
              className="mobile-menu-backdrop fixed inset-0 z-[60] cursor-default xl:hidden"
            />
            <motion.div
              id="mobile-nav-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={reducedMotion ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, x: 18 }}
              transition={{ duration: reducedMotion ? 0 : 0.24, ease: "easeOut" }}
              className="mobile-menu-panel fixed inset-0 z-[61] flex flex-col px-6 pb-6 pt-28 xl:hidden sm:px-10"
            >
              <button
                type="button"
                onClick={closeMenus}
                aria-label="Close navigation menu"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-glass-border text-text-secondary transition-colors hover:text-white"
              >
                <X size={18} />
              </button>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileScreen ?? "main-menu"}
                  initial={reducedMotion ? false : { opacity: 0, x: mobileScreen ? 28 : -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, x: mobileScreen ? -28 : 28 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}
                  className="min-h-0 flex-1 overflow-y-auto"
                >
                  {mobileScreen ? (
                    <MobileSubmenu
                      label={mobileScreen}
                      closeMenus={closeMenus}
                      onBack={() => setMobileScreen(null)}
                    />
                  ) : (
                    <ul className="mx-auto max-w-lg divide-y divide-white/[0.08]">
                      {navigationGroups.map((item, index) => (
                        <li key={item.href} className="flex items-center justify-between gap-4 py-1">
                          <Link
                            href={item.href}
                            onNavigate={closeMenus}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className={cn(
                              "flex-1 py-3 font-display text-2xl font-medium tracking-tight transition-colors sm:text-3xl",
                              isActive(item.href) ? "text-primary-light" : "text-white hover:text-primary-light",
                            )}
                          >
                            <span className="mr-4 inline-block w-6 align-middle font-sans text-[10px] font-medium tracking-wider text-text-secondary/55">0{index + 1}</span>
                            {item.label}
                          </Link>
                          {"children" in item && item.children && (
                            <button
                              type="button"
                              aria-label={`Open ${item.label} submenu`}
                              onClick={() => setMobileScreen(item.label)}
                              className="rounded-full border border-glass-border p-3 text-primary-light transition-colors hover:bg-primary/10"
                            >
                              <ArrowRight size={18} />
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="mx-auto w-full max-w-lg pt-4">
                <Link href="/contact" onNavigate={closeMenus} className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-galaxy-darker transition-colors hover:bg-primary-light">
                  Start a Project <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileSubmenu({ label, closeMenus, onBack }: { label: string; closeMenus: () => void; onBack: () => void }) {
  const group = navigationGroups.find((item) => item.label === label);
  if (!group || !("children" in group) || !group.children) return null;

  return (
    <div className="mx-auto max-w-lg">
      <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-lg py-2 text-sm font-medium text-text-secondary transition-colors hover:text-white">
        <ChevronDown size={15} className="rotate-90" /> Back to menu
      </button>
      <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-light">Explore</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-white">{group.label}</h2>
      <Link href={group.href} onNavigate={closeMenus} className="mt-6 flex items-center justify-between border-b border-white/[0.08] py-4 text-base font-medium text-primary-light">
        All {group.label} <ArrowRight size={16} />
      </Link>
      <ul className="divide-y divide-white/[0.06]">
        {group.children.map((child) => (
          <li key={child.href}>
            <Link href={child.href} onNavigate={closeMenus} className="block py-4 text-lg text-text-secondary transition-colors hover:text-white">{child.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
