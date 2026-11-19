import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, Phone } from "lucide-react";
import { products, bySlug, brandLabel, familyOf, parseSections, tidy } from "@/lib/products";
import { Gallery, ReadMore } from "@/components/ProductClient";
import EnquiryForm from "@/components/EnquiryForm";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = bySlug((await params).slug);
  if (!p) return {};
  const title = `${brandLabel(p.brand)} ${p.name}`.trim();
  return { title, description: `${title}: ${p.subtype ?? p.type} available from Naas Farm Machinery, Co. Kildare. ${p.intro.slice(0, 110)}`.slice(0, 160), openGraph: { images: [p.images[0]] } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = bySlug((await params).slug);
  if (!p) notFound();
  const fam = familyOf(p);
  const { specs, bullets, text } = parseSections(p);
  const related = products.filter((x) => x.id !== p.id && x.type === p.type && (x.subtype === p.subtype || x.brand === p.brand)).slice(0, 4);
  const full = `${brandLabel(p.brand)} ${p.name}`.trim();
  const ld = { "@context": "https://schema.org", "@type": "Product", name: full, brand: p.brand ? { "@type": "Brand", name: brandLabel(p.brand) } : undefined, image: p.images, description: p.intro || undefined, category: p.subtype ?? p.type };

  return (
    <div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>/<Link href="/machinery/">Machinery</Link>/<Link href={`/machinery/?family=${fam.id}`}>{fam.label}</Link>/<span aria-current="page">{p.name}</span>
      </nav>
      <div className="prod">
        <Gallery images={p.images} alt={full} />
        <div className="pinfo">
          {p.brand && <span className="eyebrow" style={{ marginBottom: 0 }}>{brandLabel(p.brand)}</span>}
          <h1>{p.name}</h1>
          <div className="ptags"><span className="tag">{fam.label}</span>{p.subtype && <span className="tag">{p.subtype}</span>}</div>
          {p.intro && <ReadMore text={tidy(p.intro)} />}
          <div className="pbox">
            <h3>Interested in the {p.name}?</h3>
            <p style={{ margin: 0 }}>Ask about availability, delivery and whether it qualifies for TAMS 3 grant aid.</p>
            <div className="acts">
              <a className="btn btn-wheat" href="#enquire">Enquire about this machine</a>
              <a className="btn btn-ghost" href="tel:045876710"><Phone size={16} aria-hidden /> 045 876710</a>
            </div>
          </div>
        </div>
      </div>

      {(specs.length > 0 || bullets.length > 0 || text.length > 0) && (
        <section className="details" aria-label="Specifications" style={specs.length === 0 && bullets.length === 0 ? { gridTemplateColumns: "minmax(0,72ch)" } : undefined}>
          {(specs.length > 0 || bullets.length > 0) && <div>
            {specs.length > 0 && (<><h3>Specifications</h3><table className="specs"><tbody>{specs.map(([k, v], i) => (<tr key={k + i}><th scope="row">{k}</th><td>{v}</td></tr>))}</tbody></table></>)}
            {specs.length === 0 && bullets.slice(0, 1).map((b) => (<div key={b.title}><h3>{b.title}</h3><ul className="ticks">{b.items.map((it) => <li key={it}><Check size={16} aria-hidden />{it}</li>)}</ul></div>))}
          </div>}
          <div>
            {(specs.length > 0 ? bullets : bullets.slice(1)).map((b) => (
              <div key={b.title}><h3>{b.title}</h3><ul className="ticks">{b.items.map((it) => <li key={it}><Check size={16} aria-hidden />{it}</li>)}</ul></div>
            ))}
            {text.map((t) => (<div key={t.title}><h3 style={{ fontSize: "1.25rem" }}>{tidy(t.title)}</h3>{t.items.map((it) => <p key={it} className="longtxt">{tidy(it)}</p>)}</div>))}
          </div>
        </section>
      )}

      <section className="details" id="enquire" style={{ scrollMarginTop: 100 }}>
        <div>
          <p className="eyebrow">Enquire</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", marginBottom: 18 }}>Ask the team about the {p.name}.</h2>
          <p>Prices are not listed online. Tell us what you need and we will come back with availability and a quote. You can also call us on <a className="link-u" href="tel:045876710">045 876710</a> (Mon–Fri 9am–5:30pm, Sat 9am–1pm).</p>
          <p><Link href="/tams-3/" className="link-u" style={{ fontWeight: 600 }}>Check TAMS 3 eligibility →</Link></p>
        </div>
        <EnquiryForm product={full} id="product-enquiry" />
      </section>

      {related.length > 0 && (
        <section style={{ padding: "40px 0 100px", borderTop: "1px solid var(--line)" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,2.6vw,2.2rem)", marginBottom: 28 }}>Related machinery</h2>
          <div className="grid">{related.map((r) => <ProductCard key={r.id} p={r} />)}</div>
        </section>
      )}
      <div className="enq-bar"><a className="btn btn-wheat" href="#enquire">Enquire</a><a className="btn btn-ghost" style={{ color: "#fff" }} href="tel:045876710">Call</a></div>
    </div>
  );
}
