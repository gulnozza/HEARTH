const stats = [
  ["19M", "people live in urban areas, where route-level information matters.", "Statistics Agency, 2024", "pink"],
  ["9.3", "estimated road deaths per 100,000 people.", "WHO, 2021 country profile", ""],
  ["24/7", "community reports can keep safety information current.", "HEARTH product capability", ""],
  ["3×", "presses turns your SOS into a clear emergency action.", "Designed to reduce accidental alerts", "orange"],
];

export function Stats() {
  return (
    <section className="why" id="why"><div className="shell">
      <div className="section-head"><div><span className="eyebrow"><i /> Why use HEARTH</span><h2>Local insight makes every journey smarter.</h2></div><p>Uzbekistan is young, urbanising, and always in motion. HEARTH turns official context and community reports into practical, street-level confidence.</p></div>
      <div className="stats-grid">
        <article className="stat big"><div><div className="stat-icon">◌</div><div className="stat-num">18.5M</div><p>women call Uzbekistan home—nearly half of the country.</p></div><small>Statistics Agency of Uzbekistan, October 2024</small><div className="stat-ring" /></article>
        {stats.map(([number, copy, source, color]) => <article className={`stat ${color}`} key={number}><div className="stat-num">{number}</div><p>{copy}</p><small>{source}</small></article>)}
      </div>
    </div></section>
  );
}
