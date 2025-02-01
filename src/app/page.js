"use client";

import { SoftwarePortfolioCanvasRevealEffect } from "@/components/landiingPageUI/SoftwarePortfolioSection";
import { FeatureCard } from "@/components/landiingPageUI/WobbleCard";
import { GridBackground } from "@/components/ui/GridBackGround";

export default function Home() {
  return (
    <>
      <GridBackground />
      <FeatureCard />
      <SoftwarePortfolioCanvasRevealEffect />
    </>
  );
}
