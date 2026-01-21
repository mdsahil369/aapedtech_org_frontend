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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CreateRoutinePopup({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="rounded-sm bg-card border border-border p-5">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">
            Create Routine
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          {/* Title */}
          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">
              Title <span className="text-red-500">*</span>
            </p>
            <Input
              placeholder="Title"
              className="h-10 rounded-sm bg-muted/40 text-sm"
            />
          </div>

          {/* Serial */}
          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">
              Serial <span className="text-red-500">*</span>
            </p>
            <Input
              placeholder="Serial"
              className="h-10 rounded-sm bg-muted/40 text-sm"
            />
          </div>

          {/* Upload Type */}
          <div className="space-y-2 pt-1">
            <p className="text-[11px] text-muted-foreground">Upload Type</p>

            <RadioGroup defaultValue="file" className="flex gap-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <RadioGroupItem value="file" />
                File Upload
              </label>

              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <RadioGroupItem value="drive" />
                Drive Link
              </label>
            </RadioGroup>
          </div>

          {/* Upload Routine */}
          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">
              Upload Routine <span className="text-red-500">*</span>
            </p>

            <label className="flex flex-col items-center justify-center h-36 border border-dashed border-border rounded-sm bg-muted/20 cursor-pointer text-center gap-1">
              <span className="text-sm font-medium">PDF File</span>
              <span className="text-xs text-muted-foreground">
                Upload or drag & drop your file PDF.
              </span>
              <Input type="file" accept="application/pdf" className="hidden" />
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
