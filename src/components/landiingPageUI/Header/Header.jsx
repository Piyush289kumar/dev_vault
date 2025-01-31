"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // Importing icons
import { useEffect, useState } from "react";
import { NavigationMenuLinks } from "./NavigationMenuLinks";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 border-b border-zinc-600 ${
        isScrolled ? "backdrop-blur-md bg-white/10" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href={"/"} className="font-bold uppercase text-zinc-200">
            DEV VAULT
          </Link>

          {/* Navigation Menu - Hidden on Small Screens */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 md:justify-center">
            <NavigationMenuLinks />
          </div>

          {/* Auth Buttons - Hidden on Small Screens */}
          <div className="hidden md:flex items-center gap-4">
            <RainbowButton>Get Unlimited Access</RainbowButton>

            {/* <SignedOut>
              <SignInButton mode="modal">
                <RainbowButton>Get Unlimited Access</RainbowButton>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>
      {/* Mobile Navigation - Shown on Click */}
      {menuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-gray-200 p-4 space-y-2 text-white">
          <nav className="flex flex-col gap-3">
            <NavigationMenuLinks />
            <RainbowButton>Get Unlimited Access</RainbowButton>

            {/* 
            <SignedOut>
              <SignInButton mode="modal">
                <RainbowButton>Get Unlimited Access</RainbowButton>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
          </nav>
        </div>
      )}
    </header>
  );
}
