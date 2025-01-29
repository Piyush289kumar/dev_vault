import { HoverBorderGradientDemo } from "@/components/landing_components/HoverBorderGradient";
import KeyFeature from "@/components/landing_components/KeyFeature";
import { SpotLightCard } from "@/components/local-ui/SpotLightCard";
import { GridBackground } from "@/components/ui/GridBackground";


export default function HomePage() {
    return (

        <div>
            <GridBackground />
            <HoverBorderGradientDemo />
            <KeyFeature />

            <div>
                <SpotLightCard />
            </div>

        </div>
    );
}
