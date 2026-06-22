const insights = [
  {
    icon: "◐",
    number: "68%",
    title: "Women walking alone",
    detail: "of women in Uzbekistan report changing their behavior to avoid feeling unsafe in public spaces after dark.",
    quote: "I just want to get home safely.",
    helps: ["Avoid recent harassment reports", "Prioritize well-lit streets", "Show trusted places nearby", "Highlight active, populated areas"],
    source: "HEARTH discovery interviews · directional finding",
  },
  {
    icon: "⚑",
    number: "90%+",
    title: "Incidents stay invisible",
    detail: "of street-harassment experiences never reach police.",
    quote: "Most incidents never appear on official maps.",
    helps: ["Community reports", "Local alerts", "Crowd-sourced safety intelligence", "Real-time updates"],
    source: "UN Women figure cited by UNDP Uzbekistan",
  },
  {
    icon: "♿",
    number: "1,031,609",
    title: "People with disabilities",
    detail: "people with disabilities live in Uzbekistan.",
    quote: "Can I actually get there?",
    helps: ["Ramps and elevators", "Accessible entrances", "Wheelchair-friendly routes", "Safer crossings"],
    source: "National Agency for Social Protection, 2025",
  },
  {
    icon: "◉",
    number: "0",
    title: "Parents with babies",
    detail: "single networks show where to find breastfeeding rooms, changing facilities and baby-friendly routes.",
    quote: "Where can I stop with my child?",
    helps: ["Breastfeeding rooms", "Changing stations", "Family restrooms", "Stroller-friendly routes"],
    source: "HEARTH parent interviews · no unified directory found",
  },
  {
    icon: "⌁",
    number: "4.2M",
    title: "Pension recipients",
    detail: "pension recipients benefit from clearer city information.",
    quote: "Where can I rest if I need to?",
    helps: ["Benches and pharmacies", "Nearby hospitals", "Safer crossings", "Lower-risk walking routes"],
    source: "National Statistics Committee, 2024",
  },
];

export function Stats() {
  return (
    <section className="why" id="why"><div className="shell">
      <div className="section-head"><div><span className="eyebrow"><i /> Why use HEARTH</span><h2>A smarter way<br />forward.</h2></div></div>
      <div className="insight-grid">
        {insights.map(card => (
          <article className="insight-card" tabIndex={0} key={card.title}>
            <div className="insight-inner">
              <div className="insight-face insight-front"><div className="insight-number">{card.number}</div><h3>{card.title}</h3><p>{card.detail}</p><div className="insight-source">{card.source}</div></div>
              <div className="insight-face insight-back"><blockquote>“{card.quote}”</blockquote><h4>HEARTH helps with:</h4><ul>{card.helps.map(help => <li key={help}>{help}</li>)}</ul><small>Tap or move away to return</small></div>
            </div>
          </article>
        ))}
      </div>
    </div></section>
  );
}
