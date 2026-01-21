"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import CoverTab from "./components/CoverTab";
import VideoTab from "./components/VideoTab";
import SuccessTab from "./components/SuccessTab";
import AboutTab from "./components/AboutTab";
import TitleTextsTab from "./components/TitleTextsTab";

export default function EditCoursePage() {
  const router = useRouter();
  const [tab, setTab] = useState("cover");

  return (
    <div className="min-h-screen bg-muted p-4 md:p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <Button onClick={() => router.back()} size="icon" variant="outline">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Edit Profile</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Update Profile details and settings
          </p>
        </div>
      </div>

      {/* TABS */}
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="cover" className="cursor-pointer">
            Cover
          </TabsTrigger>
          <TabsTrigger value="video" className="cursor-pointer">
            Video
          </TabsTrigger>
          <TabsTrigger value="success" className="cursor-pointer">
            Success
          </TabsTrigger>
          <TabsTrigger value="about" className="cursor-pointer">
            About
          </TabsTrigger>
          <TabsTrigger value="title" className="cursor-pointer">
            Title Texts
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* TAB CONTENT */}
      {tab === "cover" && <CoverTab />}
      {tab === "video" && <VideoTab />}
      {tab === "success" && <SuccessTab />}
      {tab === "about" && <AboutTab />}
      {tab === "title" && <TitleTextsTab />}
    </div>
  );
}
