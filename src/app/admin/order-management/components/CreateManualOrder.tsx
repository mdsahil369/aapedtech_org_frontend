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

export default function CreateManualOrder() {
  return (
    <Card className="rounded-sm bg-card border-transparent shadow-aap p-5 space-y-6">
      <h2 className="text-lg font-semibold">Create Manual Order</h2>

      {/* Order Information */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Order Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select defaultValue="pending">
            <SelectTrigger>
              <SelectValue placeholder="Order Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="bkash">
            <SelectTrigger>
              <SelectValue placeholder="Payment Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bkash">bKash</SelectItem>
              <SelectItem value="cod">Cash on Delivery</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="pending">
            <SelectTrigger>
              <SelectValue placeholder="Payment Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select defaultValue="home">
            <SelectTrigger>
              <SelectValue placeholder="Delivery Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home">Home Delivery</SelectItem>
              <SelectItem value="pickup">Pickup</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Payment Reference (Optional)" />
        </div>
      </div>

      {/* Delivery Information */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Delivery Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Name *" />
          <Input placeholder="Phone Number *" />
        </div>

        <Input placeholder="Address *" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="City *" />
          <Input placeholder="Postal Code" />
        </div>

        <Input placeholder="Notes" />
      </div>

      {/* Select Books */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Select Books</h3>
        <Input placeholder="Search and select books" />
      </div>

      {/* Order Items */}
      <div className="text-sm text-muted-foreground text-center py-6">
        No items in cart
      </div>

      {/* Financial Details */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Financial Details</h3>

        <div className="flex justify-between text-sm">
          <span>Subtotal:</span>
          <span>৳0.00</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span>Shipping Charge:</span>
          <Input className="w-24 h-8" defaultValue="0" />
        </div>

        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span className="text-primary">৳0.00</span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Reset Form</Button>
        <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">Create Order</Button>
      </div>
    </Card>
  );
}
