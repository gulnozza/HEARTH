"use client";

import { FormEvent, useState } from "react";
import { cityScores, filterGroups } from "@/data/hearth";

const cities = Object.keys(cityScores);

export function SafetyMap() {
  const [from, setFrom] = useState("Tashkent");
  const [to, setTo] = useState("Samarkand");
  const [score, setScore] = useState(8.4);
  const [route, setRoute] = useState(false);
  const [active, setActive] = useState(new Set(["Women-only gyms", "Police", "24/7 pharmacies"]));
  const [reportOpen, setReportOpen] = useState(false);
  const [liveCount, setLiveCount] = useState(127);
  const [liveText, setLiveText] = useState("Broken light · Chilanzar · 4 min ago");

  function toggleFilter(name: string) {
    setActive(current => {
      const next = new Set(current);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  function findRoute() {
    if (from === to) return setLiveText("Choose two different places");
    setRoute(true);
    setScore(Number(((cityScores[from] + cityScores[to]) / 2).toFixed(1)));
    setLiveText(`Safer route ready · ${from} to ${to} · +6 min`);
  }

  function submitReport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setLiveText(`${form.get("type")} · just now · awaiting confirmation`);
    setLiveCount(value => value + 1);
    setReportOpen(false);
    event.currentTarget.reset();
  }

  return (
    <section className="map-section" id="map"><div className="shell">
      <div className="section-head"><div><span className="eyebrow"><i /> Live safety map</span><h2>See the city differently.</h2></div><p>Plan a safer route, find useful places, and add reports that help the whole community adapt in real time.</p></div>
      <div className="map-app">
        <aside className="map-sidebar"><h3>Plan your route</h3>
          <div className="route-form"><RouteSelect value={from} onChange={setFrom}/><RouteSelect value={to} onChange={setTo} destination/><button className="btn" onClick={findRoute}>Find safest route</button></div>
          <div className="score-box"><small>OVERALL SAFETY SCORE</small><div className="score-row"><strong>{score.toFixed(1)}</strong><span>{score >= 8 ? "Good" : "Use care"}</span></div><div className="bar"><i style={{width:`${score*10}%`}}/></div></div>
          {Object.entries(filterGroups).map(([group, items]) => <div key={group}><div className="filter-title">{group}</div><div className="filters">{items.map(item=><button className={`filter ${active.has(item)?"active":""}`} onClick={()=>toggleFilter(item)} key={item}>{item}</button>)}</div></div>)}
        </aside>
        <div className="map-canvas">
          <div className="map-tools"><button className="tool-btn" aria-label="Center map">◎</button><button className="tool-btn" onClick={()=>setReportOpen(true)} aria-label="Report danger">⚑</button></div>
          <svg className="uzbek-map" viewBox="0 0 780 420" role="img" aria-label="Interactive safety map of Uzbekistan">
            <path className="region" d="M55 184L119 121l93 26 63-37 54 20 34 54 83 12 48 49-25 43-81-9-70 34-104-18-62 19-78-42-43-50z"/><path className="region" d="M363 184l85-41 45 22 68-35 76 25 33 47 75 8 18 47-60 31-42-19-74 26-93-7-48-43-83-12z"/>
            <path className={`route-path ${route?"show":""}`} d="M635 190 Q515 265 410 247 T212 219"/>
            <City name="Nukus" x={135} y={205} select={setScore}/><City name="Bukhara" x={313} y={246} caution select={setScore}/><City name="Samarkand" x={445} y={254} select={setScore}/><City name="Tashkent" x={625} y={187} caution select={setScore}/><City name="Namangan" x={686} y={229} select={setScore}/><City name="Fergana" x={704} y={269} select={setScore}/>
          </svg>
          <div className="live-card"><div><b><span className="live-dot"/>{liveCount} live community updates</b><div style={{fontSize:11,opacity:.6,marginTop:4}}>{liveText}</div></div><div className="map-legend"><span><i/>Higher confidence</span><span><i/>Use caution</span></div></div>
        </div>
      </div>
      {reportOpen && <div className="modal open" role="dialog" aria-modal="true" onMouseDown={e=>e.target===e.currentTarget&&setReportOpen(false)}><form className="modal-card" onSubmit={submitReport}><h3>Report an issue</h3><p>Your report updates the community layer. Avoid adding names or identifying personal details.</p><div className="form-group"><label>TYPE</label><select name="type"><option>Broken streetlight</option><option>Harassment</option><option>Unsafe crossing</option><option>Blocked pavement</option><option>Other danger</option></select></div><div className="form-group"><label>LOCATION</label><input required placeholder="Street or landmark"/></div><div className="form-group"><label>NOTE (OPTIONAL)</label><textarea rows={3} placeholder="What should others know?"/></div><div className="modal-actions"><button className="btn">Submit report</button><button className="btn alt" type="button" onClick={()=>setReportOpen(false)}>Cancel</button></div></form></div>}
    </div></section>
  );
}

function RouteSelect({value,onChange,destination=false}:{value:string;onChange:(value:string)=>void;destination?:boolean}){
  return <div className="route-field"><span/><select value={value} onChange={e=>onChange(e.target.value)} aria-label={destination?"Destination city":"Starting city"}>{cities.map(city=><option key={city}>{city}</option>)}</select></div>
}

function City({name,x,y,caution,select}:{name:string;x:number;y:number;caution?:boolean;select:(score:number)=>void}){
  return <g className={`city ${caution?"caution":""}`} transform={`translate(${x} ${y})`} onClick={()=>select(cityScores[name])}><circle r="12"/><text x="17" y="5">{name}</text></g>
}
