import type { Metadata } from "next";
import { Phone } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Workshop & Repairs",
  description: "7-bay workshop, 5 mechanics and 4 service vans. Agricultural and construction machinery repairs and servicing in Naas, Kildare. 24-hour call-out available.",
};

const FAQ = [
  ["Do you repair and service farm machinery?", "Yes. Our 7-bay workshop with 5 experienced mechanics handles repairs and servicing for all types of agricultural and construction machinery."],
  ["Do you offer call-out repairs?", "Yes. We run 4 service vans for call-out repairs and servicing across Kildare and Leinster, with out-of-hours and 24-hour call-out available on request."],
  ["What areas do you cover?", "Naas and the wider Kildare area, with call-out servicing throughout Leinster including Dublin, Wicklow, Carlow and Laois."],
  ["How do I book a repair or service?", "Call 045 876710 or use the enquiry form. For breakdowns and emergencies, ask about our 24-hour call-out service."],
  ["What brands do you service?", "Deutz-Fahr, KUHN, Hardi, Fleming, Strautmann and Zoomlion, as well as most other makes."],
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow light">Workshop & repairs</p>
          <h1>Keeping your machinery working.</h1>
          <p>Workshop and call-out repairs and servicing for a wide range of agricultural and construction machinery.</p>
        </div>
      </section>
      <section className="pad wrap">
        <div className="three">
          <div><b>7</b>bay workshop in Naas</div>
          <div><b>5</b>experienced mechanics</div>
          <div><b>4</b>service vans for call-out</div>
        </div>
        <div className="contact-grid" style={{ marginTop: 56 }}>
          <div className="prose">
            <h2 style={{ marginTop: 0 }}>Repairs & servicing</h2>
            <ul><li>In-workshop repairs and servicing</li><li>Call-out repairs and servicing</li><li>Vehicle and machine transport can be arranged</li><li>Out-of-hours and 24-hour call-out available on request</li></ul>
            <h2>Workshop hours</h2>
            <ul className="hours" style={{ listStyle: "none", padding: 0 }}><li><span>Monday – Friday</span><b>9:00am – 5:30pm</b></li><li><span>Saturday</span><b>9:00am – 1:00pm</b></li></ul>
            <p>For out-of-hours or 24-hour call-out requests, please call us.</p>
            <a className="btn btn-primary" href="tel:045876710"><Phone size={18} aria-hidden /> Call 045 876710</a>
          </div>
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: 20 }}>Common questions</h2>
            {FAQ.map(([q, a]) => (
              <details key={q} style={{ borderBottom: "1px solid var(--line)", padding: "16px 0" }}>
                <summary style={{ cursor: "pointer", fontWeight: 600 }}>{q}</summary>
                <p style={{ margin: "10px 0 0", color: "var(--muted)" }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="pad" style={{ background: "var(--ivory)" }}>
        <div className="wrap contact-grid">
          <div><p className="eyebrow">Book a service</p><h2>Tell us what needs attention.</h2></div>
          <EnquiryForm id="workshop-enquiry" />
        </div>
      </section>
    </>
  );
}
