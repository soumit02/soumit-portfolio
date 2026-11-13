"use client";
import { useEffect, useState } from "react";
import { nav } from "@/data/other";
export default function Nav() {
  const [active, setActive] = useState("home"); const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    nav.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-extrabold">Soumit<span className="text-accent">.</span></a>
        <button className="md:hidden rounded border border-white/20 px-3 py-1 text-sm" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <nav className={`${open ? "flex" : "hidden"} absolute left-0 top-16 w-full flex-col gap-3 bg-bg p-5 md:static md:flex md:w-auto md:flex-row md:gap-5 md:bg-transparent md:p-0`}>
          {nav.map(([id, label]) => (<a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id} className={`nav-link w-fit text-sm ${active === id ? "text-accent" : "text-slate-400 hover:text-white"}`}>{label}</a>))}
        </nav>
      </div>
    </header>);
}
