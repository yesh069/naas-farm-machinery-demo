"use client";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FAMILIES } from "@/lib/products";

export function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 90]);
  return <motion.div ref={ref} className="hero-img" style={{ y }} aria-hidden />;
}

export function HeroFinder() {
  const r = useRouter();
  const [q, setQ] = useState("");
  const [fam, setFam] = useState("");
  function go(e: React.FormEvent) {
    e.preventDefault();
    const p = new URLSearchParams();
    if (q.trim()) p.set("q", q.trim());
    if (fam) p.set("family", fam);
    r.push(`/machinery/${p.toString() ? "?" + p.toString() : ""}`);
  }
  return (
    <form className="finder-bar" onSubmit={go} role="search" aria-label="Find machinery">
      <label><span>Search</span><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Model, brand or machine…" /></label>
      <label><span>Equipment type</span>
        <select value={fam} onChange={(e) => setFam(e.target.value)}>
          <option value="">All machinery</option>
          {FAMILIES.filter((f) => f.id !== "other").map((f) => <option key={f.id} value={f.id}>{f.label}</option>)}
        </select>
      </label>
      <button className="btn btn-primary" type="submit"><Search size={18} aria-hidden /> Find</button>
    </form>
  );
}

const QUOTES = [
  ["A brilliant experience here I must say, the staff are all friendly and very knowledgeable, the shop is like an Aladins cave when it comes to automotive supplies, not just for farm machinery, but even rowing equipment and tools. Highly recommended.", "Colin"],
  ["Great place, great staff and affordable", "Joe"],
  ["Excellent friendly staff. Lovely location. Quick service.", "Marie"],
  ["Staff were only Great and helpful and had everything", "Gordon"],
  ["Full service culture and they have almost everything you need for the machines", "Jan"],
  ["Loads of tractors and machines nice people to deal with", "J&R Tyres"],
  ["Good service by parts staff", "Google reviewer"],
];
export function Testimonials() {
  const [i, setI] = useState(0);
  const n = QUOTES.length;
  useEffect(() => { const el = document.getElementById("q-live"); if (el) el.setAttribute("aria-live", "polite"); }, []);
  const [q, who] = QUOTES[i];
  return (
    <div>
      <div id="q-live">
        <motion.blockquote key={i} className="quote" style={{ margin: 0, fontSize: q.length > 120 ? undefined : undefined }} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {q}
          <footer className="qwho">{who}, Co. Kildare<small>Customer review quoted from the existing website</small></footer>
        </motion.blockquote>
      </div>
      <div className="qctl">
        <button className="ar" aria-label="Previous review" onClick={() => setI((i + n - 1) % n)}><ChevronLeft /></button>
        <button className="ar" aria-label="Next review" onClick={() => setI((i + 1) % n)}><ChevronRight /></button>
        <div className="qdots" role="group" aria-label="Choose review">
          {QUOTES.map((_, k) => <button key={k} aria-label={`Review ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />)}
        </div>
      </div>
    </div>
  );
}

export function Arrow() { return <ArrowRight size={18} className="arr" aria-hidden />; }
