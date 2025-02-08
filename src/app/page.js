"use client";

import { motion } from "framer-motion";
import { SoftwarePortfolioCanvasRevealEffect } from "@/components/landiingPageUI/SoftwarePortfolioSection";
import { FeatureCard } from "@/components/landiingPageUI/WobbleCard";
import { GridBackground } from "@/components/ui/GridBackGround";
import Footer from "@/components/landiingPageUI/Footer/Footer";
import Header from "@/components/landiingPageUI/Header/Header";
import { MotionConfig } from "framer-motion";

export default function Home() {
  return (
    <MotionConfig>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
      >
        <Header />
        <GridBackground />
        <FeatureCard />
        <SoftwarePortfolioCanvasRevealEffect />
        <Footer />
      </motion.div>
    </MotionConfig>
  );
}
