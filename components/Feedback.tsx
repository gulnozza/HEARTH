const feedback = [
  ["Dilnoza, 22 · Tashkent", "I want a route that explains why it is safer, not only faster."],
  ["Shahnoza, 29 · Samarkand", "Finding a changing station should not feel like detective work."],
  ["Aziza, 20 · Fergana", "Recent reports from other women feel more useful than generic ratings."],
  ["Madina, 24 · Tashkent", "I would share my evening route with my sister every time."],
  ["Zilola, 31 · Bukhara", "An Umida point nearby would make unfamiliar streets feel less isolating."],
  ["Nodira, 27 · Namangan", "I need to know which entrance actually has a ramp."],
  ["Farida, 19 · Andijan", "A broken streetlight report can change which way I walk home."],
  ["Malika, 35 · Nukus", "Family filters would save so much time when I am out with my baby."],
  ["Sevara, 23 · Tashkent", "Hefi should warn me before I get onto a bus with repeated reports."],
  ["Gulnoza, 42 · Qarshi", "One place for pharmacies, hospitals, and safe stops makes sense."],
];

function Quote({name,text}:{name:string;text:string}){return <article className="ticker-quote"><span>♥</span><blockquote>“{text}”</blockquote><small>{name}</small></article>}

export function Feedback(){return <section className="feedback"><div className="shell"><div className="section-head"><div><span className="eyebrow"><i/> Interview voices</span><h2>Feedback from people we interviewed across Uzbekistan.</h2></div></div></div><div className="feedback-ticker"><div className="ticker-track">{feedback.map(([name,text])=><Quote name={name} text={text} key={name}/>) }{feedback.map(([name,text])=><Quote name={name} text={text} key={`${name}-copy`}/>)}</div></div></section>}
