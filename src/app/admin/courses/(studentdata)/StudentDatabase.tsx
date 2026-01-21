"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import EnrolledTable from "./EnrolledTable";

import AddNewPaymentPopup from "./AddNewPaymentPopup";
import AddCSVPaymentPopup from "./AddCSVPaymentPopup";
import AddCSVPaymentWithCourseAccessPopup from "./AddCSVPaymentWithCourseAccessPopup";

export default function CoursesPage() {
  const [openNew, setOpenNew] = useState(false);
  const [openCSV, setOpenCSV] = useState(false);
  const [openCSVAccess, setOpenCSVAccess] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-muted sm:p-4 md:p-6 space-y-6">
        {/* FILTER BAR */}
        <div className="bg-card shadow-aap rounded-md p-4 space-y-4">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
            <Input
              placeholder="Search by name, amount, id"
              className="lg:w-72"
            />

            <div className="flex flex-wrap gap-2">
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                </SelectContent>
              </Select>

              <Button size="sm" variant="outline">
                Download CSV
              </Button>

              <Button
                size="sm"
                className="bg-primary text-white shadow-lg shadow-cyan-500/50"
                onClick={() => setOpenNew(true)}
              >
                Add New +
              </Button>

              <Button
                size="sm"
                className="bg-primary text-white shadow-lg shadow-cyan-500/50"
                onClick={() => setOpenCSV(true)}
              >
                Add CSV +
              </Button>

              <Button
                size="sm"
                className="bg-primary text-white shadow-lg shadow-cyan-500/50"
                onClick={() => setOpenCSVAccess(true)}
              >
                Add CSV (with access) +
              </Button>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ["SSL Commerz", "Amount: 73886", "Transactions: 114"],
              ["Manual", "Amount: 73987", "Transactions: 32"],
              [
                "Total Transactions",
                "Amount: 197813",
                "Transactions: 146",
              ],
            ].map(([title, a, t]) => (
              <div
                key={title}
                className="rounded-md border border-border shadow-aap bg-muted/50 p-4 text-sm"
              >
                <p className="font-medium">{title}</p>
                <p className="text-muted-foreground">{a}</p>
                <p className="text-muted-foreground">{t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <EnrolledTable />
      </div>

      {/* ================= POPUPS ================= */}
      <AddNewPaymentPopup
        open={openNew}
        onOpenChange={setOpenNew}
      />

      <AddCSVPaymentPopup
        open={openCSV}
        onOpenChange={setOpenCSV}
      />

      <AddCSVPaymentWithCourseAccessPopup
        open={openCSVAccess}
        onOpenChange={setOpenCSVAccess}
      />
    </>
  );
}
