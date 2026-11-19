const base = process.env.BASE_PATH || "";
/** @type {import('next').NextConfig} */
export default { output: "export", trailingSlash: true, images: { unoptimized: true }, basePath: base, assetPrefix: base || undefined };
