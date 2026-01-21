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

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CreateChaptersPopup({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="rounded-sm bg-card border border-border p-5">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">
            Create Chapters
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">
              Subject <span className="text-red-500">*</span>
            </p>
            <Select>
              <SelectTrigger className="h-10 rounded-sm bg-muted/40 text-sm">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math">Math</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">
              Lecture Type <span className="text-red-500">*</span>
            </p>
            <Select>
              <SelectTrigger className="h-10 rounded-sm bg-muted/40 text-sm">
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="live">Live</SelectItem>
                <SelectItem value="recorded">Recorded</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {["Title", "Serial", "URL"].map((label) => (
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
            <p className="text-[11px] text-muted-foreground">Image</p>
            <Input
              type="file"
              className="h-10 rounded-sm bg-muted/40 text-sm file:text-sm"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
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
