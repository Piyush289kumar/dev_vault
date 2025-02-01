"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/ui/aurora-text";
import { SparklesText } from "@/components/ui/sparkles-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import { ContainerScroll } from "./container-scroll-animation";

export function GridBackground() {
  const HomePageDisplayImg = require("../../../public/landing_assets/Images/homeDashbaordImg.webp");
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <div className="h-[45rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                <div className="text-center flex flex-col gap-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                    Elevate Vision with{" "}
                    <AuroraText>
                      {process.env.NEXT_PUBLIC_APP_NAME ?? "Dev Vault Tech"}
                    </AuroraText>
                  </h1>
                  <SparklesText text="AI-Powered Solutions" />
                  <p className="text-lg md:text-xl text-zinc-50 max-w-2xl mx-auto mt-4 leading-relaxed">
                    Our{" "}
                    <span className="font-semibold text-zinc-50">
                      AI-powered solutions
                    </span>
                    are designed to transform ideas into reality, optimizing
                    efficiency and innovation for the future.
                  </p>
                  <div className="flex justify-center gap-6 mt-5 md:mt-7">
                    <AnimatedGradientText>
                      🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                      <span
                        className={cn(
                          `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                        )}
                      >
                        Get started for free
                      </span>
                      <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedGradientText>
                    <InteractiveHoverButton>Contact Us</InteractiveHoverButton>
                  </div>
                </div>
              </div>
            </>
          }
        >
          <Image
            src={HomePageDisplayImg}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </>
  );
}
