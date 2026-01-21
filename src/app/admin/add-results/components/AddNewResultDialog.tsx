"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface AddNewResultDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function AddNewResultDialog({
  open,
  onClose,
}: AddNewResultDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl rounded-sm bg-muted p-6">
        {/* HEADER */}
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-foreground">
            Add New Result
          </DialogTitle>
        </DialogHeader>

        {/* BODY */}
        <div className="space-y-4 mt-4">
          {/* Name */}
          <Input placeholder="Enter name" className="h-11 bg-background" />

          {/* Description / Editor Placeholder */}
          <div className="rounded-sm border bg-background">
            <div className="px-3 py-2 text-sm text-muted-foreground border-b">
              Editor Toolbar (Jodit)
            </div>
            <div className="p-3 h-40 text-sm text-muted-foreground">
              Start writing...
            </div>
          </div>

          {/* CSV */}
          <div className="space-y-1">
            <Label>CSV File</Label>
            <Input type="file" />
          </div>

          {/* Logo */}
          <div className="space-y-1">
            <Label>Logo</Label>
            <Input type="file" />
          </div>

          {/* Promo Image */}
          <div className="space-y-1">
            <Label>Promo Image</Label>
            <Input type="file" />
          </div>
        </div>

        {/* FOOTER */}
        <DialogFooter className="mt-6 flex gap-3 justify-end">
          <Button variant="ghost" className="text-red-600 hover:text-red hover:bg-red-100" onClick={onClose}>
            Close
          </Button>

          <Button className="bg-primary text-white">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
