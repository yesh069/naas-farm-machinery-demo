"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { FAMILIES, BRANDS, brandLabel, products } from "@/lib/products";

export const DONEDEAL = "https://www.donedeal.ie/dealer/naas-farm-machinery-ltd";

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const cur = (href: string) => (path === href || path === href + "/" || (href !== "/" && path.startsWith(href)) ? "page" : undefined);
  const count = (f: string) => products.filter((p) => p.brand === f).length;

  return (
    <>
      <div className="announce">
        TAMS 3 grant aid of 40–60% may be available on eligible machinery. <Link href="/tams-3/">See how we can help</Link>
      </div>
      <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap hdr-in">
          <Link href="/" className="logo" aria-label="Naas Farm Machinery, home">
            <img src="/img/brand/logo.png" alt="Naas Farm Machinery" width={150} height={65} />
          </Link>
          <nav className="nav" aria-label="Main">
            <div className="dd">
              <button aria-haspopup="true">Machinery</button>
              <div className="mega">
                <div>
                  <h4>Equipment type</h4>
                  <ul>
                    {FAMILIES.filter((f) => f.id !== "other").map((f) => (
                      <li key={f.id}><Link href={`/machinery/?family=${f.id}`}>{f.label}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Brands</h4>
                  <ul>
                    {BRANDS.map((b) => (
                      <li key={b}><Link href={`/machinery/?brand=${encodeURIComponent(b)}`}>{brandLabel(b)} <span>{count(b)}</span></Link></li>
                    ))}
                  </ul>
                  <p style={{ marginTop: 16 }}><Link href="/machinery/" className="link-u" style={{ fontWeight: 600 }}>Browse all machinery</Link></p>
                </div>
              </div>
            </div>
            <a href={DONEDEAL} target="_blank" rel="noopener noreferrer">Used machinery</a>
            <Link href="/tams-3/" aria-current={cur("/tams-3")}>TAMS 3</Link>
            <Link href="/workshop/" aria-current={cur("/workshop")}>Workshop</Link>
            <Link href="/about/" aria-current={cur("/about")}>About</Link>
            <Link href="/contact/" aria-current={cur("/contact")}>Contact</Link>
          </nav>
          <div className="hdr-cta">
            <a className="phone" href="tel:045876710"><Phone size={18} aria-hidden /><span>045 876710</span></a>
            <Link className="btn btn-primary" href="/contact/">Enquire</Link>
            <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu size={22} /></button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mnav" role="dialog" aria-modal="true" aria-label="Menu" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
            <div className="mnav-top">
              <span style={{ font: "300 1.4rem var(--font-display)" }}>Naas Farm Machinery</span>
              <button className="burger" style={{ display: "grid", color: "#fff", borderColor: "rgba(255,255,255,.3)" }} aria-label="Close menu" onClick={() => setOpen(false)}><X size={22} /></button>
            </div>
            <Link className="big" href="/machinery/">Machinery <span>→</span></Link>
            <a className="big" href={DONEDEAL} target="_blank" rel="noopener noreferrer">Used machinery <ArrowUpRight /></a>
            <Link className="big" href="/tams-3/">TAMS 3 <span>→</span></Link>
            <Link className="big" href="/workshop/">Workshop <span>→</span></Link>
            <Link className="big" href="/about/">About <span>→</span></Link>
            <Link className="big" href="/contact/">Contact <span>→</span></Link>
            <div className="small">
              <p><a href="tel:045876710" style={{ color: "#fff", fontSize: "1.3rem" }}>045 876710</a></p>
              <p>Mon–Fri 9am–5:30pm · Sat 9am–1pm</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
