"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CreateBroadcastModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50 px-6">
          Create New Broadcast
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-card border border-border">
        <DialogHeader>
          <DialogTitle>Create New Broadcast</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="Title" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input placeholder="Video Resolution" />
            <Input placeholder="Privacy Status" />
          </div>

          <Textarea placeholder="Description" />

          <Input type="datetime-local" />

          {/* Thumbnail */}
          <label className="block">
            <span className="text-sm font-medium">Thumbnail</span>
            <div className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border p-6 text-center text-sm text-primary">
              Upload a file or drag and drop
              <span className="text-xs text-muted-foreground">
                PNG, JPG up to 10MB
              </span>
            </div>
          </label>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red hover:bg-red-100"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
            <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50 px-6">
              Create Stream
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
