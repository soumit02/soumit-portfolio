"use client";
import { useState } from "react";
import { profile } from "@/data/profile";
const ic = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const Mail = () => <svg {...ic}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
const Phone = () => <svg {...ic}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>;
const Pin = () => <svg {...ic}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>;
const In = () => <svg {...ic}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></svg>;
const Gh = () => <svg {...ic}><path d="M9 19c-4 1.3-4-2-6-2.5m12 4.5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.5 2.7 5.500 3 5.5 3a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.500c0 4.600 2.800 5.700 5.500 6a2.800 2.800 0 0 0-.8 2.200V21" /></svg>;
const Row = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => (
  <div className="flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-accent">{icon}</span>
    <div><p className="font-semibold">{label}</p>{href ? <a href={href} className="text-sm text-slate-300 hover:text-accent">{value}</a> : <p className="text-sm text-slate-300">{value}</p>}</div></div>);
const field = "w-full rounded-lg border border-white/10 bg-bg px-3 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent";
export default function ContactSection() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio message from " + f.name)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div>
      <p className="-mt-6 mb-10 max-w-2xl text-slate-300">Have an exciting idea or project in mind? Let's connect, exchange ideas and turn possibilities into reality. I'd love to hear from you!</p>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
          <div className="space-y-5">
            <Row icon={<Mail />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Row icon={<Phone />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} />
            <Row icon={<Pin />} label="Location" value={profile.location} />
          </div>
          <h3 className="mb-4 mt-10 text-2xl font-bold">Connect With Me</h3>
          <div className="flex gap-4">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-block transition duration-200 hover:scale-110 hover:text-accent"><In /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-block transition duration-200 hover:scale-110 hover:text-accent"><Gh /></a>
          </div>
        </div>
        <form onSubmit={send} className="rounded-xl border border-white/10 bg-card p-6">
          <h3 className="mb-5 text-center text-2xl font-bold">Send a Message</h3>
          <label className="mb-1 block text-sm font-semibold" htmlFor="n">Your Name</label>
          <input id="n" required className={`${field} mb-4`} placeholder="Your Name..." value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <label className="mb-1 block text-sm font-semibold" htmlFor="e">Your Email</label>
          <input id="e" type="email" required className={`${field} mb-4`} placeholder="Your Email..." value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          <label className="mb-1 block text-sm font-semibold" htmlFor="m">Your Message</label>
          <textarea id="m" required rows={4} className={`${field} mb-4`} placeholder="Write your message..." value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
          <button type="submit" className="btn w-full rounded-full bg-accent py-3 text-sm font-semibold text-bg hover:bg-sky-300">Send Message</button>
          <p className="mt-3 text-center text-xs text-slate-500">This opens your email app with the message ready to send.</p>
        </form>
      </div>
    </div>);
}
