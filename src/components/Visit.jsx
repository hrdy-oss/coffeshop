import { Clock, Instagram, MapPin } from "lucide-react";
import { hours } from "../data";
import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section id="visit" className="bg-cream py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl">Visit us</h2>
          <p className="mt-4 max-w-md text-lg text-espresso/75">Lorem ipsum dolor sit amet. Walk in, sit down, order at the bar.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer"
              className="rounded-full bg-espresso px-7 py-3 text-cream transition-colors hover:bg-caramel">Get directions</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-espresso/30 px-7 py-3 transition-colors hover:bg-espresso hover:text-cream">
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="mt-1 shrink-0 text-caramel" />
            <address className="text-lg not-italic leading-relaxed">123 Lorem Street<br />Ipsum City, 00000</address>
          </div>
          <div className="flex gap-4">
            <Clock className="mt-1 shrink-0 text-caramel" />
            <dl className="w-full max-w-sm text-lg">
              {hours.map(([d, t]) => (
                <div key={d} className="flex justify-between border-b border-espresso/10 py-2"><dt>{d}</dt><dd>{t}</dd></div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
