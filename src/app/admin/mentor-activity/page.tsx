"use client";

import { ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function MentorActivityPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-muted px-4 md:px-6 py-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <Button onClick={() => router.back()} size="icon" variant="outline">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Mentor Activity</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Overview of mentor comments and interactions
          </p>
        </div>
      </div>

      {/* ================= FILTERS ================= */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-end">
        {/* FROM DATE */}
        <div className="w-full lg:max-w-xs">
          <Input type="date" className="h-11" />
        </div>

        {/* TO DATE */}
        <div className="w-full lg:max-w-xs text-white">
          <Input type="date" className="h-11" />
        </div>

        {/* RESET BUTTON */}
        <Button
          className="
            h-11 w-full lg:w-auto
            bg-primary text-white
            shadow-lg shadow-cyan-500/50
            flex items-center gap-2
          "
        >
          <RotateCcw size={16} />
          Reset Filters
        </Button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto rounded-sm border border-border bg-card">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">
                Phone
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">
                Total Comments
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">
                Total First Comments
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan={4}
                className="py-24 text-center text-sm text-muted-foreground"
              >
                No mentor activity found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
