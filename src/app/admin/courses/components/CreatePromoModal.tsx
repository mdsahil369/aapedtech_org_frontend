"use client";

import { useState } from "react";
import { X } from "lucide-react";

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
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ================= TYPES ================= */
type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/* ================= DUMMY DATA ================= */
const courses = [
  { id: "1", name: "একাডেমিক টেস্ট পেপার সলভ কোর্স" },
  { id: "2", name: "ভার্সিটি ফাইনাল কোর্স" },
  { id: "3", name: "গুচ্ছ + ভার্সিটি কম্বো কোর্স" },
];

const promoters = [
  "Admin Panel",
  "Facebook Campaign",
  "WhatsApp Agent",
  "Affiliate Partner",
];

export default function CreatePromoModal({ open, onOpenChange }: Props) {
  const [form, setForm] = useState({
    code: "NEWYEAR26",
    percentage: "20",
    amount: "500",
    startDate: "2026-01-01",
    endDate: "2026-01-31",
    maxAttempts: "100",
    courseId: "1",
    promoter: "Admin Panel",
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/40 backdrop-blur-sm" />

      <DialogContent className="w-[95vw] max-w-xl rounded-2xl bg-card border border-border">
        {/* ============== HEADER ============== */}
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-base font-semibold">
            Add Promo
          </DialogTitle>

          <button
            onClick={() => onOpenChange(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X size={18} />
          </button>
        </DialogHeader>

        {/* ============== FORM ============== */}
        <div className="space-y-4">
          {/* CODE + PERCENTAGE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              placeholder="Code *"
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value })}
            />
            <Input
              placeholder="Percentage"
              value={form.percentage}
              onChange={(e) => setForm({ ...form, percentage: e.target.value })}
            />
          </div>

          {/* AMOUNT */}
          <Input
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />

          {/* DATES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground">
                Start Date
              </label>
              <Input
                type="date"
                value={form.startDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    startDate: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground">End Date</label>
              <Input
                type="date"
                value={form.endDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    endDate: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* MAX ATTEMPTS */}
          <Input
            placeholder="Max Attempts"
            value={form.maxAttempts}
            onChange={(e) =>
              setForm({
                ...form,
                maxAttempts: e.target.value,
              })
            }
          />

          {/* COURSES */}
          <div>
            <label className="text-xs text-muted-foreground">Courses</label>
            <Select
              value={form.courseId}
              onValueChange={(v) => setForm({ ...form, courseId: v })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* PROMOTER */}
          <div>
            <label className="text-xs text-muted-foreground">Promoter</label>
            <Select
              value={form.promoter}
              onValueChange={(v) => setForm({ ...form, promoter: v })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select promoter" />
              </SelectTrigger>
              <SelectContent>
                {promoters.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* ============== ACTIONS ============== */}
        <div className="flex justify-end gap-3 pt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
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
