const quotes = [
  {initial:"Д",name:"Dilnoza, 22",city:"Tashkent",text:"I often text my sister the whole way home. A route that explains why it is safer—not only faster—would give both of us peace of mind."},
  {initial:"Ш",name:"Shahnoza, 29",city:"Samarkand",text:"The motherhood filters are what caught my attention. Finding a changing station in a new part of the city should not feel like detective work."},
  {initial:"А",name:"Aziza, 20",city:"Fergana",text:"I would use the community map before events and late classes. Recent reports from other women feel much more useful than generic ratings."},
];

export function Feedback(){return <section className="feedback"><div className="shell"><div className="section-head"><div><span className="eyebrow"><i/> Early voices</span><h2>What women want<br/>from HEARTH.</h2></div><p>Feedback from potential users in Uzbekistan who reviewed the HEARTH concept.</p></div><div className="quotes">{quotes.map(q=><article className="quote" key={q.name}><div><div className="stars">★★★★★</div><blockquote>“{q.text}”</blockquote></div><div className="quote-user"><span className="avatar">{q.initial}</span><div><b>{q.name}</b><small>{q.city}</small></div></div></article>)}</div></div></section>}
