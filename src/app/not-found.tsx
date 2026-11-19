import Link from "next/link";
export default function NotFound() {
  return (
    <section className="pad wrap" style={{ textAlign: "center" }}>
      <p className="eyebrow" style={{ justifyContent: "center" }}>404</p>
      <h1 style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>That page has wandered off.</h1>
      <p style={{ margin: "20px 0 30px" }}>Try the machinery catalogue or call the team on 045 876710.</p>
      <Link className="btn btn-primary" href="/machinery/">Browse machinery</Link>
    </section>
  );
}
