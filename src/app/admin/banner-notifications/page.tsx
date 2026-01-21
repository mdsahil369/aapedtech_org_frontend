"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus, ArrowLeft } from "lucide-react";

import AddNotificationDialog from "./components/AddNotificationDialog";

export default function NotificationsPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button onClick={() => router.back()} size="icon" variant="outline">
            <ArrowLeft size={16} />
          </Button>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">Notifications</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Manage banner notifications for your platform
            </p>
          </div>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="bg-primary text-white shadow-lg shadow-cyan-500/50"
        >
          <Plus size={16} className="mr-1" />
          Add Notification
        </Button>
      </div>

      {/* TABLE */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="px-4 py-3 text-left font-semibold">Serial</th>
                <th className="px-4 py-3 text-left font-semibold">Message</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {/* SAMPLE ROW */}
              <tr className="border-b hover:bg-muted/50">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">Banner Notification</td>
                <td className="px-4 py-3 flex gap-3">
                  {/* EDIT → SAME POPUP */}
                  <button
                    onClick={() => setOpen(true)}
                    className="text-yellow-500 hover:opacity-80"
                  >
                    <Pencil size={16} />
                  </button>
                  <button className="text-destructive hover:opacity-80">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-3 p-4">
          <Button variant="outline" disabled className="opacity-60">
            Previous
          </Button>
          <Button variant="outline" className="opacity-80">
            Next
          </Button>
        </div>
      </Card>

      {/* POPUP */}
      <AddNotificationDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
