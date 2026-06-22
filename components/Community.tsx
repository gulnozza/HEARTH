"use client";

import { FormEvent, useState } from "react";

const posts = [
  {initial:"З",name:"Zilola · Tashkent",time:"12 minutes ago",text:"The lights by the north entrance of Minor metro are working again. I walked through at 8:30 pm and it was busy.",helpful:24,replies:3},
  {initial:"М",name:"Madina · Samarkand",time:"38 minutes ago",text:"The pharmacy on Registan Street is open all night and the staff were very helpful. Added it to trusted places.",helpful:41,replies:6},
];

export function Community(){
  const [joined,setJoined]=useState<string[]>([]); const [postOpen,setPostOpen]=useState(false); const [localPosts,setLocalPosts]=useState(posts);
  function publish(e:FormEvent<HTMLFormElement>){e.preventDefault();const data=new FormData(e.currentTarget);setLocalPosts([{initial:"С",name:"Community member",time:"Just now",text:String(data.get("post")),helpful:0,replies:0},...localPosts]);setPostOpen(false)}
  return <section className="community" id="community"><div className="shell"><div className="section-head"><div><span className="eyebrow"><i/> Community</span><h2>Find your people,<br/>wherever you are.</h2></div><p>Share useful updates, join local circles, and turn individual knowledge into collective confidence.</p></div>
    <div className="community-layout"><div className="community-feed"><div className="feed-head"><h3>Near you</h3><button className="btn alt" onClick={()=>setPostOpen(true)}>+ New post</button></div>{localPosts.map((post,index)=><article className="post" key={`${post.name}-${index}`}><div className="post-user"><span className="avatar">{post.initial}</span><div><b>{post.name}</b><small>{post.time}</small></div></div><p>{post.text}</p><div className="post-actions"><span>♡ {post.helpful} helpful</span><span>◯ {post.replies} replies</span><span>↗ Share</span></div></article>)}</div>
      <aside className="meetups"><div className="feed-head"><h3>Upcoming circles</h3><span>View all →</span></div>{[["Women Who Walk","Saturday · Tashkent","Morning group walk through the Botanical Garden.","18 going"],["Career Circle UZ","Tuesday · Online","Open networking for early-career women.","32 going"]].map(([name,date,copy,count])=><article className="event" key={name}><small>{date}</small><h4>{name}</h4><p>{copy}</p><div className="event-footer"><span>{count}</span><button className={`join ${joined.includes(name)?"joined":""}`} onClick={()=>setJoined(current=>current.includes(name)?current.filter(x=>x!==name):[...current,name])}>{joined.includes(name)?"Joined ✓":"Join"}</button></div></article>)}</aside>
    </div>
    {postOpen&&<div className="modal open" role="dialog" aria-modal="true" onMouseDown={e=>e.target===e.currentTarget&&setPostOpen(false)}><form className="modal-card" onSubmit={publish}><h3>Share with the community</h3><p>Keep posts useful, respectful, and free of identifying details.</p><div className="form-group"><label>YOUR UPDATE</label><textarea name="post" required rows={4} placeholder="Share a useful place, route update, or community event…"/></div><div className="modal-actions"><button className="btn">Publish post</button><button className="btn alt" type="button" onClick={()=>setPostOpen(false)}>Cancel</button></div></form></div>}
  </div></section>
}
