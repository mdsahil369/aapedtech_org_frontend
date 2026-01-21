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

export default function AddPromoPopup({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="max-w-xl rounded-sm bg-card p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Add Promo</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input placeholder="Code *" />
          <Input placeholder="Percentage" />
          <Input placeholder="Amount" />

          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Start Date</p>
            <Input type="date" />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">End Date</p>
            <Input type="date" />
          </div>

          <div className="sm:col-span-2">
            <Input placeholder="Max Attempts" />
          </div>

          <div className="sm:col-span-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select courses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="course1">Course 1</SelectItem>
                <SelectItem value="course2">Course 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="sm:col-span-2">
            <Input placeholder="Search promoter..." />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 pt-6">
          <Button
            variant="ghost"
            className="text-red-600 hover:text-red hover:bg-red-100"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
          <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
            Add Promo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
