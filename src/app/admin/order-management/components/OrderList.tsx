"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ClipboardList, RefreshCcw } from "lucide-react";

export default function OrderList() {
  return (
    <Card className="rounded-sm bg-card border-transparent shadow-aap p-5 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          Orders Management
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Total: 0 orders</span>
          <Button variant="outline">
            <RefreshCcw size={16} className="mr-1" />
            Refresh
          </Button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">
            Search by Order Number, Name, Phone
          </p>
          <Input placeholder="Search by order number, customer name, phone" />
        </div>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Filter by Status</p>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">
            Filter by Payment Status
          </p>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Payment Status</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="unpaid">Unpaid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button variant="outline" className="w-full">
            Clear Filters
          </Button>
        </div>
      </div>

      {/* EMPTY STATE */}
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <ClipboardList size={48} className="text-muted-foreground mb-3" />
        <h3 className="font-semibold text-foreground">No orders found</h3>
        <p className="text-sm text-muted-foreground">
          No orders match your current filters.
        </p>
      </div>
    </Card>
  );
}
