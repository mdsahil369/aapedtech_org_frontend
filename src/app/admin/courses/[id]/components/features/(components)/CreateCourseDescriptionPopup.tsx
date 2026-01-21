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
import { Textarea } from "@/components/ui/textarea";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CreateCourseDescriptionPopup({
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="max-w-3xl rounded-sm bg-card border border-border p-5">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">
            Create Course Description
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            placeholder="Question"
            className="h-10 rounded-sm bg-muted/40 text-sm"
          />

          {/* Editor Placeholder */}
          <Textarea
            placeholder="Enter course description here"
            className="min-h-[160px] rounded-sm bg-muted/40 text-sm"
          />

          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">
              Serial <span className="text-red-500">*</span>
            </p>
            <Input className="h-10 rounded-sm bg-muted/40 text-sm" />
          </div>

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
