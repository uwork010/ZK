"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const whatsappUrl = `https://wa.me/923705752100?text=${encodeURIComponent("Hi, I visited your website and would like to discuss a project.")}`;

export default function HomeWhatsApp() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("[data-home-footer]");
    if (!footer || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting);
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      data-whatsapp-widget
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CORE & CRAFT on WhatsApp"
      aria-hidden={footerVisible}
      tabIndex={footerVisible ? -1 : 0}
      title="WhatsApp: +92 370 5752100"
      className={`fixed z-40 flex size-12 items-center justify-center rounded-full border border-white/15 bg-primary text-white shadow-lg shadow-black/30 transition-[opacity,transform,background-color] hover:scale-105 hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light${footerVisible ? " pointer-events-none opacity-0" : ""}`}
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))", right: "max(1rem, env(safe-area-inset-right))" }}
    >
      <MessageCircle size={21} aria-hidden="true" />
    </a>
  );
}