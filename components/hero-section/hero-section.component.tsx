import Navigation from "@/components/navigation/navigation.component";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";
import HeroVideo from "../../public/video/hero-video.mp4";
import { WordRotate } from "../magicui/word-rotate";

export default function HeroSectionComponent() {
  return (
    <div className="min-h-screen bg-zinc-150 px-3">
      {/* Hero Section */}
      <div className="relative h-[98vh] overflow-hidden  rounded-b-3xl">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.4)" }}
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
          {/* Gradient overlay for image blending */}

          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#6464642e_1px,transparent_1px),linear-gradient(to_bottom,#6464642e_1px,transparent_1px)] bg-[size:20px_20px] "></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(170%_130%_at_50%_0%,rgba(255,255,255,0)_40%,rgba(0,0,255,1)_100%)]"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen">
          <Navigation />
          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
            <h1 className="text-white text-lg font-light">
              Welcome to our GoZayaan - Where unforgettable experience awaits!
            </h1>

            <h1 className="text-5xl md:text-6xl lg:text-9xl font-light text-white mb-8 drop-shadow-2xl">
              Plan Your Next
            </h1>
            <span className=" font-inconsolata text-4xl md:text-6xl lg:text-9xl text-white mb-8 drop-shadow-2xl">
              <WordRotate
                words={["Adventure", "Escape", "Dream", "Getaway", "Journey"]}
              />
            </span>
            <p className="mb-4 text-lg md:text-xl text-center text-gray-400">
              Discover Sri Lanka like never before — from hidden gems to
              top-rated stays, all in one seamless platform built for locals.
            </p>

            {/* Search Form */}
            <div className="flex flex-col justify-center items-center md:flex-row gap-4 mb-8 w-full max-w-4xl">
              <Link href="/hotel">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore Hotels
                </Button>
              </Link>{" "}
              <Link href="/flight">
                <Button className="bg-blue-800 text-gray-100 hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Book your Flight Now!
                </Button>
              </Link>
              {/*<Select>
                <SelectTrigger className="bg-white/15 border-white/30 text-white placeholder:text-white/80 backdrop-blur-md shadow-lg">
                  <SelectValue placeholder="Search destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bali">Bali, Indonesia</SelectItem>
                  <SelectItem value="thailand">Thailand</SelectItem>
                  <SelectItem value="vietnam">Vietnam</SelectItem>
                  <SelectItem value="malaysia">Malaysia</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-white/15 border-white/30 text-white placeholder:text-white/80 backdrop-blur-md shadow-lg">
                  <SelectValue placeholder="Date destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jan">January 2024</SelectItem>
                  <SelectItem value="feb">February 2024</SelectItem>
                  <SelectItem value="mar">March 2024</SelectItem>
                  <SelectItem value="apr">April 2024</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-white/15 border-white/30 text-white placeholder:text-white/80 backdrop-blur-md shadow-lg">
                  <SelectValue placeholder="Trip type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="relaxation">Relaxation</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                </SelectContent>
              </Select>*/}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="hidden md:flex lg:flex flex-col md:flex-row justify-between items-start md:items-end p-6 lg:p-12">
              <div className="text-white mb-4 md:mb-0">
                <p className="hidden md:flex lg:flex text-lg mb-2 drop-shadow-lg">
                  Book your travel and transportation service with us
                </p>
                <p className="text-white/90 drop-shadow-lg">
                  and enjoy a hassle-free and memorable journey
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-white drop-shadow-lg">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Bali, Indonesia</span>
                </div>
                <Button
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white hover:text-gray-900 rounded-full px-6 bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Do trip now →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(200%_105%_at_50%_100%,rgba(255,255,255,0)_40%,rgba(0,0,255,1)_100%)]"></div> */}
    </div>
  );
}
