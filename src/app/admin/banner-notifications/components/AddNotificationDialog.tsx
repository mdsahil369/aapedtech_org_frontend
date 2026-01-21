"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddNotificationDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-sm bg-muted">
        <DialogHeader>
          <DialogTitle>Add Notification</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="Message" />
          <Input placeholder="Serial" defaultValue="1" />
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-3">
          <Button
            variant="ghost"
            className="text-red-600 hover:text-red hover:bg-red-100"
            onClick={onClose}
          >
            Close
          </Button>

          <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
