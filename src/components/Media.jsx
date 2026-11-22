// Renders a photo when `src` exists, otherwise a flat SVG placeholder.
const shapes = {
  cup: (c) => (
    <g>
      <ellipse cx="200" cy="338" rx="130" ry="14" fill={c} opacity=".15" />
      <path d="M110 190h180v50a90 90 0 0 1-180 0z" fill={c} />
      <path d="M290 208h14a30 30 0 0 1 0 60h-22" fill="none" stroke={c} strokeWidth="14" />
      <path d="M160 160c-12-22 12-32 0-56M200 160c-12-22 12-32 0-56M240 160c-12-22 12-32 0-56"
        stroke={c} strokeWidth="6" fill="none" strokeLinecap="round" opacity=".4" />
    </g>
  ),
  beans: (c) => (
    <g fill={c}>
      {[[130, 150, -30], [230, 120, 20], [290, 210, -50], [170, 240, 40], [250, 300, -10], [110, 310, 60]].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <ellipse rx="44" ry="30" />
          <path d="M-40 0c20-14 60 14 80 0" stroke="#0003" strokeWidth="5" fill="none" />
        </g>
      ))}
    </g>
  ),
  window: (c) => (
    <g fill="none" stroke={c} strokeWidth="10">
      <rect x="95" y="70" width="210" height="260" />
      <path d="M200 70v260M95 200h210" />
      <path d="M60 350h280" strokeWidth="6" opacity=".5" />
    </g>
  ),
};

export default function Media({ item, className = "" }) {
  if (item.src) {
    return <img src={item.src} alt={item.alt || item.title} loading="lazy" decoding="async"
      className={`h-full w-full object-contain ${className}`} />;
  }
  const { bg, fg, kind } = item.art;
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={item.alt || item.title}
      preserveAspectRatio="xMidYMid slice" className={`h-full w-full ${className}`}>
      <rect width="400" height="400" fill={bg} />
      {shapes[kind](fg)}
    </svg>
  );
}
