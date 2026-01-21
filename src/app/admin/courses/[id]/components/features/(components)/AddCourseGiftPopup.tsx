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

export default function AddCourseGiftPopup({
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="rounded-sm bg-card border border-border p-5">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">
            Add Course Gift
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          {["Gift Title", "Amount", "Serial"].map((label) => (
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

          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">
              Gift Icon <span className="text-red-500">*</span>
            </p>
            <Input
              type="file"
              className="h-10 rounded-sm bg-muted/40 text-sm file:text-sm"
            />
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
              Add Gift
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
