"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ClipboardList,
  Plus,
  BarChart2,
  RefreshCcw,
  ArrowLeft,
} from "lucide-react";
import CreateManualOrder from "./components/CreateManualOrder";
import ExportOrders from "./components/ExportOrders";
import OrderList from "./components/OrderList";

export default function BookOrdersPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"list" | "create" | "export">(
    "list",
  );

  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <Button onClick={() => router.back()} size="icon" variant="outline">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">
            Book Store Management
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Manage book orders and transactions
          </p>
        </div>
      </div>

      {/* TOP TABS */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap p-3">
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab("list")}
            className={`cursor-pointer flex items-center gap-2 pb-2 ${
              activeTab === "list"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <ClipboardList size={16} />
            Order List
          </button>

          <button
            onClick={() => setActiveTab("create")}
            className={`cursor-pointer flex items-center gap-2 pb-2 ${
              activeTab === "create"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Plus size={16} />
            Create Manual Order
          </button>

          <button
            onClick={() => setActiveTab("export")}
            className={`cursor-pointer flex items-center gap-2 pb-2 ${
              activeTab === "export"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BarChart2 size={16} />
            Export Orders
          </button>
        </div>
      </Card>
      {activeTab === "list" && <OrderList />}

      {activeTab === "create" && <CreateManualOrder />}

      {activeTab === "export" && <ExportOrders />}
    </div>
  );
}
