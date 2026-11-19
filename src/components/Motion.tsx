"use client";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Motion({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({ children, delay = 0, y = 28, className }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageFade({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const reduce = useReducedMotion();
  return (
    <motion.div key={path} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
}
