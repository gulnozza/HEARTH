"use client";

import { FormEvent, useMemo, useState } from "react";
import { cityScores, filterGroups } from "@/data/hearth";

const cities = Object.keys(cityScores);

export function SafetyMap() {
  const [from, setFrom] = useState("Tashkent");
  const [to, setTo] = useState("Samarkand");
  const [score, setScore] = useState(8.4);
  const [route, setRoute] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [active, setActive] = useState(new Set(["Police", "24/7 pharmacies", "Umida help points"]));
  const [reportOpen, setReportOpen] = useState(false);
  const [liveCount, setLiveCount] = useState(127);
  const [liveText, setLiveText] = useState("Broken light · Chilanzar · 4 min ago");

  const mapSrc = useMemo(() => route
    ? `https://www.google.com/maps?saddr=${encodeURIComponent(from + ", Uzbekistan")}&daddr=${encodeURIComponent(to + ", Uzbekistan")}&output=embed`
    : "https://www.google.com/maps?q=Tashkent%2C%20Uzbekistan&z=13&output=embed", [from, to, route]);

  function toggleFilter(name: string) {
    setActive(current => { const next = new Set(current); if (next.has(name)) next.delete(name); else next.add(name); return next; });
  }

  function findRoute() {
    if (from === to) return setLiveText("Choose two different places");
    setRoute(true);
    setScore(Number(((cityScores[from] + cityScores[to]) / 2).toFixed(1)));
    setLiveText(`Google route ready · ${from} to ${to}`);
  }

  function submitReport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = new FormData(event.currentTarget);
    setLiveText(`${form.get("type")} · just now · awaiting confirmation`); setLiveCount(value => value + 1); setReportOpen(false); event.currentTarget.reset();
  }

  return <section className="map-section" id="map"><div className="shell">
    <div className="section-head"><div><span className="eyebrow"><i/> Live safety map</span><h2>See the city differently.</h2></div><p>A real Google Maps basemap enhanced with HEARTH&apos;s community, accessibility, safe-place and emergency layers.</p></div>
    <div className="map-app google-map-app">
      <aside className="map-sidebar route-only"><h3>Plan your route</h3><div className="route-form"><RouteSelect value={from} onChange={value=>{setFrom(value);setRoute(false)}}/><RouteSelect value={to} onChange={value=>{setTo(value);setRoute(false)}} destination/><button className="btn" onClick={findRoute}>Find route</button></div>
        <div className="score-box"><small>ROUTE SAFETY SCORE</small><div className="score-row"><strong>{score.toFixed(1)}</strong><span>{score>=8?"Good":"Use care"}</span></div><div className="bar"><i style={{width:`${score*10}%`}}/></div></div>
        <div className="route-insight"><b>Hefi route insight</b><p>Prioritizes lighting, active streets, trusted places and lower incident activity.</p></div><button className="btn alt report-side" onClick={()=>setReportOpen(true)}>⚑ Report an issue</button>
      </aside>
      <div className="map-canvas google-map-canvas">
        <iframe className="google-map-frame" title="Google Map of Tashkent and planned route" src={mapSrc} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"/>
        <div className="layer-toolbar">
          {Object.entries(filterGroups).map(([group,items])=><div className="layer-control" key={group}><button className={openGroup===group?"open":""} onClick={()=>setOpenGroup(openGroup===group?null:group)}>{group}<span>{openGroup===group?"×":"⌄"}</span></button>{openGroup===group&&<div className="layer-options">{items.map(item=><label key={item}><input type="checkbox" checked={active.has(item)} onChange={()=>toggleFilter(item)}/><span>{item}</span></label>)}</div>}</div>)}
        </div>
        <div className="hearth-map-markers" aria-hidden="true"><span className="map-overlay-pin police">⚑</span><span className="map-overlay-pin pharmacy">✚</span><span className="map-overlay-pin umida">♥</span><span className="map-overlay-pin report">!</span></div>
        <div className="live-card"><div><b><span className="live-dot"/>{liveCount} live community updates</b><div style={{fontSize:11,opacity:.6,marginTop:4}}>{liveText}</div></div><div className="map-legend"><span><i/>HEARTH layer active</span><span><i/>Recent report</span></div></div>
      </div>
    </div>
    <div className="map-feature-row"><div><i>✦</i><span><b>Safety scores</b><small>Live district confidence</small></span></div><div><i>⚑</i><span><b>Community reports</b><small>Lighting, harassment, transit</small></span></div><div><i>♥</i><span><b>Umida help points</b><small>Sticker-marked local support</small></span></div><div><i>♿</i><span><b>Accessible routes</b><small>Ramps and stroller access</small></span></div><div><i>↗</i><span><b>Google routing</b><small>Real streets and directions</small></span></div></div>
    {reportOpen&&<div className="modal open" role="dialog" aria-modal="true" onMouseDown={e=>e.target===e.currentTarget&&setReportOpen(false)}><form className="modal-card" onSubmit={submitReport}><h3>Report an issue</h3><p>Your report updates the community layer. Avoid names or identifying details.</p><div className="form-group"><label>TYPE</label><select name="type"><option>Broken streetlight</option><option>Harassment</option><option>Unsafe crossing</option><option>Blocked pavement</option><option>Other danger</option></select></div><div className="form-group"><label>LOCATION</label><input required placeholder="Street or landmark"/></div><div className="form-group"><label>NOTE</label><textarea rows={3} placeholder="What should others know?"/></div><div className="modal-actions"><button className="btn">Submit report</button><button className="btn alt" type="button" onClick={()=>setReportOpen(false)}>Cancel</button></div></form></div>}
  </div></section>
}

function RouteSelect({value,onChange,destination=false}:{value:string;onChange:(value:string)=>void;destination?:boolean}){return <div className="route-field"><span/><select value={value} onChange={e=>onChange(e.target.value)} aria-label={destination?"Destination city":"Starting city"}>{cities.map(city=><option key={city}>{city}</option>)}</select></div>}
