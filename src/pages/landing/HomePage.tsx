import { Meteors } from "@/components/ui/meteors";
import { AuroraText } from "@/components/ui/aurora-text";
import { SparklesText } from "@/components/ui/sparkles-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function HomePage() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg gap-y-8 bg-background">
            <Meteors number={30} />
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center">
                Go Live with <AuroraText>Dev Vault</AuroraText>
                <SparklesText text="Products" />
            </h1>


            <TextAnimate animation="blurInUp" by="character" className="lg:w-1/2 text-center px-12">
                Learn Git with me is a free and open-source platform to learn Git and GitHub. It is designed to be simple and easy to understand for beginners.
            </TextAnimate>

            <div>
                <ShinyButton>Shiny Button</ShinyButton>
            </div>

        </div>
    );
}
