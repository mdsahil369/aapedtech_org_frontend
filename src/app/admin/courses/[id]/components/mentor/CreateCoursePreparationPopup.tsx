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

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CreateCoursePreparationPopup({
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="rounded-sm bg-card border border-border p-5">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">
            Create Course Preparation
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          {["Name", "Tag", "Serial"].map((label) => (
            <div key={label} className="space-y-1">
              <p className="text-[11px] text-muted-foreground">
                {label} <span className="text-red-500">*</span>
              </p>
              <Input
                placeholder={label}
                className="h-10 rounded-sm bg-muted/40 text-sm"
              />
            </div>
          ))}

          {/* Upload Photo */}
          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">
              Upload Photo <span className="text-red-500">*</span>
            </p>

            <label className="flex flex-col items-center justify-center h-36 border border-dashed border-border rounded-sm bg-muted/20 cursor-pointer text-center gap-1">
              <span className="text-sm font-medium">Image File</span>
              <span className="text-xs text-muted-foreground">
                Upload or drag & drop your file SVG, PNG, JPG or GIF.
              </span>
              <Input type="file" className="hidden" />
            </label>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-3">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red hover:bg-red-100"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button className="rounded-lg bg-primary text-white shadow-lg shadow-cyan-500/50">
              Create
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
