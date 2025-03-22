import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/dashboard/Sidebar"; // Create a Sidebar component
import AppView from "@/components/dashboard/AppView"; // Create AppView component
import { cn } from "@/lib/utils"; // If using utility functions

export default function ApplicationPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar (Left) */}
      <div className={cn("w-3/4  p-4")}>
        <Sidebar />
      </div>

      {/* AppView (Right) */}
      <div className={cn("w-[30%] p-4")}>
        <AppView />
      </div>
    </div>
  );
}
