"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddPromoPopup from "./AddPromoPopup";

export default function PromoPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* SEARCH + ACTION */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Input placeholder="Search by name..." className="sm:max-w-xs" />

        <div className="flex gap-2">
          <Button variant="outline">Filter by Date</Button>
          <Button
            className="bg-primary text-white shadow-lg shadow-cyan-500/50"
            onClick={() => setOpen(true)}
          >
            Add promo +
          </Button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-card shadow-aap rounded-md p-4 overflow-x-auto">
        <table className="w-full min-w-[800px] text-sm">
          <thead className="bg-muted">
            <tr>
              {[
                "Promo",
                "Name",
                "Number",
                "Sell",
                "Discount",
                "Total",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="px-3 py-3 text-left font-medium text-muted-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="border-b last:border-none">
              <td className="px-3 py-3">CODE10</td>
              <td className="px-3 py-3 font-medium">Khadija akter</td>
              <td className="px-3 py-3">01300213773</td>
              <td className="px-3 py-3">0</td>
              <td className="px-3 py-3">0</td>
              <td className="px-3 py-3">0</td>
              <td className="px-3 py-3">
                <div className="flex gap-2">
                  <Button
                    onClick={() => setOpen(true)}
                    size="sm"
                    className="bg-blue-600 text-white shadow-lg shadow-blue-500/50 hover:bg-blue-700"
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    className="bg-pink-600 text-white shadow-lg shadow-pink-500/50 hover:bg-pink-700"
                  >
                    Delete
                  </Button>
                  <Button
                    size="sm"
                    className="bg-purple-600 text-white shadow-lg shadow-purple-500/50 hover:bg-purple-700"
                  >
                    History
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* POPUP */}
      <AddPromoPopup open={open} onOpenChange={setOpen} />
    </div>
  );
}
