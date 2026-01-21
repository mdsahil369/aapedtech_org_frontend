"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function DueSystem() {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold">Due System</h3>

      <div className="flex items-center justify-between rounded-sm mb-2 border border-border p-4">
        <span className="text-sm">Enable Due System</span>
        <Switch defaultChecked />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input defaultValue="500" placeholder="Due Amount" />
        <Input defaultValue="30" placeholder="Due Days" />
      </div>

      <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
        Save Due Settings
      </Button>
    </div>
  );
}
