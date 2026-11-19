import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Wrench, Truck, Package, Handshake, Users, Phone } from "lucide-react";
import { HeroImage, HeroFinder, Testimonials } from "@/components/HomeClient";
import { Reveal } from "@/components/Motion";
import ProductCard from "@/components/ProductCard";
import EnquiryForm from "@/components/EnquiryForm";
import { DONEDEAL } from "@/components/Header";
import { FAMILIES, BRANDS, brandLabel, brandLogo, bySlug, familyOf, products, FEATURED } from "@/lib/products";

const THUMB: Record<string, string> = {
  tillage: "bav", seeding: "sh-hoppers", spraying: "ranger", grassland: "tbe-tbes-10", slurry: "minimuck",
  feeding: "verti-mix-double", trailers: "dump-trailer-smk", loaders: "ze385g-pro", other: "",
};

export default function Home() {
  const featured = FEATURED.map(bySlug).filter(Boolean) as NonNullable<ReturnType<typeof bySlug>>[];
  const tractor = bySlug("9340-agrotron-ttv")!;
  const fams = FAMILIES.filter((f) => f.id !== "other");
  const count = (id: string) => products.filter((p) => familyOf(p).id === id).length;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <HeroImage />
        <div className="wrap">
          <p className="eyebrow light">Naas, Co. Kildare · Established 1986</p>
          <h1>Farm machinery from a Kildare family, <em>since 1986.</em></h1>
          <p className="lede">New tractors and equipment from Deutz-Fahr, KUHN, Hardi, Fleming, Strautmann and Zoomlion, backed by our own workshop, parts store and TAMS 3 guidance.</p>
          <div className="hero-actions">
            <Link href="/machinery/" className="btn btn-wheat">Explore machinery <ArrowRight size={18} className="arr" aria-hidden /></Link>
            <a href="tel:045876710" className="btn btn-ghost"><Phone size={18} aria-hidden /> 045 876710</a>
          </div>
          <HeroFinder />
        </div>
        <div className="hero-tag"><b>40+ years</b>serving Kildare farmers</div>
      </section>

      {/* BRANDS */}
      <div className="brands" aria-label="Brands we supply">
        <div className="wrap brands-in">
          <span className="lbl">Brands we supply</span>
          {BRANDS.map((b) => (
            <Link key={b} href={`/machinery/?brand=${encodeURIComponent(b)}`} aria-label={`${brandLabel(b)} machinery`}>
              <img src={brandLogo[b]} alt={brandLabel(b)} height={40} width={115} />
            </Link>
          ))}
        </div>
      </div>

      {/* RANGE */}
      <section className="pad">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">The range</p>
            <h2 style={{ maxWidth: "18ch" }}>Find the machine for the job.</h2>
          </Reveal>
          <div className="range">
            <Reveal>
              <Link href="/machinery/?family=tractors" className="range-feature">
                <div className="pic"><img src={tractor.images[0]} alt={`${brandLabel(tractor.brand)} ${tractor.name} tractor`} /></div>
                <div className="txt">
                  <span className="num">{count("tractors")} models</span>
                  <h3>Tractors</h3>
                  <p>Deutz-Fahr, from 50 hp compact models to 340 hp row-crop machines, plus orchard tractors.</p>
                  <span className="link-u" style={{ fontWeight: 600 }}>Browse tractors →</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="rlist">
                {fams.filter((f) => f.id !== "tractors").map((f, i) => {
                  const t = THUMB[f.id] ? bySlug(THUMB[f.id]) : undefined;
                  return (
                    <li key={f.id}>
                      <Link href={`/machinery/?family=${f.id}`}>
                        <span className="n">{String(i + 2).padStart(2, "0")}</span>
                        <div><h3>{f.label}</h3><p>{f.blurb}</p></div>
                        <span className="ct">{count(f.id)} models</span>
                        <span className="th">{t && <img src={t.images[0]} alt="" loading="lazy" />}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="feat pad" style={{ paddingInline: 0 }}>
        <div className="wrap">
          <div className="feat-head">
            <Reveal>
              <p className="eyebrow">From the catalogue</p>
              <h2>Machines to start with.</h2>
            </Reveal>
            <Link href="/machinery/" className="btn btn-ghost dark">View all {products.length} machines <ArrowRight size={18} className="arr" aria-hidden /></Link>
          </div>
        </div>
        <div className="scroller" tabIndex={0} aria-label="Featured machinery, scrolls horizontally">
          {featured.map((p) => <div key={p.id}><ProductCard p={p} /></div>)}
        </div>
      </section>

      {/* HERITAGE */}
      <section className="pad">
        <div className="wrap heritage">
          <Reveal>
            <div className="big-year" aria-label="Established 1986">1986<small>Naas Farm Machinery established</small></div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Our story</p>
            <h2 style={{ marginBottom: 24 }}>Four decades, one family, the same yard.</h2>
            <p>Naas Farm Machinery was established by George Delahunt in 1986. Today it is run by his two sons, Donal and Gary, with mechanics who each bring over 30 years of experience, an extensive stores and parts department and a large yard of new and second-hand machines.</p>
            <p>We supply machines to farmers, the equine community and everyone in between.</p>
            <div className="facts">
              <div><b>6</b><span>brand ranges supplied</span></div>
              <div><b>{products.length}</b><span>models in this catalogue</span></div>
              <div><b>7</b><span>workshop bays</span></div>
              <div><b>4</b><span>service vans on call-out</span></div>
            </div>
            <p style={{ marginTop: 28 }}><Link href="/about/" className="link-u" style={{ fontWeight: 600 }}>More about the family →</Link></p>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="why pad">
        <div className="wrap why-grid">
          <Reveal>
            <p className="eyebrow light">Why Naas Farm Machinery</p>
            <h2>The machine is the start of the relationship.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="why-list">
              <li><Users className="ic" size={30} /><div><h3>Family-run, locally known</h3><p>You deal with the people whose name is over the gate. Customers describe the staff as friendly, knowledgeable and helpful.</p></div></li>
              <li><Wrench className="ic" size={30} /><div><h3>Our own workshop</h3><p>A 7-bay workshop with 5 mechanics, for agricultural and construction machinery, across all major brands.</p></div></li>
              <li><Truck className="ic" size={30} /><div><h3>Call-out across Leinster</h3><p>Four service vans cover Kildare, Dublin, Wicklow, Carlow and Laois, with 24-hour call-out available on request.</p></div></li>
              <li><Package className="ic" size={30} /><div><h3>Stores and parts</h3><p>An extensive parts department, so the part you need is usually on the shelf.</p></div></li>
              <li><Handshake className="ic" size={30} /><div><h3>Help with TAMS 3</h3><p>We advise on which machinery qualifies and support the purchase once approval is granted.</p></div></li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* TAMS */}
      <section className="pad">
        <div className="wrap">
          <Reveal>
            <div className="tams">
              <div className="l">
                <p className="eyebrow">TAMS 3 · 2023–2027</p>
                <h2>Grant aid on eligible machinery.</h2>
                <ul>
                  <li><Check size={18} /> Open to registered herd owners in Ireland</li>
                  <li><Check size={18} /> Higher rates for young farmers, women in agriculture and certain categories</li>
                  <li><Check size={18} /> Applications open in tranches with set closing dates</li>
                </ul>
                <Link href="/tams-3/" className="btn btn-primary">How TAMS 3 works <ArrowRight size={18} className="arr" aria-hidden /></Link>
              </div>
              <div className="r">
                <div className="pct" aria-label="40 to 60 percent">40–60%</div>
                <p style={{ margin: 0 }}>of the cost of eligible machinery, equipment and infrastructure. Many of the brands we stock are TAMS 3 eligible: ask us which models qualify.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* USED */}
      <section className="used pad">
        <div className="wrap used-in">
          <Reveal>
            <p className="eyebrow light">Used machinery</p>
            <h2 style={{ marginBottom: 22 }}>Second-hand stock, listed live on DoneDeal.</h2>
            <p style={{ maxWidth: "52ch", color: "#cfcdc3" }}>Our yard carries new and second-hand machines. The current used stock is kept up to date on our DoneDeal dealer page.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="used-box">
              <dl>
                <div><dt>Where</dt><dd>DoneDeal dealer page</dd></div>
                <div><dt>Dealer</dt><dd>Naas Farm Machinery Ltd</dd></div>
                <div><dt>Prefer to talk?</dt><dd>045 876710</dd></div>
              </dl>
              <a className="btn btn-wheat" href={DONEDEAL} target="_blank" rel="noopener noreferrer">View used machinery <ArrowUpRight size={18} aria-hidden /></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="tst pad">
        <div className="wrap tst-grid">
          <Reveal>
            <p className="eyebrow">What customers say</p>
            <h2>Kind words from Kildare.</h2>
          </Reveal>
          <Reveal delay={0.1}><div style={{ paddingLeft: "clamp(0px,3vw,48px)" }}><Testimonials /></div></Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="pad" id="enquire">
        <div className="wrap contact-grid">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 style={{ marginBottom: 28 }}>Tell us what you need.</h2>
            <div className="cinfo">
              <p><a className="big" href="tel:045876710">045 876710</a></p>
              <p><a href="mailto:enquiries@naasfarmmachinery.com" className="link-u">enquiries@naasfarmmachinery.com</a></p>
              <p style={{ margin: "20px 0 22px" }}>Maudlins Industrial Estate, Monread Road,<br />Naas, Co. Kildare, W91 AX6N</p>
            </div>
            <ul className="hours"><li><span>Monday – Friday</span><b>9:00 – 17:30</b></li><li><span>Saturday</span><b>9:00 – 13:00</b></li><li><span>Sunday</span><b>Closed</b></li></ul>
          </Reveal>
          <Reveal delay={0.1}><EnquiryForm /></Reveal>
        </div>
      </section>
    </>
  );
}
