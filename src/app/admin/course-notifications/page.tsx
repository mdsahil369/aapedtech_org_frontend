"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Bell, Send, RotateCcw, Info } from "lucide-react";

export default function CourseNotificationsPage() {
  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* HEADER CARD */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap p-5">
        <div className="flex items-center gap-3">
          <Bell className="text-purple-600" size={28} />
          <div>
            <h1 className="text-xl font-semibold text-foreground">
              Course Notifications
            </h1>
            <p className="text-sm text-muted-foreground">
              Send push notifications to students enrolled in a course
            </p>
          </div>
        </div>
      </Card>

      {/* FORM CARD */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap p-6 space-y-5 max-w-3xl">
        {/* SELECT COURSE */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Select Course <span className="text-destructive">*</span>
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="-- Choose a course --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vap">VAP Final</SelectItem>
              <SelectItem value="engineering">Engineering Batch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* NOTIFICATION TYPE */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Notification Type <span className="text-destructive">*</span>
          </label>
          <Select defaultValue="lecture">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lecture">New Lecture</SelectItem>
              <SelectItem value="exam">Exam Update</SelectItem>
              <SelectItem value="notice">General Notice</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* TITLE */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Notification Title <span className="text-destructive">*</span>
          </label>
          <Input placeholder="e.g. New Lecture Available" />
          <p className="text-xs text-muted-foreground text-right">
            0 / 100 characters
          </p>
        </div>

        {/* MESSAGE */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Notification Message <span className="text-destructive">*</span>
          </label>
          <Textarea
            placeholder="Enter the notification message..."
            className="min-h-[120px]"
          />
          <p className="text-xs text-muted-foreground text-right">
            0 / 500 characters
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            disabled
            className="flex-1 bg-muted text-muted-foreground cursor-not-allowed"
          >
            <Send size={16} className="mr-1" />
            Send Notification
          </Button>

          <Button variant="outline">
            <RotateCcw size={16} className="mr-1" />
            Reset
          </Button>
        </div>
      </Card>

      {/* INFO BOX */}
      <Card className="rounded-sm bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 p-5 max-w-3xl">
        <div className="flex items-start gap-3">
          <Info size={20} className="text-blue-600 mt-0.5" />
          <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <p>
              Notifications will be sent to all students enrolled in the
              selected course
            </p>
            <p>
              Students will receive push notifications on their mobile devices
            </p>
            <p>Make sure the notification message is clear and informative</p>
            <p>Use appropriate notification types for better categorization</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
