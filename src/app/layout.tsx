import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

const display = Fraunces({ subsets: ["latin"], variable: "--f-display", axes: ["opsz"], display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--f-body", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Naas Farm Machinery | Farm Machinery Dealer, Naas, Co. Kildare", template: "%s | Naas Farm Machinery" },
  description:
    "Family-run farm machinery dealer in Naas, Co. Kildare since 1986. Deutz-Fahr, KUHN, Hardi, Fleming, Strautmann and Zoomlion. Workshop, parts and TAMS 3 guidance. Call 045 876710.",
  openGraph: { title: "Naas Farm Machinery", description: "Family-run farm machinery dealer in Co. Kildare since 1986.", type: "website", locale: "en_IE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IE" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Motion>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Motion>
      </body>
    </html>
  );
}
