import { HoverBorderGradientDemo } from "@/components/landing_components/HoverBorderGradient";
import KeyFeature from "@/components/landing_components/KeyFeature";
import { GlobeModel } from "@/components/local-ui/Globe";
import MarqueeVertical from "@/components/local-ui/Marquee";
import { SpotLightCard } from "@/components/local-ui/SpotLightCard";
import { GridBackground } from "@/components/ui/GridBackground";

const HomePage = () => {
  return (
    <div>
      <GridBackground />
      <HoverBorderGradientDemo />
      <KeyFeature />
      <SpotLightCard />
      <MarqueeVertical />
      <GlobeModel />
    </div>
  );
};

export default HomePage;
