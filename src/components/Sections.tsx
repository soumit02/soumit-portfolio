import ContactSection from "./ContactSection";
import { profile } from "@/data/profile";
import { projects, Project } from "@/data/projects";
import { education, research, experience, certifications, skills, awards } from "@/data/other";
const S = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20"><h2 className="mb-10 text-3xl font-extrabold">{title}<span className="text-accent">.</span></h2>{children}</section>);
const A = ({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) => (
  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`btn inline-block rounded-lg px-4 py-2 text-sm font-semibold ${primary ? "bg-accent text-bg hover:bg-sky-300" : "border border-white/20 hover:border-accent hover:text-accent"}`}>{children}</a>);
const Tag = ({ t }: { t: string }) => <span className="tag rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">{t}</span>;
const card = "rounded-xl border border-white/10 bg-card p-6";

export function Hero() {
  return (<section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pt-24 md:grid-cols-[1.4fr_1fr]">
    <div>
      <p className="mb-3 text-accent">Hi, I'm</p>
      <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">{profile.name}</h1>
      <p className="mt-4 text-xl text-slate-300">{profile.headline}</p>
      <p className="mt-4 max-w-xl text-slate-400">{profile.summary}</p>
      <div className="mt-8 flex flex-wrap gap-3"><A href="#projects" primary>Explore My Projects</A><A href={profile.cv}>Download CV</A><A href="#contact">Contact Me</A></div>
      <div className="mt-6 flex gap-5 text-sm text-slate-400"><a className="transition-colors duration-200 hover:text-accent" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a className="transition-colors duration-200 hover:text-accent" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
    </div>
    {profile.photo ? <img src={profile.photo} alt="Portrait of Soumit Dey" className="aspect-square w-full max-w-sm rounded-2xl object-cover" />
      : <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border border-dashed border-white/20 bg-card text-center text-slate-500"><span className="text-6xl font-extrabold text-accent/60">SD</span></div>}
  </section>);
}
export function About() { return (<S id="about" title="About"><div className="max-w-3xl space-y-4 text-slate-300">{profile.about.map((p) => <p key={p}>{p}</p>)}</div></S>); }
export function Education() { return (<S id="education" title="Education"><div className="grid gap-6 md:grid-cols-2">{education.map((e) => (<div key={e.title} className={`${card} lift`}><p className="text-sm text-accent">{e.period}</p><h3 className="mt-1 text-lg font-bold">{e.title}</h3><p className="text-slate-400">{e.place}</p><p className="mt-2 font-semibold">{e.score}</p></div>))}</div></S>); }

function Card({ p }: { p: Project }) {
  return (<article className={`${card} lift lift-lg flex flex-col gap-4`}>
    <div className="img-zoom overflow-hidden rounded-lg"><img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="aspect-video w-full rounded-lg border border-white/10 object-cover object-top" /></div>
    <h3 className="text-xl font-bold">{p.title}</h3><p className="text-slate-300">{p.intro}</p>
    <div className="flex flex-wrap gap-2">{p.stack.map((t) => <Tag key={t} t={t} />)}</div>
    <ul className="list-disc space-y-1 pl-5 text-sm text-slate-400">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
    <div className="mt-auto flex flex-wrap gap-2">{p.demo && <A href={p.demo} primary>Live Demo</A>}<A href={p.github}>GitHub</A>{p.docs && <A href={p.docs}>API Docs</A>}</div>
  </article>);
}
export function Projects() {
  return (<S id="projects" title="Projects"><div className="grid gap-6 md:grid-cols-2">{projects.map((p) => <Card key={p.title} p={p} />)}</div></S>);
}
export function Research() { const r = research; return (<S id="research" title="Research"><div className={`${card} max-w-4xl`}>
  <p className="text-sm text-accent">{r.venue} · {r.date} · {r.status}</p><h3 className="mt-2 text-xl font-bold">{r.title}</h3><p className="mt-3 text-slate-400">{r.text}</p>
  {r.image && <img src={r.image} alt="Smart-GaitBox presentation" className="mt-4 rounded-lg" />}<div className="mt-5"><A href={r.certificate}>Presentation Certificate</A></div></div></S>); }
export function Experience() { const e = experience; return (<S id="experience" title="Experience"><div className={`${card} max-w-4xl border-l-4 border-l-accent`}>
  <p className="text-sm text-accent">{e.period}</p><h3 className="text-xl font-bold">{e.role}</h3><p className="text-slate-400">{e.org}</p>
  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">{e.points.map((x) => <li key={x}>{x}</li>)}</ul></div></S>); }
export function Certifications() { return (<S id="certifications" title="Certifications"><div className="grid gap-6 md:grid-cols-3">{certifications.map((c) => (<div key={c.title} className={`${card} lift flex flex-col gap-2`}><p className="text-sm text-accent">{c.date}</p><h3 className="font-bold">{c.title}</h3><p className="text-sm text-slate-400">{c.by}</p><div className="mt-auto pt-3"><A href={c.url}>View Certificate</A></div></div>))}</div></S>); }
export function Skills() { return (<S id="skills" title="Skills"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{Object.entries(skills).map(([k, v]) => (<div key={k} className={`${card} lift`}><h3 className="mb-3 font-bold">{k}</h3><div className="flex flex-wrap gap-2">{v.map((t) => <Tag key={t} t={t} />)}</div></div>))}</div></S>); }
export function Awards() { return (<S id="awards" title="Awards & Achievements"><div className="grid gap-6 md:grid-cols-3">{awards.map((a) => (<div key={a.title} className={`${card} lift`}><p className="text-4xl font-extrabold text-accent">{a.count}</p><h3 className="mt-2 font-bold">{a.title}</h3><p className="text-sm text-slate-400">{a.by} · {a.date}</p><div className="mt-4"><A href={a.url}>View Certificate</A></div></div>))}</div></S>); }
export function Contact() { return (<S id="contact" title="Get In Touch"><ContactSection /></S>); }
