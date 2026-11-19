import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Naas Farm Machinery, Maudlins Industrial Estate, Monread Road, Naas, Co. Kildare. Open Mon–Fri 9am–5:30pm, Sat 9am–1pm. Tel 045 876710.",
};

const FAQ = [
  ["Where are you located?", "Maudlins Industrial Estate, Monread Road, Naas, Co. Kildare, W91 AX6N, just off the M7, serving farmers and contractors across Kildare and Leinster."],
  ["Can you help with TAMS grant applications?", "Yes. We can advise on TAMS 3 grant-eligible machinery and support your application."],
  ["What areas do you serve?", "Naas and across Kildare, with sales and call-out servicing throughout Leinster including Dublin, Wicklow, Carlow and Laois."],
];
export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap"><p className="eyebrow light">Contact</p><h1>How can we help?</h1></div>
      </section>
      <section className="pad wrap">
        <div className="contact-grid">
          <div className="cinfo">
            <p><a className="big" href="tel:045876710">045 876710</a></p>
            <p><a href="mailto:enquiries@naasfarmmachinery.com" className="link-u">enquiries@naasfarmmachinery.com</a></p>
            <p style={{ margin: "20px 0 22px" }}>Maudlins Industrial Estate, Monread Road,<br />Naas, Co. Kildare, W91 AX6N</p>
            <p><a className="btn btn-ghost dark" href="https://www.google.com/maps/search/?api=1&query=Naas+Farm+Machinery+Maudlins+Industrial+Estate+Naas" target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={16} aria-hidden /></a></p>
            <ul className="hours" style={{ marginTop: 28 }}><li><span>Monday – Friday</span><b>9:00 – 17:30</b></li><li><span>Saturday</span><b>9:00 – 13:00</b></li><li><span>Sunday</span><b>Closed</b></li></ul>
            <h2 style={{ fontSize: "1.8rem", margin: "36px 0 10px" }}>Quick answers</h2>
            {FAQ.map(([q, a]) => (
              <details key={q} style={{ borderBottom: "1px solid var(--line)", padding: "14px 0" }}>
                <summary style={{ cursor: "pointer", fontWeight: 600 }}>{q}</summary>
                <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>{a}</p>
              </details>
            ))}
          </div>
          <EnquiryForm id="contact-enquiry" />
        </div>
      </section>
    </>
  );
}
