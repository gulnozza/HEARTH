"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { assetPath } from "@/lib/assets";

type Message={text:string;user?:boolean};
const opening:Message={text:"Salom! I'm Hefi. I can help you find a safer route, a trusted place, or the right next step. What do you need?"};
function answer(q:string){const v=q.toLowerCase();if(v.includes("umida"))return "Umida points are real local businesses and community spaces displaying an Umida sticker. Enable ‘Umida help points’ on the Safety Map to find the nearest place where a trained person can help.";if(v.includes("unsafe")||v.includes("help"))return "Move toward a busy, well-lit place if you can. Call local emergency services if danger is immediate. You can also use SOS to prepare an alert for trusted contacts.";if(v.includes("pharmacy"))return "Open the Safety Map and enable ‘24/7 pharmacies’ to see trusted options and recent community confirmation.";if(v.includes("share")||v.includes("trip"))return "Choose a route on the map, then use its sharing option to let a trusted contact follow your journey.";if(v.includes("route"))return "Open the Safety Map, choose your start and destination, then select ‘Find safest route.’";return "I can help with safer routes, trusted places, community resources, or what to do if you feel unsafe."}

export function Chatbot(){
  const [messages,setMessages]=useState<Message[]>([opening]); const [input,setInput]=useState("");
  function send(q:string){if(!q.trim())return;setMessages(current=>[...current,{text:q,user:true},{text:answer(q)}]);setInput("")}
  function submit(e:FormEvent){e.preventDefault();send(input)}
  return <section className="chatbot" id="chatbot"><div className="shell chat-wrap"><div className="chat-copy"><span className="eyebrow"><i/> Meet Hefi</span><h2>Know more.<br/>Worry less.</h2><p>Ask about safer routes, emergency resources, trusted locations, or what to do in an uncomfortable situation. Hefi is the platform&apos;s AI safety assistant; Umida points are real local places marked with stickers where people can ask for help.</p><div className="suggestions">{["Find a 24/7 pharmacy","Find an Umida help point","I feel unsafe"].map(q=><button onClick={()=>send(q)} key={q}>{q}</button>)}</div></div>
    <div className="chat-window"><div className="chat-header"><span className="bot-avatar"><Image src={assetPath("/hearth-mascot-head.png")} alt="" width={45} height={42}/></span><div><b>Hefi · HEARTH AI</b><small>Online now</small></div></div><div className="chat-messages">{messages.map((m,i)=><div className={`bubble-msg ${m.user?"user":""}`} key={i}>{m.text}</div>)}</div><form className="chat-input" onSubmit={submit}><input value={input} onChange={e=>setInput(e.target.value)} autoComplete="off" placeholder="Ask Hefi…" aria-label="Message Hefi"/><button aria-label="Send message">↑</button></form></div>
  </div></section>
}
