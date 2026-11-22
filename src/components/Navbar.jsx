import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";

const links = [["Home", "home"], ["Menu", "menu"], ["Documentation", "documentation"], ["About", "about"]];

export default function Navbar({ visible = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }} animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
      transition={{ duration: 0.5 }} inert={!visible} aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-300 ${
        solid ? "bg-cream/95 text-espresso shadow-[0_1px_14px_rgba(58,35,24,.1)] backdrop-blur" : "bg-transparent text-cream"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
        <a href="#home" className="font-display text-2xl tracking-tight">Lorem Ipsum</a>
        <ul className="hidden gap-9 md:flex">
          {links.map(([label, id]) => (
            <li key={id}><a href={`#${id}`} className={`text-sm transition-colors hover:opacity-70 ${solid ? "text-espresso/75" : "text-cream/90"}`}>{label}</a></li>
          ))}
        </ul>
        <button className="p-2 md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
            className="overflow-hidden bg-cream px-6 md:hidden">
            {links.map(([label, id]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}
                className="block border-t border-espresso/10 py-4 font-display text-xl">{label}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
