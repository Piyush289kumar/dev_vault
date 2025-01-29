import { HoverBorderGradientDemo } from "@/components/landing_components/HoverBorderGradient";
import KeyFeature from "@/components/landing_components/KeyFeature";
import MarqueeVertical from "@/components/local-ui/Marquee";
import { SpotLightCard } from "@/components/local-ui/SpotLightCard";
import { GridBackground } from "@/components/ui/GridBackground";

export default function HomePage() {
  return (
    <div>
      <GridBackground />
      <HoverBorderGradientDemo />
      <KeyFeature />
      <SpotLightCard />
      <MarqueeVertical />
    </div>
  );
}
