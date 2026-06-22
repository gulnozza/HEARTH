export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><i /> Safer journeys, together</span>
          <h1>Built for the way<br />people move</h1>
          <p>Whether you&apos;re walking across town or exploring somewhere new, Hearth helps you choose safer routes, discover trusted places, and stay connected to people who care.</p>
          <div className="hero-actions">
            <a className="btn" href="#map">Explore safety map <span>→</span></a>
            <a className="btn alt" href="#features">See how it works</a>
          </div>
          <div className="trust-note"><div className="faces"><span>З</span><span>М</span><span>А</span></div><span>Designed with women across Uzbekistan</span></div>
        </div>
        <div className="hero-art" aria-label="Hearth safety features illustration">
          <div className="hero-orbit" /><div className="route-chip">● Safer route · 18 min</div>
          <div className="art-map"><svg viewBox="0 0 350 340" aria-hidden="true"><path d="M-10 89 Q90 35 180 103 T370 95" fill="none" stroke="#FFFFFF" strokeWidth="48"/><path d="M70 -10 Q130 95 81 190 T133 360" fill="none" stroke="#F0AFFF" strokeWidth="53"/><path d="M15 284 Q100 223 198 260 T370 220" fill="none" stroke="#FFFFFF" strokeWidth="40"/><path d="M55 280 Q118 230 205 105" fill="none" stroke="#003320" strokeWidth="7" strokeDasharray="13 10"/><circle cx="55" cy="280" r="14" fill="#003320" stroke="#FFFFFF" strokeWidth="6"/><circle cx="205" cy="105" r="14" fill="#003320" stroke="#FFFFFF" strokeWidth="6"/></svg></div>
          <div className="art-alert">⚑ Community alert: broken streetlight reported nearby.</div>
          <div className="art-score"><strong>8.4</strong><small>Safety score · Yunusabad</small></div>
          <div className="art-community"><small>COMMUNITY NEARBY</small><h3>You&apos;re not moving alone.</h3><div className="mini-people"><span className="mini-person">👩🏻</span><span className="mini-person">👩🏽</span><span className="mini-person">👩🏻‍🦱</span></div></div>
        </div>
      </div>
    </section>
  );
}
