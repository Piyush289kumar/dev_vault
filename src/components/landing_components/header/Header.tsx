import { Button } from "@/components/ui/button";
import { Menu, Home, Info, Mail, Layers } from "lucide-react"; // Importing icons
import { useState } from "react";
import { NavigationMenuLinks } from "./NavigationMenuLinks";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full shadow-sm border-b-[0.5px] border-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to={"/"} className="font-bold uppercase">
            {import.meta.env.VITE_APP_NAME}
          </Link>
          {/* Desktop Navigation */}
          <NavigationMenuLinks />
          {/* <RainbowButton>Get Unlimited Access</RainbowButton> */}

          <SignedOut>
            <SignInButton mode="modal">
              <RainbowButton>Get Unlimited Access</RainbowButton>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="space-y-2 p-4">
            <a
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-500"
            >
              <Home size={20} />
              Home
            </a>
            <a
              href="/about"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-500"
            >
              <Info size={20} />
              About
            </a>
            <a
              href="/services"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-500"
            >
              <Layers size={20} />
              Services
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-500"
            >
              <Mail size={20} />
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
