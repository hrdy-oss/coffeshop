import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "../data";
import Media from "./Media";
import Reveal from "./Reveal";

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const step = useCallback((d) => setOpen((i) => (i + d + gallery.length) % gallery.length), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open === null, step]);

  return (
    <section id="documentation" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl">Documentation</h2>
          <p className="mt-4 max-w-md text-lg text-espresso/75">Lorem ipsum, a few moments from the bar, the room and the people behind it.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.title} delay={(i % 4) * 0.06}>
              <motion.button onClick={() => setOpen(i)} aria-label={`Open ${g.title}`}
                style={{ rotate: g.rotate }}
                whileHover={{ rotate: 0, scale: 1.05, boxShadow: "0 18px 36px rgba(58,35,24,.22)" }}
                transition={{ duration: 0.25 }}
                className="block w-full bg-white p-2.5 pb-8 text-left shadow-[0_6px_16px_rgba(58,35,24,.12)] sm:p-3 sm:pb-10">
                <div className="aspect-square overflow-hidden"><Media item={g} /></div>
                <p className="mt-3 font-display text-sm sm:text-base">{g.title}</p>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div role="dialog" aria-modal="true" aria-label="Photo viewer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-espresso/90 p-4">
            <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-4 top-4 p-2 text-cream"><X size={28} /></button>
            <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}
              className="absolute left-2 p-2 text-cream sm:left-6"><ChevronLeft size={36} /></button>
            <button aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}
              className="absolute right-2 p-2 text-cream sm:right-6"><ChevronRight size={36} /></button>
            <motion.figure key={open} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }} onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-white p-3 pb-6">
              <div className="aspect-square overflow-hidden"><Media item={gallery[open]} /></div>
              <figcaption className="mt-4 font-display text-xl">{gallery[open].title}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
