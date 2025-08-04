"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { City, SearchParams } from "../../types/flight";

interface HeroSectionProps {
  searchParams: SearchParams;
  setSearchParams: (
    params: SearchParams | ((prev: SearchParams) => SearchParams)
  ) => void;
  onSearch: () => void;
  cities: City[];
}

export function HeroSection({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchParams,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSearchParams,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSearch,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cities,
}: HeroSectionProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <span className="text-white text-xl font-bold tracking-wide">
                WORLDSKY
              </span>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>

            {/* Navigation & Auth Buttons (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white font-medium hover:text-gray-200 transition-colors"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-white/80 font-medium hover:text-white transition-colors"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="text-white/80 font-medium hover:text-white transition-colors"
              >
                DESTINATION
              </a>
              <a
                href="#"
                className="text-white/80 font-medium hover:text-white transition-colors"
              >
                REVIEWS
              </a>
              <a
                href="#"
                className="text-white/80 font-medium hover:text-white transition-colors"
              >
                BLOG
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-white border border-white/30 hover:bg-white/10 px-6 py-2 rounded-full"
              >
                Login
              </Button>
              <Button className="bg-stone-900 text-white hover:bg-stone-800 px-6 py-2 rounded-full">
                Register
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-stone-900/80 backdrop-blur-sm p-6 flex flex-col space-y-4 items-center z-40">
          <a
            href="#"
            className="text-white font-medium hover:text-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </a>
          <a
            href="#"
            className="text-white/80 font-medium hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="text-white/80 font-medium hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            DESTINATION
          </a>
          <a
            href="#"
            className="text-white/80 font-medium hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            REVIEWS
          </a>
          <a
            href="#"
            className="text-white/80 font-medium hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BLOG
          </a>
          <Separator className="bg-white/20 w-full" />
          <Button
            variant="ghost"
            className="text-white border border-white/30 hover:bg-white/10 px-6 py-2 rounded-full w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Button>
          <Button
            className="bg-stone-900 text-white hover:bg-stone-800 px-6 py-2 rounded-full w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Register
          </Button>
        </div>
      )}

      {/* Hero Background with Grid and Gradient */}
      <div className="min-h-screen relative flex items-center justify-center text-center">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#6464642e_1px,transparent_1px),linear-gradient(to_bottom,#6464642e_1px,transparent_1px)] bg-[size:20px_20px] "></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(170%_130%_at_50%_0%,rgba(255,255,255,0)_40%,rgba(0,0,255,1)_100%)]"></div>{" "}
        {/* Changed blue to stone-900 RGB */}
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Explore
            <br />
            Beautiful
            <br />
            Sri Lanka
          </h1>
          <p className="text-xl text-white/90 font-light">
            Discover the pearl of the Indian Ocean with convenient domestic
            flights
          </p>
        </div>
      </div>
    </div>
  );
}
