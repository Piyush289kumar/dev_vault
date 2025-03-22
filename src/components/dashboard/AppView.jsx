import { Card, CardContent } from "@/components/ui/card";

export default function AppView() {
  return (
    <Card className="flex h-full justify-center items-center">
      <CardContent>
        <h2 className="text-lg font-semibold">App Preview</h2>
        <p>Display your app details here...</p>
      </CardContent>
    </Card>
  );
}
