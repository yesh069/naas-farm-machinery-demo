import Link from "next/link";
import { BRANDS, brandLabel } from "@/lib/products";
import { DONEDEAL } from "./Header";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <div className="logo-w"><img src="/img/brand/logo.png" alt="Naas Farm Machinery" width={120} height={52} /></div>
            <p className="brandword">Family-run since 1986.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/machinery/">All machinery</Link></li>
              <li><a href={DONEDEAL} target="_blank" rel="noopener noreferrer">Used machinery (DoneDeal)</a></li>
              <li><Link href="/tams-3/">TAMS 3 grants</Link></li>
              <li><Link href="/workshop/">Workshop &amp; repairs</Link></li>
              <li><Link href="/about/">About us</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Brands</h4>
            <ul>
              {BRANDS.map((b) => (<li key={b}><Link href={`/machinery/?brand=${encodeURIComponent(b)}`}>{brandLabel(b)}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>Maudlins Industrial Estate,<br />Monread Road, Naas,<br />Co. Kildare, W91 AX6N</li>
              <li><a href="tel:045876710">045 876710</a></li>
              <li><a href="mailto:enquiries@naasfarmmachinery.com">enquiries@naasfarmmachinery.com</a></li>
              <li>Mon–Fri 9am–5:30pm<br />Sat 9am–1pm · Sun closed</li>
            </ul>
          </div>
        </div>
        <div className="ftr-bot">
          <span>© Naas Farm Machinery Ltd. Website redesign concept. Development by <a href="https://cyrtechnologies.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>CYR Technologies</a></span>
          <span style={{ display: "flex", gap: 18 }}>
            <a href="https://www.facebook.com/1naasfarmmachery1/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/naas_farm_machinery/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/channel/UCUUfxwHv0-dNhU0wtY6KRSA" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.linkedin.com/company/naas-farm-machinery-limited/home/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
