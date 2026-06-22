"use client";

import { FormEvent, useState } from "react";

type Message={text:string;user?:boolean};
const opening:Message={text:"Salom! I'm Umida. I can help you find a safer route, a trusted place, or the right next step. What do you need?"};
function answer(q:string){const v=q.toLowerCase();if(v.includes("unsafe")||v.includes("help"))return "Move toward a busy, well-lit place if you can. Call local emergency services if danger is immediate. You can also use SOS to prepare an alert for trusted contacts.";if(v.includes("pharmacy"))return "Open the Safety Map and enable ‘24/7 pharmacies’ to see trusted options and recent community confirmation.";if(v.includes("share")||v.includes("trip"))return "Choose a route on the map, then use its sharing option to let a trusted contact follow your journey.";if(v.includes("route"))return "Open the Safety Map, choose your start and destination, then select ‘Find safest route.’";return "I can help with safer routes, trusted places, community resources, or what to do if you feel unsafe."}

export function Chatbot(){
  const [messages,setMessages]=useState<Message[]>([opening]); const [input,setInput]=useState("");
  function send(q:string){if(!q.trim())return;setMessages(current=>[...current,{text:q,user:true},{text:answer(q)}]);setInput("")}
  function submit(e:FormEvent){e.preventDefault();send(input)}
  return <section className="chatbot" id="chatbot"><div className="shell chat-wrap"><div className="chat-copy"><span className="eyebrow"><i/> Meet Umida</span><h2>A calm answer, right when you need it.</h2><p>Ask about safer routes, emergency resources, trusted locations, or what to do in an uncomfortable situation. Umida is a prototype guide and never replaces emergency services.</p><div className="suggestions">{["Find a 24/7 pharmacy","How do I share my trip?","I feel unsafe"].map(q=><button onClick={()=>send(q)} key={q}>{q}</button>)}</div></div>
    <div className="chat-window"><div className="chat-header"><span className="bot-avatar">✦</span><div><b>Umida · HEARTH AI</b><small>Online now</small></div></div><div className="chat-messages">{messages.map((m,i)=><div className={`bubble-msg ${m.user?"user":""}`} key={i}>{m.text}</div>)}</div><form className="chat-input" onSubmit={submit}><input value={input} onChange={e=>setInput(e.target.value)} autoComplete="off" placeholder="Ask Umida anything…" aria-label="Message Umida"/><button aria-label="Send message">↑</button></form></div>
  </div></section>
}
