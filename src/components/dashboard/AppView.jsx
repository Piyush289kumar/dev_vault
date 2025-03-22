import { Card, CardContent } from "@/components/ui/card";

export default function AppView() {
  return (
    <Card className="flex h-[92vh] justify-center rounded-t-none items-center overflow-hidden">
      <CardContent className="flex flex-col items-center">
        {/* Phone Frame */}
        <div className="flex flex-col bg-black border-[6px] border-gray-800 h-full p-0 rounded-[36px] shadow-xl w-full items-center mt-4 relative">
          {/* Speaker and Front Camera */}
          <div className="bg-gray-950 h-6 rounded-full w-24 absolute top-2"></div>

          {/* Screen Content */}
          <div className="flex flex-col bg-zinc-700 h-[700px] justify-center rounded-[30px] text-center w-[380px] items-center">
            <h2 className="text-lg font-semibold">App Preview</h2>
            <p className="text-gray-500">Your app screen content here...</p>
          </div>

          {/* Speaker and Front Camera */}
          <div className="bg-gray-50 h-2 rounded-full w-[50%] absolute bottom-3"></div>
        </div>
      </CardContent>
    </Card>
  );
}
