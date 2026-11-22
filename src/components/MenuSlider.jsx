import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { favoriteMenu, menu } from "../data";
import Reveal from "./Reveal";

const categories = ["All Menu", "Coffee", "Non-Coffee", "Tea", "Bakery", "Food", "Dessert"];
const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function MenuCard({ item }) {
  const [imageSource, setImageSource] = useState(item.image);
  const [imageFailed, setImageFailed] = useState(false);

  const onImageError = () => {
    if (imageSource !== item.fallbackImage) setImageSource(item.fallbackImage);
    else setImageFailed(true);
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-espresso/10 bg-white shadow-[0_5px_18px_rgba(58,35,24,.06)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-beige/50">
        {imageFailed ? (
          <div className="grid h-full place-items-center px-4 text-center text-sm text-espresso/55">Foto menu belum tersedia</div>
        ) : (
          <img
            src={imageSource}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            onError={onImageError}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base leading-snug sm:text-lg">{item.title}</h3>
          <p className="shrink-0 pt-0.5 text-xs font-medium text-caramel sm:text-sm">{rupiah.format(item.price)}</p>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-espresso/70 sm:text-sm">{item.description}</p>
      </div>
    </motion.article>
  );
}

function FavoriteCarousel() {
  const [[index, direction], setSlide] = useState([2, 1]);
  const pointerStart = useRef(null);
  const suppressClick = useRef(false);
  const go = (step) => setSlide(([current]) => [(current + step + favoriteMenu.length) % favoriteMenu.length, step]);
  const current = favoriteMenu[index];
  const adjacent = [
    favoriteMenu[(index - 1 + favoriteMenu.length) % favoriteMenu.length],
    current,
    favoriteMenu[(index + 1) % favoriteMenu.length],
  ];

  const onPointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    pointerStart.current = event.clientX;
    suppressClick.current = false;
  };
  const onPointerUp = (event) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < 35) return;
    suppressClick.current = true;
    go(distance < 0 ? 1 : -1);
  };

  return (
    <div className="mb-16 sm:mb-20">
      <h2 className="text-center font-display text-sm tracking-wide text-espresso/80 sm:text-base">The best menu</h2>
      <div
        className="mx-auto mt-1 grid max-w-3xl touch-pan-y select-none grid-cols-[0.8fr_1.5fr_0.8fr] items-end gap-3 sm:gap-8 md:gap-12"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { pointerStart.current = null; }}
        onClickCapture={(event) => {
          if (!suppressClick.current) return;
          event.preventDefault();
          event.stopPropagation();
          suppressClick.current = false;
        }}
      >
        {adjacent.map((item, slot) => {
          const active = slot === 1;
          const itemIndex = (index + slot - 1 + favoriteMenu.length) % favoriteMenu.length;
          return (
            <motion.button
              key={item.id}
              type="button"
              layout
              aria-label={`${active ? "Menu favorit terpilih" : "Pilih menu favorit"}: ${item.title}`}
              aria-pressed={active}
              onClick={() => {
                if (suppressClick.current) return;
                if (!active) setSlide([itemIndex, slot < 1 ? -1 : 1]);
              }}
              animate={{ scale: active ? 1 : 0.78, opacity: active ? 1 : 0.45, y: active ? 0 : 8 }}
              transition={{ layout: { type: "spring", stiffness: 190, damping: 27 }, default: { type: "spring", stiffness: 190, damping: 27 } }}
              className={`mx-auto w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel ${active ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"}`}
            >
              <div className={`mx-auto flex w-full items-center justify-center ${active ? "h-[clamp(14rem,40vw,24rem)] max-w-[24rem]" : "h-[clamp(9rem,24vw,14rem)] max-w-[14rem]"}`}>
                <img src={item.image} alt={item.alt} draggable="false" className="h-full w-full object-contain" />
              </div>
            </motion.button>
          );
        })}
      </div>
      <motion.div
        key={current.id}
        initial={{ x: direction * 36 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 170, damping: 25 }}
        className="mx-auto mt-5 min-h-16 max-w-xl text-center sm:mt-7"
      >
        <h3 className="font-sans text-base font-bold text-black sm:text-lg">{current.title}</h3>
        <p className="mx-auto mt-1 max-w-md text-sm leading-relaxed text-black/80 sm:text-base">{current.description}</p>
      </motion.div>
    </div>
  );
}

export default function MenuSlider() {
  const [activeCategory, setActiveCategory] = useState("All Menu");
  const [search, setSearch] = useState("");

  const filteredMenu = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("id-ID");
    return menu.filter((item) => {
      const matchesCategory = activeCategory === "All Menu" || item.category === activeCategory;
      const matchesSearch = item.title.toLocaleLowerCase("id-ID").includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section id="menu" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FavoriteCarousel />
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl">Menu</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-espresso/70 sm:text-lg">
            Pilihan kopi, minuman, makanan, dan camilan untuk menemani harimu.
          </p>
        </Reveal>

        <div className="mt-8">
          <label className="relative block max-w-xl">
            <span className="sr-only">Cari menu berdasarkan nama</span>
            <Search aria-hidden="true" size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso/45" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari menu..."
              className="w-full rounded-full border border-espresso/15 bg-white py-3 pl-11 pr-5 text-sm text-espresso outline-none transition focus:border-caramel focus:ring-2 focus:ring-caramel/15"
            />
          </label>
        </div>

        <nav aria-label="Kategori menu" className="mt-5 -mx-6 overflow-x-auto px-6 pb-2">
          <div className="flex w-max gap-2">
            {categories.map((category) => {
              const selected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel ${selected ? "border-espresso bg-espresso text-cream" : "border-espresso/20 bg-transparent text-espresso/75 hover:border-espresso/50 hover:bg-white"}`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </nav>

        {filteredMenu.length > 0 ? (
          <div aria-live="polite" className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {filteredMenu.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
        ) : (
          <p role="status" className="mt-10 rounded-2xl border border-espresso/10 bg-white px-6 py-12 text-center text-espresso/65">
            Menu tidak ditemukan.
          </p>
        )}
      </div>
    </section>
  );
}
