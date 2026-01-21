"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export default function AddCSVPaymentWithCourseAccessPopup({
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40" />

      <DialogContent className="rounded-sm bg-card border border-border p-5">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">
            Add CSV Payment (With course Access)
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Course */}
          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">
              Course Name <span className="text-red-500">*</span>
            </p>
            <Select>
              <SelectTrigger className="h-10 rounded-sm bg-muted/40 text-sm">
                <SelectValue placeholder="Select multiple courses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="c1">Course 1</SelectItem>
                <SelectItem value="c2">Course 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Added By + Comment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              defaultValue="riyadh"
              disabled
              className="h-10 rounded-sm bg-muted/40 text-sm"
            />
            <Input
              placeholder="Comment"
              className="h-10 rounded-sm bg-muted/40 text-sm"
            />
          </div>

          {/* CSV Upload */}
          <div className="space-y-1">
            <p className="text-[11px] text-muted-foreground">Upload CSV File</p>
            <Input
              type="file"
              className="h-10 rounded-sm bg-muted/40 text-sm file:text-sm"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red hover:bg-red-100"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button className="rounded-lg bg-primary text-white shadow-lg shadow-cyan-500/50">
              Upload CSV
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
