"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Download, FileText } from "lucide-react";

export default function PrebookingSubmissionsPage() {
  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* HEADER */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap p-5">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Prebooking Submissions
            </h1>
            <p className="text-lg font-semibold text-foreground mt-2">
              Total Submissions : 0
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
              <Download size={16} className="mr-1" />
              DOWNLOAD CSV
            </Button>

            <Button className="bg-green-600 text-white shadow-lg shadow-green-500/50 hover:bg-green-700">
              <FileText size={16} className="mr-1" />
              MANAGE QUESTIONS
            </Button>
          </div>
        </div>
      </Card>

      {/* FILTER */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap p-5">
        <div className="max-w-xs space-y-1">
          <p className="text-xs text-muted-foreground">Filter by Course</p>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="commerce">Commerce</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* TABLE */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Course
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="px-4 py-10 text-center text-muted-foreground">
                  No prebooking submissions found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-between p-4">
          <Button variant="outline" disabled>
            ← PREVIOUS
          </Button>

          <span className="text-sm text-muted-foreground">Page 1</span>

          <Button variant="outline" disabled>
            NEXT →
          </Button>
        </div>
      </Card>
    </div>
  );
}
