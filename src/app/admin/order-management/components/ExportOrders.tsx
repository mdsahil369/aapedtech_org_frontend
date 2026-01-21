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

export default function ExportOrders() {
  return (
    <Card className="rounded-sm bg-card border-transparent shadow-aap p-5 space-y-6">
      <h2 className="text-lg font-semibold">Export Orders to CSV</h2>

      {/* DATE FILTER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Start Date</p>
          <Input type="date" />
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">End Date</p>
          <Input type="date" />
        </div>
      </div>

      {/* STATUS FILTER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Order Status</p>
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

        <div>
          <p className="text-xs text-muted-foreground mb-1">Payment Status</p>
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
      </div>

      {/* INFO BOX */}
      <div className="rounded-sm border bg-muted/40 p-4 text-sm space-y-1">
        <p>📄 All orders matching your filters will be exported to CSV</p>
        <p>📅 Leave dates empty to export all orders</p>
        <p>👤 CSV includes order details, customer info & items</p>
        <p>📊 Compatible with Excel & Google Sheets</p>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <Button variant="outline">Clear Filters</Button>

        <Button className="bg-green-600 text-white shadow-lg shadow-green-500/50">Export to CSV</Button>
      </div>

      {/* QUICK EXPORT */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Button variant="outline">Today’s Orders</Button>
        <Button variant="outline">Last 7 Days</Button>
        <Button variant="outline">Last 30 Days</Button>
        <Button variant="outline">Paid Orders</Button>
      </div>
    </Card>
  );
}
