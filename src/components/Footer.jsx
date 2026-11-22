import { ArrowUp, Instagram, Facebook } from "lucide-react";
import { hours } from "../data";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-espresso py-14 text-cream">
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">Lorem Ipsum Coffee</p>
            <div className="mt-4 flex gap-4">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="hover:text-sand"><Instagram size={20} /></a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer" className="hover:text-sand"><Facebook size={20} /></a>
            </div>
          </div>
          <address className="not-italic leading-relaxed text-cream/80">123 Lorem Street<br />Ipsum City, 00000</address>
          <ul className="space-y-1 text-cream/80">
            {hours.map(([d, t]) => <li key={d}>{d}, {t}</li>)}
          </ul>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between border-t border-cream/15 px-6 pt-6 text-sm text-cream/60">
          <p>© {new Date().getFullYear()} Lorem Ipsum Coffee</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-espresso">
            <ArrowUp size={18} />
          </button>
        </div>
      </Reveal>
    </footer>
  );
}
