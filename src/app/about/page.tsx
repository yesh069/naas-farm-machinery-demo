import Link from "next/link";
import type { Metadata } from "next";
import { brandLabel, brandLogo, BRANDS } from "@/lib/products";

export const metadata: Metadata = {
  title: "About Us",
  description: "Established in 1986, Naas Farm Machinery is a family-run dealer for KUHN, Deutz-Fahr, Hardi, Fleming and more, serving farmers across Kildare for nearly 40 years.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow light">About us</p>
          <h1>A family business, since 1986.</h1>
        </div>
      </section>
      <section className="pad wrap">
        <div className="heritage">
          <div className="big-year">1986<small>Established</small></div>
          <div>
            <p style={{ fontSize: "1.2rem" }}>Established by George Delahunt in 1986, Naas Farm Machinery has served the wider farming and equine communities for nearly four decades.</p>
            <p>A family business, now run by George’s two sons, Donal and Gary. With fantastic mechanics with over 30 years of experience, an extensive stores and parts department and a large yard full of new and second-hand machines.</p>
            <p>We supply machines to farmers, equine and everyone in between.</p>
            <p>Naas Farm Machinery is a dealer for Deutz, KUHN, Hardi, Fleming, Strautmann, Conor, Gwaza, APV, ODON, Tanco, Rossmore, Malone, Kentec and Foxes.</p>
            <p style={{ marginTop: 28 }}><Link className="btn btn-primary" href="/contact/">Visit or contact us</Link></p>
          </div>
        </div>
        <div className="brands" style={{ marginTop: 80, borderTop: "1px solid var(--line)" }}>
          <div className="brands-in">
            {BRANDS.map((b) => <Link key={b} href={`/machinery/?brand=${encodeURIComponent(b)}`}><img src={brandLogo[b]} alt={brandLabel(b)} height={40} width={115} /></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
