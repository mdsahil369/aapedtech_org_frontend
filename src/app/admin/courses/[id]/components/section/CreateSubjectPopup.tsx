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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CreateSubjectPopup({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="rounded-sm bg-card border border-border p-5">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">
            Create Subject
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">
              Section <span className="text-red-500">*</span>
            </p>
            <Select>
              <SelectTrigger className="h-10 rounded-sm bg-muted/40 text-sm">
                <SelectValue placeholder="Select a section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sec1">Section 1</SelectItem>
                <SelectItem value="sec2">Section 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {["Title", "Serial"].map((label) => (
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

          <div className="space-y-2 pt-2">
            {["Is Exam", "Is Open", "Grid Show 1", "Grid Show 2"].map(
              (item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-sm"
                >
                  <Checkbox />
                  {item}
                </label>
              )
            )}
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
