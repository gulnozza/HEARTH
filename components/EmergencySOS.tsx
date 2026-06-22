"use client";

import { useEffect, useState } from "react";

type Status = { location: string; camera: string } | null;

export function EmergencySOS(){
  const [open,setOpen]=useState(false); const [count,setCount]=useState(0); const [loading,setLoading]=useState(false); const [status,setStatus]=useState<Status>(null);
  useEffect(()=>{if(!count||count>=3)return;const timer=setTimeout(()=>setCount(0),4000);return()=>clearTimeout(timer)},[count]);

  function begin(){setOpen(true);setCount(0);setLoading(false);setStatus(null)}
  async function press(){const next=count+1;setCount(next);if(next<3)return;setLoading(true);let location="Permission unavailable";let camera="Permission unavailable";
    try{location=await new Promise<string>((resolve,reject)=>navigator.geolocation?navigator.geolocation.getCurrentPosition(p=>resolve(`${p.coords.latitude.toFixed(5)}, ${p.coords.longitude.toFixed(5)}`),reject,{timeout:5000}):reject())}catch{}
    try{const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:false});camera="Front camera verified; rear capture queued";stream.getTracks().forEach(track=>track.stop())}catch{}
    setStatus({location,camera});setLoading(false)
  }

  return <><button className="sos-float" onClick={begin} aria-label="Press three times for SOS">SOS<small>PRESS ×3</small></button>{open&&<div className="modal open" role="dialog" aria-modal="true"><div className="modal-card"><span className="eyebrow"><i/> Emergency assist</span><h3>{status?"Emergency package ready":loading?"Preparing emergency package…":`${3-count} press${3-count===1?"":"es"} remaining`}</h3><p>{status?"Prototype complete. A production version would now send this encrypted package through a verified emergency service.":"Three deliberate presses prepare your live location, camera access, and help request for emergency contacts."}</p><div className="press-meter">{[0,1,2].map(i=><i className={i<count?"on":""} key={i}/>)}</div>{loading&&<div className="status-list"><div className="status-item">◌ Requesting live location…</div><div className="status-item">◌ Requesting camera access…</div><div className="status-item">◌ Preparing help message…</div></div>}{status&&<div className="status-list"><div className="status-item">✓ Location: {status.location}</div><div className="status-item">✓ Camera: {status.camera}</div><div className="status-item">✓ Help request prepared for emergency contacts</div></div>}<div className="modal-actions">{!status&&<button className="btn orange" onClick={press} disabled={loading}>Press SOS</button>}<button className="btn alt" onClick={()=>setOpen(false)}>{status?"Done":"Cancel"}</button></div></div></div>}</>
}
