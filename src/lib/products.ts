import raw from "@/data/products.json";

export type Section = { title: string; items: string[] };
export type Product = {
  id: number; slug: string; name: string; brand: string | null; type: string; subtype: string | null;
  intro: string; sections: Section[]; images: string[]; source: string;
};
export const products = raw as Product[];

export const FAMILIES: { id: string; label: string; blurb: string; types: string[] }[] = [
  { id: "tractors", label: "Tractors", blurb: "Deutz-Fahr from 50 hp to 340 hp, plus orchard models.", types: ["Tractors"] },
  { id: "tillage", label: "Tillage & Cultivation", blurb: "Ploughs, cultivators, rotavators, power harrows and rollers.", types: ["Tillage Implements", "Cultivators", "Ploughs", "Rotavators", "Discs Harrows", "Strip-Till", "Land Leveller", "Rollers", "Harrows"] },
  { id: "seeding", label: "Seed Drills", blurb: "Mounted, trailed and integrated drills, mechanical and air.", types: ["Drills"] },
  { id: "spraying", label: "Sprayers", blurb: "Trailed, mounted and self-propelled crop sprayers by Hardi and Kuhn.", types: ["Sprayers"] },
  { id: "grassland", label: "Grassland & Forage", blurb: "Mowers, toppers, tedders, forage wagons and grass harrows.", types: ["Flail Mowers", "Toppers", "Tedders", "Forage Wagon", "Picking-up Technology", "Grass Harrows", "Aerators", "Finishing Mowers", "Arena Harrows"] },
  { id: "slurry", label: "Slurry, Muck & Spreading", blurb: "Slurry tankers, muck and fertiliser spreaders, agitators.", types: ["Manure Spreaders", "Tankers", "Agitators", "Fertiliser Spreader", "Spreaders"] },
  { id: "feeding", label: "Feeding", blurb: "Fodder mixing wagons and diet feeders from Strautmann and Kuhn.", types: ["Mixing Wagons", "Diet Feeders"] },
  { id: "trailers", label: "Trailers & Transport", blurb: "Tipping and dump trailers, transport boxes and wagons.", types: ["Trailers", "Transport Boxes", "Transport Wagons"] },
  { id: "loaders", label: "Excavators & Loaders", blurb: "Zoomlion excavators, skid steers and track loaders; loader attachments.", types: ["Excavators", "Loader Attachments", "Yard Scrapers"] },
  { id: "other", label: "Other Products", blurb: "Further equipment from our range.", types: ["Other Products"] },
];

export const familyOf = (p: Product) => FAMILIES.find((f) => f.types.includes(p.type)) ?? FAMILIES[FAMILIES.length - 1];
export const BRANDS = ["Deutz Fahr", "Kuhn", "Hardi", "Fleming", "Strautmann", "Zoomlion"] as const;
export const brandLabel = (b: string | null) => (b === "Deutz Fahr" ? "Deutz-Fahr" : b === "Kuhn" ? "KUHN" : b ?? "");
export const brandLogo: Record<string, string> = {
  "Deutz Fahr": "/img/brand/deutz.png", Kuhn: "/img/brand/kuhn.png", Hardi: "/img/brand/hardi.png",
  Fleming: "/img/brand/fleming.png", Strautmann: "/img/brand/strautmann.jpg", Zoomlion: "/img/brand/zoomlion.png",
};

export type Spec = [string, string];
const SPEC = /^([^:]{2,42}):\s*(.{1,80})$/;
export function parseSections(p: Product) {
  const specs: Spec[] = []; const bullets: { title: string; items: string[] }[] = []; const text: { title: string; items: string[] }[] = [];
  for (const s of p.sections) {
    const rows: Spec[] = []; const rest: string[] = [];
    for (const it of s.items) { const m = it.match(SPEC); if (m && it.length < 100) rows.push([m[1].trim(), m[2].trim()]); else rest.push(it); }
    if (rows.length >= Math.max(1, rest.length)) { specs.push(...rows); if (rest.length) bullets.push({ title: s.title, items: rest }); }
    else if (rest.every((r) => r.length < 140)) bullets.push({ title: s.title, items: s.items });
    else text.push({ title: s.title, items: s.items });
  }
  return { specs, bullets, text };
}
export function keySpecs(p: Product, n = 2): Spec[] {
  const { specs } = parseSections(p);
  return specs.filter(([, v]) => v.length <= 26).slice(0, n);
}
export const bySlug = (slug: string) => products.find((p) => p.slug === slug);
export const countBy = (fn: (p: Product) => string | null) => {
  const m = new Map<string, number>(); products.forEach((p) => { const k = fn(p); if (k) m.set(k, (m.get(k) ?? 0) + 1); }); return m;
};
export const FEATURED = ["9340-agrotron-ttv", "6c-series", "tbe-tbes-10", "ranger", "verti-mix-double", "ze385g-pro", "hydraulic-lifting-roller", "giga-vitessecfs"];

/** Source copy often has SHOUTING sub-headlines; render them in sentence case. */
export function tidy(s: string): string {
  const out = s.replace(/((?:\b[A-Z0-9][A-Z0-9'’&\-/.,:]*\b[\s]+){2,}\b[A-Z0-9][A-Z0-9'’&\-/.,:]*\b)/g, (run) => {
    const low = run.toLowerCase();
    return low.charAt(0).toUpperCase() + low.slice(1);
  });
  // add a separator when a heading word runs straight into the sentence-cased tagline ("Engine Increase power...")
  return out.replace(/([a-z])\.\s+([a-z])/g, (_m, a, b) => `${a}. ${b.toUpperCase()}`);
}
