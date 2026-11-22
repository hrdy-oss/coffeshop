import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Coffee } from "lucide-react";

const LINES_DONE_MS = 1400;
const HOLD_MS = 1000;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const line = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Intro({ onDone = () => {} }) {
  const [show, setShow] = useState(true);
  const [linesDone, setLinesDone] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLinesDone(true), reduceMotion ? 150 : LINES_DONE_MS);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    if (!linesDone) return;
    const timer = setTimeout(() => setShow(false), reduceMotion ? 300 : HOLD_MS);
    return () => clearTimeout(timer);
  }, [linesDone, reduceMotion]);

  const handleExitComplete = () => {
    document.body.style.overflow = "";
    onDone();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {show && (
        <motion.div
          key="intro"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.15 : 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[60] grid place-items-center overflow-hidden bg-espresso text-cream"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(176,113,58,0.28),transparent_62%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-6 top-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-cream/35 sm:inset-x-10 sm:top-8">
            <span>Lorem Ipsum Coffee</span>
            <span>Jakarta</span>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative w-full max-w-4xl px-6 text-center"
          >
            <motion.div variants={line} className="mx-auto mb-7 grid h-12 w-12 place-items-center rounded-full border border-caramel/40 text-caramel">
              <Coffee size={20} strokeWidth={1.5} />
            </motion.div>

            <motion.p variants={line} className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-cream/65 sm:text-xs">
              Lorem Ipsum Coffee · Jakarta
            </motion.p>

            <motion.span variants={line} className="block font-display text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
              Lorem ipsum
            </motion.span>
            <motion.span variants={line} className="mt-1 block font-display text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
              dolor sit amet.
            </motion.span>

            <motion.p variants={line} className="mx-auto mt-7 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
              Small batches, quiet tables, one good cup at a time.
            </motion.p>

            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={linesDone ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-9 h-[2px] w-44 origin-center rounded-full bg-gradient-to-r from-transparent via-caramel to-transparent sm:mt-11 sm:w-60"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
