"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

const smsList = [
  {
    time: "19/01/2026 17:18",
    number: "017XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 8871",
  },
  {
    time: "19/01/2026 17:16",
    number: "018XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 2992",
  },
  {
    time: "19/01/2026 16:54",
    number: "019XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 9212",
  },
  {
    time: "19/01/2026 16:40",
    number: "017XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 1188",
  },
  {
    time: "19/01/2026 16:34",
    number: "016XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 4682",
  },
  {
    time: "19/01/2026 16:18",
    number: "018XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 8255",
  },
  {
    time: "19/01/2026 16:09",
    number: "017XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 8407",
  },
  {
    time: "19/01/2026 15:56",
    number: "019XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 6073",
  },
  {
    time: "19/01/2026 15:44",
    number: "018XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 5401",
  },
  {
    time: "19/01/2026 15:32",
    number: "017XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 7583",
  },
  {
    time: "19/01/2026 15:21",
    number: "016XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 9300",
  },
  {
    time: "19/01/2026 15:10",
    number: "019XXXXXXXX",
    message: "Your VARSITYSQUAD OTP is 8567",
  },
];

export default function SmsHistoryPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <Button onClick={() => router.back()} size="icon" variant="outline">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">SMS History</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            View all sent SMS messages and their details
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Input placeholder="Search by number" />

          <Select defaultValue="today">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="7days">Last 7 days</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="otp">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="otp">OTP SMS</SelectItem>
              <SelectItem value="promo">Promotional</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
            Search Filter
          </Button>
        </div>
      </Card>

      {/* TABLE */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="px-4 py-3 text-left font-semibold">Time</th>
                <th className="px-4 py-3 text-left font-semibold">Number</th>
                <th className="px-4 py-3 text-left font-semibold">Message</th>
              </tr>
            </thead>

            <tbody>
              {smsList.map((sms, i) => (
                <tr
                  key={i}
                  className="border-b border-border last:border-none hover:bg-muted/50"
                >
                  <td className="px-4 py-3 whitespace-nowrap">{sms.time}</td>
                  <td className="px-4 py-3">{sms.number}</td>
                  <td className="px-4 py-3">{sms.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-2 p-4">
          <Button variant="outline" disabled>
            Prev
          </Button>
          <span className="text-sm text-muted-foreground">Page 1</span>
          <Button variant="outline">Next</Button>
        </div>
      </Card>
    </div>
  );
}
