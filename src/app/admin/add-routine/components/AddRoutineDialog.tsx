"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AddRoutineDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function AddRoutineDialog({
  open,
  onClose,
}: AddRoutineDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="
          sm:max-w-md
          rounded-sm
          bg-muted
          p-6
        "
      >
        {/* HEADER */}
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-foreground">
            Add Routine
          </DialogTitle>
        </DialogHeader>

        {/* BODY */}
        <div className="mt-4 space-y-4">
          <Input
            placeholder="Enter Routine Title"
            className="h-11 bg-background"
          />

          <Button className="w-full bg-primary text-white">Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
