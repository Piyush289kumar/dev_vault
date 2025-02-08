"use client";

import { SoftwarePortfolioCanvasRevealEffect } from "@/components/landiingPageUI/SoftwarePortfolioSection";
import { FeatureCard } from "@/components/landiingPageUI/WobbleCard";
import { GridBackground } from "@/components/ui/GridBackGround";
import Footer from "@/components/landiingPageUI/Footer/Footer";
import Header from "@/components/landiingPageUI/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <GridBackground />
      <FeatureCard />
      <SoftwarePortfolioCanvasRevealEffect />
      <Footer />
    </>
  );
}
