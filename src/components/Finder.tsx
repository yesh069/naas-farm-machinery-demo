"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";
import { products, FAMILIES, BRANDS, brandLabel, familyOf } from "@/lib/products";

const PAGE = 24;
const famIndex = Object.fromEntries(FAMILIES.map((f, i) => [f.id, i]));

export default function Finder() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") ?? "");
  const [fam, setFam] = useState(sp.get("family") ?? "");
  const [type, setType] = useState(sp.get("type") ?? "");
  const [brand, setBrand] = useState(sp.get("brand") ?? "");
  const [sort, setSort] = useState("range");
  const [shown, setShown] = useState(PAGE);
  const [panel, setPanel] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams();
    if (q) p.set("q", q); if (fam) p.set("family", fam); if (type) p.set("type", type); if (brand) p.set("brand", brand);
    window.history.replaceState(null, "", p.toString() ? `?${p}` : window.location.pathname);
    setShown(PAGE);
  }, [q, fam, type, brand]);

  const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
  const base = useMemo(() => products.filter((p) => {
    if (tokens.length) {
      const hay = `${p.name} ${brandLabel(p.brand)} ${p.brand} ${p.type} ${p.subtype ?? ""} ${p.intro}`.toLowerCase();
      if (!tokens.every((t) => hay.includes(t))) return false;
    }
    return true;
  }), [q]); // eslint-disable-line

  const inFam = (p: (typeof products)[number]) => !fam || familyOf(p).id === fam;
  const inBrand = (p: (typeof products)[number]) => !brand || p.brand === brand;
  const inType = (p: (typeof products)[number]) => !type || (p.subtype ?? p.type) === type;

  const famCounts = (id: string) => base.filter((p) => inBrand(p) && familyOf(p).id === id).length;
  const brandCounts = (b: string) => base.filter((p) => inFam(p) && p.brand === b).length;
  const typeOpts = useMemo(() => {
    const m = new Map<string, number>();
    base.filter((p) => inFam(p) && inBrand(p)).forEach((p) => { const k = p.subtype ?? p.type; m.set(k, (m.get(k) ?? 0) + 1); });
    return [...m.entries()].sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }));
  }, [base, fam, brand]); // eslint-disable-line

  const list = useMemo(() => {
    const r = base.filter((p) => inFam(p) && inBrand(p) && inType(p));
    if (sort === "az") return [...r].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    return [...r].sort((a, b) => famIndex[familyOf(a).id] - famIndex[familyOf(b).id] || (a.brand ?? "").localeCompare(b.brand ?? "") || a.name.localeCompare(b.name, undefined, { numeric: true }));
  }, [base, fam, brand, type, sort]); // eslint-disable-line

  const reset = () => { setQ(""); setFam(""); setType(""); setBrand(""); };
  const active = [q && { k: "q", l: `“${q}”`, c: () => setQ("") }, fam && { k: "f", l: FAMILIES.find((f) => f.id === fam)?.label, c: () => { setFam(""); setType(""); } }, type && { k: "t", l: type, c: () => setType("") }, brand && { k: "b", l: brandLabel(brand), c: () => setBrand("") }].filter(Boolean) as { k: string; l: string; c: () => void }[];

  return (
    <div className="wrap cat">
      <aside className={`filters ${panel ? "show" : ""}`} aria-label="Filters">
        <div className="search">
          <Search size={18} aria-hidden />
          <input type="search" aria-label="Search machinery" placeholder="Search e.g. 6C, plough, Hardi" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div>
          <h4>Equipment type</h4>
          <ul className="opts">
            {FAMILIES.map((f) => ({ f, n: famCounts(f.id) })).filter((x) => x.n > 0 || fam === x.f.id).map(({ f, n }) => (
              <li key={f.id}><button aria-pressed={fam === f.id} onClick={() => { setFam(fam === f.id ? "" : f.id); setType(""); }}>{f.label}<span>{n}</span></button></li>
            ))}
          </ul>
        </div>
        {typeOpts.length > 1 && (
          <div>
            <h4>{fam ? "Model range / category" : "Category"}</h4>
            <select className="select" aria-label="Category" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All ({typeOpts.reduce((a, b) => a + b[1], 0)})</option>
              {typeOpts.map(([t, n]) => <option key={t} value={t}>{t} ({n})</option>)}
            </select>
          </div>
        )}
        <div>
          <h4>Brand</h4>
          <ul className="opts">
            {BRANDS.map((b) => ({ b, n: brandCounts(b) })).filter((x) => x.n > 0 || brand === x.b).map(({ b, n }) => (
              <li key={b}><button aria-pressed={brand === b} onClick={() => setBrand(brand === b ? "" : b)}>{brandLabel(b)}<span>{n}</span></button></li>
            ))}
          </ul>
        </div>
        {active.length > 0 && <button className="btn btn-ghost dark" onClick={reset}>Clear all filters</button>}
      </aside>

      <div>
        <div className="cat-top">
          <div>
            <button className="btn btn-ghost dark fbtn" onClick={() => setPanel(!panel)} aria-expanded={panel}><SlidersHorizontal size={16} /> Filters{active.length ? ` (${active.length})` : ""}</button>
            <p style={{ margin: 0 }} aria-live="polite"><b>{list.length}</b> {list.length === 1 ? "machine" : "machines"}</p>
          </div>
          <label style={{ fontSize: ".85rem", display: "flex", gap: 8, alignItems: "center" }}>Sort
            <select className="select" style={{ width: "auto" }} value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="range">By range</option><option value="az">A–Z</option>
            </select>
          </label>
        </div>
        {active.length > 0 && (
          <div className="chips" style={{ marginBottom: 22 }}>
            {active.map((a) => <button key={a.k} className="chip" onClick={a.c} aria-label={`Remove filter ${a.l}`}>{a.l} <X size={14} /></button>)}
          </div>
        )}
        {list.length === 0 ? (
          <div className="empty">
            <h3>No machines match that search</h3>
            <p>Try fewer words, or call the team on 045 876710. If it is not listed, we can often source it.</p>
            <button className="btn btn-primary" onClick={reset}>Clear filters</button>
          </div>
        ) : (
          <>
            <div className="grid">{list.slice(0, shown).map((p, i) => <ProductCard key={p.id} p={p} priority={i < 4} />)}</div>
            {shown < list.length && (
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <button className="btn btn-primary" onClick={() => setShown(shown + PAGE)}>Show more ({list.length - shown} remaining)</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
