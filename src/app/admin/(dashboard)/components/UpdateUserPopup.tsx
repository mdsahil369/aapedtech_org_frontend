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
import { Textarea } from "@/components/ui/textarea";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function UpdateUserPopup({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="rounded-sm bg-card border border-border p-5">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">
            Update User Information
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3">
          {[
            ["Name", "Salman", "Enter full name"],
            ["Number", "01817837564", "Enter phone number"],
            ["HSC Batch", "HSC-2024", "Enter HSC batch"],
            ["College", "CANTONMENT PUBLIC SCHOOL", "Enter college name"],
          ].map(([label, value, placeholder]) => (
            <div key={label} className="space-y-1">
              <p className="text-[11px] text-muted-foreground">{label}</p>
              <Input
                defaultValue={value}
                placeholder={placeholder}
                className="h-10 rounded-sm bg-muted/40 text-sm"
              />
            </div>
          ))}

          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">Gender</p>
            <Select defaultValue="Male">
              <SelectTrigger className="h-10 rounded-sm bg-muted/40 text-sm cursor-pointer">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-2 space-y-1">
            <p className="text-[11px] text-muted-foreground">Address</p>
            <Textarea
              placeholder="Enter full address"
              className="rounded-sm bg-muted/40 text-sm resize-none"
            />
          </div>

          <div className="col-span-2 flex justify-end gap-3 pt-2">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red hover:bg-red-100"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button className="rounded-lg bg-primary text-white shadow-lg shadow-cyan-500/50">
              Update
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
