import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/dashboard/Sidebar"; // Create a Sidebar component
import AppView from "@/components/dashboard/AppView"; // Create AppView component
import { cn } from "@/lib/utils"; // If using utility functions
import { LaptopMinimal, Smartphone, Tablet } from "lucide-react";
export default function ApplicationPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar (Left) */}
      <div className={cn("w-3/5 p-4")}>
        <Sidebar />
      </div>
      {/* Main Content (Right) */}
      <div className="w-2/5 flex flex-col">
        {/* Red Header Section */}
        <div className="bg-white rounded-t-lg text-center w-full py-4 border">
          <div className="flex justify-start space-x-4 mt-2 px-5">
            {/* Smartphone */}
            <div className="group relative flex flex-col items-center">
              <div className="flex items-center justify-center w-9 h-9 bg-blue-100 hover:bg-gray-200 rounded-full">
                <Smartphone className="text-blue-600 " />
              </div>
              <span className="absolute bottom-[-30px] scale-0 rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition">
                Phone
              </span>
            </div>
            {/* Tablet (Rotated 90°) */}
            <div className="group relative flex flex-col items-center">
              <div className="flex items-center justify-center w-9 h-9 hover:bg-gray-200 rounded-full">
                <Tablet className="text-gray-600 rotate-90 " />
              </div>
              <span className="absolute bottom-[-30px] scale-0 rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition">
                Tablet
              </span>
            </div>
            {/* Laptop */}
            <div className="group relative flex flex-col items-center">
              <div className="flex items-center justify-center w-9 h-9 hover:bg-gray-200 rounded-full">
                <LaptopMinimal className="text-gray-600 " />
              </div>
              <span className="absolute bottom-[-30px] scale-0 rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition">
                Desktop
              </span>
            </div>
          </div>
        </div>
        {/* Main App View */}
        <div className="flex-grow p-4 bg-gray-100 border">
          <AppView />
        </div>
      </div>
    </div>
  );
}
