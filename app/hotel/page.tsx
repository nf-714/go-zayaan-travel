"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, MapPin, Search, Star } from "lucide-react";
import Link from "next/link";

// Sri Lankan hotel data
const sriLankanHotels = [
  {
    id: 1,
    name: "Galle Fort Hotel",
    location: "Galle, Sri Lanka",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
    description:
      "Perched within the historic Galle Fort, this boutique hotel features colonial architecture with modern amenities. Enjoy stunning ocean views and authentic Sri Lankan hospitality.",
    rating: 4.8,
    type: "Hotel",
  },
  {
    id: 2,
    name: "Sigiriya Rock Villa",
    location: "Sigiriya, Sri Lanka",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
    description:
      "Nestled at the base of the iconic Sigiriya Rock, this villa offers panoramic views of the ancient fortress and surrounding wilderness. Perfect for nature lovers.",
    rating: 4.9,
    type: "Villa",
  },
  {
    id: 3,
    name: "Kandy Lake Resort",
    location: "Kandy, Sri Lanka",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=300&fit=crop",
    description:
      "Overlooking the sacred Kandy Lake and Temple of the Tooth, this luxury resort combines traditional Sri Lankan design with contemporary comfort.",
    rating: 4.7,
    type: "Resort",
  },
  {
    id: 4,
    name: "Ella Mountain Lodge",
    location: "Ella, Sri Lanka",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop",
    description:
      "Set in the misty hills of Ella, this eco-friendly lodge offers breathtaking views of tea plantations and mountain ranges. Ideal for hiking enthusiasts.",
    rating: 4.6,
    type: "Lodge",
  },
  {
    id: 5,
    name: "Mirissa Beach House",
    location: "Mirissa, Sri Lanka",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&h=300&fit=crop",
    description:
      "Direct beachfront access with private balconies overlooking the Indian Ocean. Perfect for whale watching and sunset views.",
    rating: 4.8,
    type: "Guesthouse",
  },
  {
    id: 6,
    name: "Nuwara Eliya Tea Estate",
    location: "Nuwara Eliya, Sri Lanka",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
    description:
      "Experience the charm of colonial Sri Lanka in this restored tea estate bungalow. Surrounded by rolling tea gardens and cool mountain air.",
    rating: 4.9,
    type: "Estate",
  },
];

const accommodationTypes = [
  { name: "Hotel", icon: "🏨" },
  { name: "Villa", icon: "🏡" },
  { name: "Resort", icon: "🏖️" },
  { name: "Guesthouse", icon: "🏠" },
];

export default function HotelPage() {
  return (
    <>
      <div className="bg-zinc-150 px-3">
        <div className="absolute z-10 bottom-0 left-0 right-0 top-0 bg-[radial-gradient(200%_105%_at_50%_100%,rgba(255,255,255,0)_40%,rgba(0,0,255,1)_100%)]"></div>
      </div>
      <div className="relative h-full w-full bg-slate-100 py-8">
        <div className="-z-50 max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="z-50 mb-6 lg:mb-0">
                <h1 className="text-4xl font-bold text-stone-900 mb-4">
                  Discover the most-loved stays handpicked just for you!
                </h1>
                <p className="text-lg text-stone-600 max-w-2xl">
                  Traveling solo or with family? Customize your booking here.
                  Explore top hotels in 500+ destinations across beautiful Sri
                  Lanka.
                </p>
              </div>

              <div className="z-50 flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
                  <Input
                    placeholder="Where you Stay..."
                    className="pl-10 pr-4 py-3 w-full sm:w-80 bg-white border-stone-200 focus:border-blue-500"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="z-50 flex flex-wrap gap-3">
              {accommodationTypes.map((type) => (
                <Badge
                  key={type.name}
                  variant="secondary"
                  className="z-50 px-4 py-2 text-sm font-medium bg-white border border-stone-200 hover:bg-stone-50 cursor-pointer"
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Hotel Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sriLankanHotels.map((hotel) => (
              <Link href="/hotel/1" key={hotel.id}>
                <Card className="relative h-96 rounded-xl shadow-none border-none duration-300 overflow-hidden group">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${hotel.image})` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Top Badge */}
                  <Badge className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black border border-white/30 font-bold z-10">
                    <Star className="w-3 h-3 mr-1 text-yellow-500" />
                    Top Rated
                  </Badge>

                  {/* Content with Enhanced Blur Background */}
                  <div className="absolute bottom-0 left-0 right-0">
                    {/* Blurred Background Layer */}
                    <div className="h-64 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {hotel.name}
                          </h3>
                          <div className="flex items-center text-gray-200 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {hotel.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-200">
                            Start From
                          </div>
                          <div className="text-2xl font-bold text-white">
                            ${hotel.price}
                          </div>
                          <div className="text-xs text-gray-200">/Night</div>
                        </div>
                      </div>

                      <p className="text-gray-100 text-sm mb-4 line-clamp-2">
                        {hotel.description}
                      </p>

                      <Button className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-300">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="z-50 px-8 py-3 text-lg border-stone-300 text-stone-700 hover:bg-stone-50"
            >
              Load More Hotels
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
