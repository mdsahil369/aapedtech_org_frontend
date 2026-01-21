"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Trash2, Eye, Plus } from "lucide-react";
import AddRoutineDialog from "./components/AddRoutineDialog";

const routines = [
  {
    id: 1,
    title: "today",
    link: "#",
  },
  {
    id: 2,
    title: "yestarday",
    link: "#",
  },
];

export default function RoutinesPage() {
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
          Add Routine
        </Button>
      </div>
      <AddRoutineDialog open={open} onClose={() => setOpen(false)} />

      {/* TITLE */}
      <h1 className="text-xl font-semibold text-foreground">Routines</h1>

      {/* TABLE */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-semibold">Serial</th>
                <th className="px-4 py-3 text-left font-semibold">Title</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
                <th className="px-4 py-3 text-left font-semibold">View link</th>
              </tr>
            </thead>

            <tbody>
              {routines.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b border-border last:border-none hover:bg-muted/50"
                >
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3">{item.title}</td>

                  {/* ACTION */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <button className="text-blue-600 hover:opacity-80">
                        <Pencil size={16} />
                      </button>
                      <button className="text-destructive hover:opacity-80">
                        <Trash2 size={16} />
                      </button>
                      <button className="text-green-600 hover:opacity-80">
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>

                  {/* VIEW LINK */}
                  <td className="px-4 py-3">
                    <a
                      href={item.link}
                      className="text-primary hover:underline"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
