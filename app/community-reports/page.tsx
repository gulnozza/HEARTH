"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ReportFeed from "@/components/ReportFeed";
import FilterChips from "@/components/FilterChips";
import { communityReports, communityFilters } from "@/lib/mockData";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function CommunityReportsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? communityReports
      : communityReports.filter((r) => r.category === activeFilter);

  return (
    <>
      <Hero
        compact
        title="Community Reports"
        subtitle="Stay informed with real-time reports from women in your area. Upvote helpful reports to surface them for others."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <FilterChips
            filters={communityFilters}
            active={activeFilter}
            onChange={setActiveFilter}
          />
          <Link
            href="/report"
            className="inline-flex items-center justify-center gap-2 rounded-[24px] bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-premium hover:bg-forest-light"
          >
            <Plus className="h-4 w-4" />
            New Report
          </Link>
        </div>

        <ReportFeed reports={filtered} />
      </section>
    </>
  );
}
