"use client";

import { useState } from "react";
import { CheckCircle2, MapPin, AlertCircle } from "lucide-react";
import { reportCategories } from "@/lib/mockData";

export default function ReportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ title: "", category: "", location: "", description: "", anonymous: true });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = "mt-1.5 w-full rounded-2xl border border-forest/10 bg-white px-4 py-3 text-sm text-forest placeholder:text-forest/30 focus:border-pink/50 focus:outline-none focus:ring-2 focus:ring-pink/20";

  if (submitted) {
    return (
      <div className="rounded-[32px] border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
        <h3 className="mt-4 text-xl font-bold text-forest">Report Submitted</h3>
        <p className="mt-2 text-sm font-light text-forest/50">Thank you for helping keep our community safe.</p>
        <button
          type="button"
          onClick={() => { setSubmitted(false); setForm({ title: "", category: "", location: "", description: "", anonymous: true }); }}
          className="mt-6 rounded-[24px] bg-forest px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest-light"
        >
          Submit Another Report
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-forest">Incident Title</label>
        <input id="title" type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Brief description" className={inputClass} />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-forest">Category</label>
        <select id="category" required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={inputClass}>
          <option value="">Select a category</option>
          {reportCategories.map((cat) => <option key={cat.id} value={cat.id}>{cat.label}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-forest">Location</label>
        <div className="relative mt-1.5">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-orange" />
          <input id="location" type="text" required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Street or landmark" className="w-full rounded-2xl border border-forest/10 bg-white py-3 pl-10 pr-4 text-sm focus:border-pink/50 focus:outline-none focus:ring-2 focus:ring-pink/20" />
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-forest">Details</label>
        <textarea id="description" required rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="What did you see or experience?" className={`${inputClass} resize-none`} />
      </div>
      <label className="flex items-center gap-3 rounded-2xl border border-forest/5 bg-cream px-4 py-3 cursor-pointer">
        <input type="checkbox" checked={form.anonymous} onChange={(e) => setForm({ ...form, anonymous: e.target.checked })} className="h-4 w-4 rounded border-forest/20 text-forest focus:ring-pink" />
        <span className="text-sm text-forest/70">Submit anonymously</span>
      </label>
      <div className="flex items-start gap-2 rounded-2xl bg-orange/10 border border-orange/20 px-4 py-3">
        <AlertCircle className="h-5 w-5 shrink-0 text-orange mt-0.5" />
        <p className="text-xs text-forest/70">In an emergency, call 911 first.</p>
      </div>
      <button type="submit" className="w-full rounded-[24px] bg-forest py-3.5 text-sm font-semibold text-white shadow-premium hover:bg-forest-light transition-all">
        Submit Report
      </button>
    </form>
  );
}
