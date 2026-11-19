import Link from "next/link";
import { Product, brandLabel, keySpecs } from "@/lib/products";

export default function ProductCard({ p, priority = false }: { p: Product; priority?: boolean }) {
  const specs = keySpecs(p, 2);
  return (
    <Link href={`/machinery/${p.slug}/`} className="pcard">
      <div className="pic">
        <img src={p.images[0]} alt={`${brandLabel(p.brand)} ${p.name}`} loading={priority ? "eager" : "lazy"} decoding="async" />
      </div>
      <div className="meta">
        {p.brand && <span className="brand">{brandLabel(p.brand)}</span>}
        <h3>{p.name}</h3>
        <span className="type">{p.subtype ?? p.type}</span>
        {specs.length > 0 && (
          <dl>{specs.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}</dl>
        )}
      </div>
    </Link>
  );
}
