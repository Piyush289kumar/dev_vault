import { Card, CardContent } from "@/components/ui/card";

export default function Sidebar() {
  const apps = ["App 1", "App 2", "App 3"]; // Replace with dynamic data

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Your Apps</h2>
      <div className="space-y-2">
        {apps.map((app, index) => (
          <Card key={index} className="p-3 cursor-pointer hover:bg-gray-200">
            <CardContent>{app}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
