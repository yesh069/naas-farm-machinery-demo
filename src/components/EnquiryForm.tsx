"use client";
import { useState } from "react";
import { Check } from "lucide-react";

type Errs = Partial<Record<"name" | "email" | "phone" | "message" | "consent", string>>;

export default function EnquiryForm({ product, id = "enquiry", compact = false }: { product?: string; id?: string; compact?: boolean }) {
  const [errs, setErrs] = useState<Errs>({});
  const [done, setDone] = useState<string | null>(null);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const next: Errs = {};
    if (v("name").length < 2) next.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v("email"))) next.email = "Please enter a valid email address.";
    if (v("phone") && !/^[0-9+()\s-]{7,}$/.test(v("phone"))) next.phone = "Please check the phone number.";
    if (v("message").length < 8) next.message = "Tell us a little about what you need.";
    if (!f.get("consent")) next.consent = "Please confirm you are happy for us to contact you.";
    setErrs(next);
    if (Object.keys(next).length === 0) { setDone(v("name").split(" ")[0]); e.currentTarget.reset(); }
  }

  if (done)
    return (
      <div className="ok" role="status" id={id}>
        <h3><Check size={22} style={{ verticalAlign: "-4px" }} /> Thanks, {done}.</h3>
        <p>In the live site this would reach the Naas team, who would reply during opening hours (Mon–Fri 9am–5:30pm, Sat 9am–1pm). For anything urgent, call 045 876710.</p>
        <p className="demo-note">Demo only: nothing was sent and no data was stored.</p>
      </div>
    );

  const fld = (k: keyof Errs) => ({ "aria-invalid": !!errs[k], "aria-describedby": errs[k] ? `${id}-${k}-e` : undefined });
  return (
    <form className="form" id={id} onSubmit={submit} noValidate aria-label={product ? `Enquire about ${product}` : "Enquiry form"}>
      <div className="row">
        <label>Your name<input name="name" autoComplete="name" {...fld("name")} />{errs.name && <span className="err" id={`${id}-name-e`}>{errs.name}</span>}</label>
        <label>Email<input name="email" type="email" autoComplete="email" {...fld("email")} />{errs.email && <span className="err" id={`${id}-email-e`}>{errs.email}</span>}</label>
      </div>
      <div className="row">
        <label>Phone (optional)<input name="phone" type="tel" autoComplete="tel" {...fld("phone")} />{errs.phone && <span className="err" id={`${id}-phone-e`}>{errs.phone}</span>}</label>
        <label>I'm enquiring about
          <select name="topic" defaultValue={product ? "product" : "new"}>
            {product && <option value="product">{product}</option>}
            <option value="new">New machinery</option><option value="used">Used machinery</option>
            <option value="tams">TAMS 3 eligible machinery</option><option value="workshop">Workshop / repairs</option>
            <option value="parts">Parts</option><option value="other">Something else</option>
          </select>
        </label>
      </div>
      <label>Message
        <textarea name="message" defaultValue={product && !compact ? `I'd like more information on the ${product}.` : ""} {...fld("message")} />
        {errs.message && <span className="err" id={`${id}-message-e`}>{errs.message}</span>}
      </label>
      <label className="chk"><input type="checkbox" name="consent" {...fld("consent")} /> <span>I'm happy for Naas Farm Machinery to contact me about this enquiry.</span></label>
      {errs.consent && <span className="err" id={`${id}-consent-e`}>{errs.consent}</span>}
      <div><button className="btn btn-primary" type="submit">Send enquiry</button></div>
      <p className="demo-note">Demo concept: submitting this form does not send or store anything.</p>
    </form>
  );
}
