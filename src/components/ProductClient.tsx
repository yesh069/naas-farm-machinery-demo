"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="gal-main">
        <AnimatePresence mode="wait">
          <motion.img key={images[i]} src={images[i]} alt={alt} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} />
        </AnimatePresence>
      </div>
      {images.length > 1 && (
        <div className="gal-th" role="group" aria-label="Product images">
          {images.map((src, k) => (
            <button key={src} aria-current={k === i} aria-label={`Show image ${k + 1}`} onClick={() => setI(k)}><img src={src} alt="" loading="lazy" /></button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ReadMore({ text, limit = 380 }: { text: string; limit?: number }) {
  const [open, setOpen] = useState(false);
  if (text.length <= limit) return <p>{text}</p>;
  const cut = text.slice(0, limit).replace(/\s+\S*$/, "") + "…";
  return (
    <div>
      <p>{open ? text : cut}</p>
      <button className="link-u" style={{ background: "none", border: 0, color: "var(--green-700)", fontWeight: 600, cursor: "pointer", padding: 0 }} onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? "Show less" : "Read the full description"}
      </button>
    </div>
  );
}
