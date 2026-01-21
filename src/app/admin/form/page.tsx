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
import { Download, FileText, Search } from "lucide-react";

export default function FormSubmissionAnswersPage() {
  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* HEADER */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap p-5 space-y-1">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Form Submission Answers
            </h1>
            <p className="text-sm text-muted-foreground">
              Total Submissions: 0
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
              <Download size={16} className="mr-1" />
              DOWNLOAD CSV
            </Button>

            <Button className="bg-green-600 text-white shadow-lg shadow-green-500/50 hover:bg-green-700">
              <FileText size={16} className="mr-1" />
              FORM QUESTIONS
            </Button>
          </div>
        </div>
      </Card>

      {/* FILTERS */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap p-5 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* SEARCH */}
          <div className="relative lg:col-span-2">
            <Search
              size={16}
              className="absolute left-3 top-1/2 md:top-4.5 -translate-y-1/2 text-muted-foreground"
            />
            <Input placeholder="Search by name or mobile" className="pl-9" />
          </div>

          {/* FILTER */}
          <div className="space-y-1">
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
        </div>
      </Card>

      {/* TABLE */}
      <Card className="rounded-sm bg-card border-transparent shadow-aap">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="bg-muted border-b border-border">
                {["Name", "Number", "Course", "Actions"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-semibold text-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-10 text-center text-muted-foreground"
                >
                  No results found.
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
