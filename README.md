# Naas Farm Machinery: redesign concept

Independent Next.js 15 / TypeScript project. Static export, plain CSS design system, Framer Motion, Lucide icons.

```
npm install
npm run dev        # http://localhost:3101
npm run build      # static export to /out
```

- `docs/AUDIT.md`: audit of the existing site and the design direction.
- `screenshots/`: desktop and mobile captures of the finished design.
- `src/data/products.json`: 338 products taken from the client's existing public catalogue (names, brands, categories, descriptions, specs). No prices, stock or specs were added or invented.
- `public/img/products`: the client's existing product photography, converted to WebP.

## Design system
- Colour: field green `#0f2b1d`–`#2d6a46`, ivory `#faf6ec` / `#f5efe2`, charcoal `#1b1f1c`, wheat accent `#b78a38`.
- Type: Fraunces (display) and Hanken Grotesk (body).
- Motion: slow reveals, parallax hero, sliding nav underline, card lift. All motion honours `prefers-reduced-motion`.

## What improved over the existing site
1. Homepage leads with the real range (tractors were missing) and a search-first hero.
2. A working machinery finder: search, equipment type, category, brand, deep-linkable URLs, 338 models.
3. Structured product pages: specifications table, feature lists, gallery, enquiry on every product, related machines, Product schema.
4. TAMS 3, workshop and used machinery (DoneDeal) promoted as first-class journeys.
5. Heritage told properly: 1986, Delahunt family, Donal and Gary.
6. Mobile: compact header, one-tap call, sticky enquiry bar on product pages, no consent banner covering content.
7. Static, optimised WebP images, semantic HTML, skip link, visible focus states, form validation.

## Demo assumptions
- Forms are demo-only and send/store nothing.
- Hero photograph and product images are the client's existing assets (hero licence should be confirmed); source product photos are about 500 px, so a photo shoot is recommended before launch.
- The TAMS "Department of Agriculture" link points to the department home page; confirm the exact TAMS 3 URL before launch.
- No cookie banner: the demo uses no analytics or cookies.
