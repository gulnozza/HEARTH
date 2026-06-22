export function Features() {
  return (
    <section className="features" id="features"><div className="shell">
      <div className="section-head"><div><span className="eyebrow"><i /> Our features</span><h2>One safety layer.<br />Everywhere you go.</h2></div><p>Routes, trusted places, people, and emergency tools—designed as one calm experience.</p></div>
      <div className="phone-stage">
        <article className="phone"><PhoneTop /><h3 className="screen-title">Safer route</h3><div className="phone-map"><span className="route-line"/><i className="dot" style={{left:34,bottom:48}}/><i className="dot" style={{right:35,top:42,background:"var(--orange)"}}/></div><div className="phone-card"><b>18 min · Well-lit route</b><small>2 community confirmations today</small></div></article>
        <article className="phone"><PhoneTop /><h3 className="screen-title">Trusted places</h3><div className="checklist">{[["⌂","Women&apos;s coworking"],["✚","24/7 pharmacy"],["♧","Family restroom"],["✦","Free fitness class"],["⚑","Women&apos;s support center"]].map(([icon,label])=><div className="check" key={label}><i>{icon}</i><span dangerouslySetInnerHTML={{__html:label}} /></div>)}</div></article>
        <article className="phone"><PhoneTop /><h3 className="screen-title">Ask Umida</h3><div className="chat-demo"><div className="msg">Hi, I&apos;m Umida. How can I help you move safely today?</div><div className="msg me">Find a well-lit route to Amir Temur Square.</div><div className="msg">I found a route with 3 trusted places along the way. It adds only 4 minutes.</div></div><div className="phone-card"><b>Suggested action</b><small>Share journey with Dilnoza →</small></div></article>
        <article className="phone"><PhoneTop /><div className="sos-screen"><small>EMERGENCY ASSIST</small><div className="sos-circle">SOS</div><b>Press 3 times</b><p style={{fontSize:12,opacity:.62,lineHeight:1.45}}>Shares your live location and emergency capture with selected contacts.</p></div></article>
      </div>
      <div className="feature-labels">{[["Safer routing","Choose confidence, not just speed."],["Trusted places","Filter for what you need now."],["AI companion","Ask in natural language."],["Emergency assist","Three presses. One clear signal."]].map(([title,copy])=><div key={title}><b>{title}</b><span>{copy}</span></div>)}</div>
    </div></section>
  );
}

function PhoneTop(){return <><div className="notch"/><div className="phone-top"><span>9:41</span><span>● ● ▰</span></div></>}
