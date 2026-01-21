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

export default function UploadRecordedClassModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50 px-6">
          Upload Recorded Class
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-card border border-border">
        <DialogHeader>
          <DialogTitle>Upload New Class</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="Title" />
          <Textarea placeholder="Description" />
          <Input placeholder="Privacy Status" />

          {/* Thumbnail */}
          <div>
            <p className="text-sm font-medium mb-1">Thumbnail</p>
            <div className="rounded-xl border-2 border-dashed border-border p-6 text-center text-primary text-sm">
              Upload a file or drag and drop
            </div>
          </div>

          {/* Video */}
          <div>
            <p className="text-sm font-medium mb-1">Video</p>
            <div className="rounded-xl border-2 border-dashed border-border p-6 text-center text-primary text-sm">
              Upload a file or drag and drop
            </div>
          </div>

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
              Upload Class
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
