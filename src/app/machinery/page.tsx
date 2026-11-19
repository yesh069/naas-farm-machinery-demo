import { Suspense } from "react";
import type { Metadata } from "next";
import Finder from "@/components/Finder";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Machinery Catalogue",
  description: "Search and filter new tractors and farm machinery from Deutz-Fahr, KUHN, Hardi, Fleming, Strautmann and Zoomlion at Naas Farm Machinery.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow light">Machinery catalogue</p>
          <h1>Find your next machine.</h1>
          <p>{products.length} models from six brands. Search by name, or narrow by equipment type and brand. Ask us about availability and TAMS 3 eligibility.</p>
        </div>
      </section>
      <Suspense fallback={<div className="wrap" style={{ padding: "80px var(--gutter)" }}>Loading machinery…</div>}>
        <Finder />
      </Suspense>
    </>
  );
}
