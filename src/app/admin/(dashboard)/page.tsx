"use client";

import { Button } from "@/components/ui/button";
import DashboardCards from "./components/DashboardCards";
import DashboardTable from "./components/DashboardTable";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <Button onClick={() => router.back()} size="icon" variant="outline">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Dashboard</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Overview of your platform performance
          </p>
        </div>
      </div>

      {/* CARDS */}
      <DashboardCards />

      {/* TABLE */}
      <DashboardTable />
    </div>
  );
}
