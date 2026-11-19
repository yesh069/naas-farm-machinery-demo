import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "TAMS 3 Grants & Eligible Machinery",
  description: "TAMS 3 grants explained for Kildare farmers: 40–60% funding on eligible farm machinery. Naas Farm Machinery can advise. Call 045 876710.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow light">TAMS 3 · 2023–2027</p>
          <h1>TAMS 3 grants and eligible machinery.</h1>
          <p>The Targeted Agricultural Modernisation Scheme provides grant aid of 40–60% toward eligible farm machinery, equipment and infrastructure.</p>
        </div>
      </section>
      <section className="pad wrap">
        <div className="three">
          <div><b>40–60%</b>grant aid toward eligible costs</div>
          <div><b>2023–27</b>the current scheme period</div>
          <div><b>Tranches</b>applications open periodically with closing dates</div>
        </div>
        <div className="prose">
          <h2>Who qualifies?</h2>
          <p>TAMS 3 is open to all registered herd owners in Ireland. Higher grant rates of up to 60% are available for young farmers, women in agriculture, and certain scheme categories including organic farming.</p>
          <h2>What machinery is eligible?</h2>
          <p>A wide range of agricultural machinery and equipment qualifies under TAMS 3, including:</p>
          <ul><li>Slurry equipment</li><li>Fencing and water systems</li><li>Rainwater harvesting</li><li>Animal welfare equipment</li><li>Tillage equipment</li><li>Energy efficiency measures</li><li>Safety equipment</li></ul>
          <p>Many of the machinery brands we stock are TAMS 3 eligible. Ask in store, or send us the model you are looking at.</p>
          <h2>How do tranches work?</h2>
          <p>Applications open in tranches throughout the year with specific closing dates. Contact us to find out the current tranche status and closing date.</p>
          <h2>How can Naas Farm Machinery help?</h2>
          <p>We have been helping Kildare and Leinster farmers with TAMS grant-eligible machinery since the scheme began. Our team can:</p>
          <ul><li>Advise on which machinery qualifies under TAMS 3</li><li>Help you identify the right equipment for your farm</li><li>Support you through the purchase process once approval is granted</li></ul>
          <p style={{ marginTop: 28 }}><Link href="/machinery/" className="btn btn-primary">Browse machinery</Link> &nbsp; <a className="btn btn-ghost dark" href="https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/" target="_blank" rel="noopener noreferrer">Department of Agriculture <ArrowUpRight size={16} aria-hidden /></a></p>
          <p className="fine" style={{ marginTop: 14 }}>Scheme rates, eligibility and tranche dates are set by the Department of Agriculture, Food and the Marine. Always confirm current terms with the Department before purchase. <em>Demo note: confirm the exact official TAMS 3 page URL before launch.</em></p>
        </div>
      </section>
      <section className="pad" style={{ background: "var(--ivory)" }}>
        <div className="wrap contact-grid">
          <div><p className="eyebrow">Talk to us</p><h2>Ask about eligible machinery.</h2><p style={{ marginTop: 18 }}>Visit Maudlins Industrial Estate, Monread Road, Naas, or call <a className="link-u" href="tel:045876710">045 876710</a>.</p></div>
          <EnquiryForm id="tams-enquiry" />
        </div>
      </section>
    </>
  );
}
