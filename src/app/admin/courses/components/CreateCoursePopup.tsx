"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CreateCoursePopup({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="max-w-2xl rounded-sm bg-card p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Create Course
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          {/* NAME */}
          <Input placeholder="Name *" />

          {/* SLUG + BATCH */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Slug *" />
            <Input placeholder="Batch *" />
          </div>

          {/* THUMBNAIL */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Upload Thumbnail</p>

            <label
              htmlFor="thumbnail"
              className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/40 p-8 cursor-pointer hover:bg-muted"
            >
              <UploadCloud className="text-muted-foreground" />
              <p className="text-sm font-medium">Image File</p>
              <p className="text-xs text-muted-foreground">
                Upload or drag & drop your file SVG, PNG, JPG or GIF.
              </p>
              <input
                id="thumbnail"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Description</p>
            <textarea
              rows={5}
              placeholder="Enter course description here"
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red hover:bg-red-100"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
              Create
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
