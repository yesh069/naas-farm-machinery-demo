# Naas Farm Machinery: Website Audit and Redesign Direction

Audited 19 Nov 2026 from https://naasfarmmachinery.com/ (live pages, the public WooCommerce product feed, and desktop/mobile screenshots stored in `/_audit/shots`).

## What the business is (verified on the existing site)
- Naas Farm Machinery Ltd, Maudlins Industrial Estate, Monread Road, Naas, Co. Kildare, W91 AX6N. Tel 045 876710, enquiries@naasfarmmachinery.com.
- Established 1986 by George Delahunt; now run by his sons Donal and Gary (About page).
- Dealer for Deutz-Fahr, KUHN, Hardi, Fleming, Strautmann, Zoomlion (the six brand pages on the site). The About page also names Conor, Gwaza, APV, ODON, Tanco, Rossmore, Malone, Kentec and Foxes.
- 7-bay workshop, 5 mechanics, 4 service vans, 24-hour call-out on request (Workshop page).
- TAMS 3 information page (40-60% grant aid, scheme 2023-2027).
- Used machinery is sold through DoneDeal (https://www.donedeal.ie/dealer/naas-farm-machinery-ltd).
- Catalogue: 338 products in the WooCommerce feed; 100 tractors, 41 excavators/loaders, 22 sprayers, 17 flail mowers, 15 drills, 15 trailers, and many more. No prices are published (feed returns 0 for 334 of 338).

## Findings

| Area | Finding | Verdict |
|---|---|---|
| Brand positioning | "Family run, 40+ years" is clear and strong, but buried in a green box mid-page. Heritage (1986, Delahunt family) is never told as a story. | Rebuild |
| Visual identity | Bright generic green, Oswald headings, grass-silhouette footer and tractor line-art. Reads as a template, not as a 40-year dealership. Logo (green bars + "Naas") is good. | Keep logo, rebuild everything else |
| Navigation / IA | 8 top items, brands in a dropdown, "New Machinery" and "Used Machinery" are separate from brands. Cart and My Account icons appear though no prices/checkout exist. | Simplify; remove shop affordances |
| Homepage | Hero photo + four category tiles (Rotavators, Drills, Arena Harrows, Harrows). The headline category (100 Deutz-Fahr tractors) is not featured at all. In screenshots, several sections render as blank space or grey placeholders. | Rebuild |
| Product discovery | Browse by brand page or category archive, 12 per page, "Read more" buttons, no equipment-type + brand filter combination, deep nested categories (e.g. 20+ tractor series). | Rebuild as a real finder |
| Product pages | Description pasted as raw text in a bordered box (dashes, no hierarchy). Spec lines are not structured. A generic enquiry form is present. | Rebuild with structured specs |
| Typography | Oswald + Poppins; heavy condensed headings on flat green. | Replace |
| Colour | Saturated green on white, pale-mint footer. Cookie banner is blue (off-brand). | Replace with deeper green / ivory / charcoal |
| Photography | Hero is an authentic Deutz-Fahr field shot but only 810 px wide, so it blurs when stretched full-width. Most product images are cut-outs at about 500 px. | Use cut-outs on ivory with care; recommend a photo shoot |
| Responsiveness | On mobile, announcement bar + menu + social icons + large logo take about 400 px before any content. The cookie banner then covers the hero. | Rebuild |
| Conversion | Primary CTA is one "View our New Machinery" button. Phone number appears only in footer. No product-specific enquiry flow, no TAMS call-to-action on products. | Add enquiry on every product; persistent call button |
| SEO | Good: Rank Math, unique titles/descriptions, canonical, AutomotiveBusiness schema. Missing: Product schema, breadcrumb schema on products. | Preserve and extend |
| Accessibility | Link-only focus states are weak; grey-on-white small text; carousel testimonial with dot-only control. | Improve |
| Performance | WordPress + many plugins (mega menu, cookie, Woo, sliders), lazy sections that fail to paint. | Static, optimised WebP |
| Trust | Seven real Google-style testimonials (Colin, Joe, Marie, Gordon, Jan, J&R Tyres, a Google reviewer) are the best asset. | Preserve verbatim, present them well |

## Keep / improve / redesign
- **Keep:** logo, 1986 heritage, six brand relationships, real testimonials, TAMS page content, DoneDeal link, SEO titles, opening hours.
- **Improve:** product photography treatment, spec presentation, TAMS prominence.
- **Redesign completely:** homepage, navigation, catalogue, product pages, footer, mobile.
- **Missed opportunities:** an actual machinery finder; workshop/service as a selling point; a clear used-machinery gateway; tractor series browsing (the single largest range); one-tap call and WhatsApp-style enquiry for farmers on their phones.

## Design direction
"Heritage dealership, modern editorial." Deep field green, warm ivory, charcoal, with a restrained brass/wheat accent for small details. Serif display type (Fraunces) paired with a clean grotesque (Hanken Grotesk). Product cut-outs sit on ivory plates like catalogue plates; large numerals and tight editorial grids replace card walls. Motion is natural and slow: soft reveals, gentle parallax on the field photograph, a sliding underline on navigation.

## Demo assumptions (labelled)
- No prices, stock status or availability are shown: none are published on the existing site.
- Specifications are copied exactly from the existing product descriptions; nothing is added.
- Product images and the hero photograph are the client's existing assets. The demo contains no stock imagery.
- Enquiry and newsletter forms are demo only: nothing is sent or stored.
