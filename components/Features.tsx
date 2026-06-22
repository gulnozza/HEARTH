import Image from "next/image";

const placeFilters = ["Support", "Coworking", "Motherhood", "24/7", "Hospital", "Police", "Accessible", "Free"];

export function Features() {
  return (
    <section className="features" id="features"><div className="shell">
      <div className="section-head"><div><span className="eyebrow"><i /> Confidence, mapped.</span><h2>Everything you need to move with confidence.</h2></div><p>Community intelligence, trusted places, safer routes, and emergency support—working together in one platform.</p></div>
      <div className="phone-stage product-phones five-phones">
        <span className="phone-float pin-float">⌖</span><span className="phone-float star-float">✦</span><span className="phone-float score-float">8.7 <small>SAFE</small></span><span className="phone-float dot-float" />

        <article className="phone route-phone"><PhoneTop/><small className="phone-kicker">AI-POWERED ROUTE GUIDANCE</small><h3 className="screen-title">Safer Routes</h3><div className="phone-photo-map"><Image src="/uzbekistan-safety-map-v3.png" alt="Safety route map" fill sizes="220px"/><span className="phone-route-path"/><i className="route-start"/><i className="route-end"/><span className="map-signal light">☀</span><span className="map-signal crowd">●●</span><span className="map-signal safe">♥</span><span className="map-signal verify">✓</span></div><div className="phone-card route-summary"><b>18 min</b><small>Well-lit route</small><ul><li>3 trusted places nearby</li><li>Low incident reports</li></ul></div></article>

        <article className="phone places-phone"><PhoneTop/><h3 className="screen-title">Safe Places</h3><div className="filter-strip">{placeFilters.map((f,i)=><span className={i===3?"selected":""} key={f}>{f}</span>)}</div><div className="place-map"><Image src="/uzbekistan-safety-map-v3.png" alt="Filtered places map" fill sizes="220px"/><i className="place-pin">✚</i></div><div className="selected-place"><span>✚</span><div><b>Oqtepa Pharmacy</b><small>Verified · Open 24/7 · 0.6 km</small></div><em>✓</em></div><p className="phone-bottom-copy">Places that help when you need them.</p></article>

        <article className="phone scout-phone"><PhoneTop/><div className="hefi-title"><Image src="/hearth-mascot-head.png" alt="Hefi mascot" width={42} height={40}/><div><h3>Hefi</h3><small>HEARTH SAFETY ASSISTANT</small></div></div><div className="chat-demo"><div className="msg me">Find the safest route to Amir Temur Square.</div><div className="msg">Good lighting · High foot traffic<br/>2 hospitals · 3 trusted places<br/>Low incident activity</div><div className="msg ai-warning"><b>Route insight</b><br/>Bus 7 has repeated reports around 8 AM. Avoid today.</div></div><div className="phone-card"><b>Suggested action</b><small>Share journey with trusted contacts →</small></div></article>

        <article className="phone emergency-phone"><PhoneTop/><h3 className="screen-title">Community + SOS</h3><small className="phone-kicker">LIVE COMMUNITY REPORTS</small><div className="report-mini-grid"><span>⚑ Harassment</span><span>☾ Broken light</span><span>! Unsafe bus stop</span><span>↗ Following</span></div><div className="emergency-half"><small>EMERGENCY MODE</small><div className="sos-circle mini-sos">SOS</div><div className="emergency-actions"><span>Send location</span><span>Alert contacts</span><span>Share route</span><span>Emergency info</span></div></div><b className="ready-label">Ready when you need it.</b></article>

        <article className="phone report-phone"><PhoneTop/><h3 className="screen-title">Report an Issue</h3><p className="report-prompt">What happened nearby?</p><div className="report-options"><button><i>☾</i><span>Broken light<small>Poor visibility</small></span></button><button><i>⚠</i><span>Accident<small>Road or transit</small></span></button><button><i>⚑</i><span>Harassment<small>Public safety</small></span></button><button><i>!</i><span>Unsafe stop<small>Transit concern</small></span></button><button><i>⌖</i><span>Other danger<small>Add details</small></span></button></div><div className="report-location">● Location added automatically</div><button className="submit-report">Continue →</button></article>
      </div>
      <div className="feature-labels five-labels"><div><b>AI Routing</b><span>Personalized safer journeys.</span></div><div><b>Safe Places</b><span>Map filters and verified help.</span></div><div><b>Hefi</b><span>Your AI safety companion.</span></div><div><b>Community + SOS</b><span>Support when it matters.</span></div><div><b>Reporting</b><span>Update the map together.</span></div></div>
    </div></section>
  );
}

function PhoneTop(){return <><div className="notch"/><div className="phone-top"><span>9:41</span><span>● ● ▰</span></div></>}
