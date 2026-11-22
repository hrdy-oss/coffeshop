import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const heroImage = "https://kasflo.id/wp-content/uploads/2024/09/30-63.jpg";

export default function Hero({ play = true }) {
  const contentRef = useRef(null);
  const inView = useInView(contentRef, { amount: 0.25 });

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-espresso bg-cover bg-center" style={{ backgroundImage: `url("${heroImage}")` }}>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-28 sm:pb-16">
        <motion.div ref={contentRef} variants={stagger} initial="hidden"
          animate={play && inView ? "show" : "hidden"} className="max-w-3xl text-cream">
          <motion.p variants={item} className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-cream/85 sm:text-sm">
            Lorem Ipsum Coffee · Jakarta
          </motion.p>
          <motion.h1 variants={item} className="font-display text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
            Slow coffee,<br />made properly.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-cream/90 sm:text-lg">
            Small batches, quiet tables, one good cup at a time.
          </motion.p>
          <motion.a variants={item} href="#menu"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-cream/75 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream hover:bg-cream hover:text-espresso">
            Explore Menu <span aria-hidden="true">↗</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
