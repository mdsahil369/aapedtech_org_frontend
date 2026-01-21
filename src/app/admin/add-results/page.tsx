"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import AddNewResultDialog from "./components/AddNewResultDialog";
import { useState } from "react";

export default function ResultsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <Button
          onClick={() => setOpen(true)}
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
        >
          <Plus size={16} className="mr-1" />
          Add Result
        </Button>
      </div>
      <AddNewResultDialog open={open} onClose={() => setOpen(false)} />

      {/* TABLE */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="bg-muted border-b border-border">
                {[
                  "Serial",
                  "Name",
                  "Description",
                  "File",
                  "Logo",
                  "Promo Image",
                  "Action",
                  "Link",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-semibold text-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-10 text-center text-muted-foreground"
                >
                  No results available.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-4 p-4">
          <Button variant="outline" disabled className="opacity-60">
            Previous
          </Button>

          <span className="text-sm text-muted-foreground">Page 1</span>

          <Button variant="outline" disabled className="opacity-60">
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
}
