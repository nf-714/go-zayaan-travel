"use client";

import { Button } from "@/components/ui/button";
import { Bath, Bed, Calendar, MapPin, Star, Users } from "lucide-react";

// Mock hotel data based on the image
const hotelData = {
  id: 1,
  name: "Mirror House Sud",
  location: "Bolzano, Trentino-Alto Adige/South Tyrol, Italy",
  price: 1600,
  guests: 4,
  bedrooms: 2,
  bathrooms: 1,
  rating: 4.82,
  reviews: 55,
  description:
    "The Mirror Houses are two small houses in apple orchards near the South Tyrolean Dolomites. They offer a contemporary architecture and a unique holiday experience that nature can offer...",
  amenities: [
    { name: "Kitchen", icon: "🍽️" },
    { name: "Free parking", icon: "🚗" },
    { name: "TV", icon: "📺" },
    { name: "Air conditioning", icon: "❄️" },
    { name: "Wi-Fi", icon: "📶" },
    { name: "Pool", icon: "🏊" },
    { name: "Washer", icon: "🧺" },
    { name: "Hair dryer", icon: "💨" },
  ],
  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
  ],
  reviewList: [
    {
      author: "Kaveh",
      date: "April 2023",
      text: "Everything was great. Sabina was very kind and responsive. She always answered us very quick. Check in was very smooth. The building itself was literally amazing. We enjoyed every",
    },
  ],
};

/* eslint-disable @next/next/no-img-element */
export default function HotelDetailsPage() {
  return (
    <>
      <div className="max-w-8xl mx-auto py-8 relative z-20">
        <div className="bg-stone-100  rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Hotel Details */}
            <div className="p-8 lg:p-12">
              {/* Hotel Title and Location */}
              <div className="mb-6">
                <h1 className="text-3xl font-base font-inconsolata text-gray-900 mb-2">
                  {hotelData.name}
                </h1>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {hotelData.location}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="text-2xl font-bold text-gray-900">
                  ${hotelData.price.toLocaleString()} /night
                </div>
              </div>

              {/* Check Availability Button */}
              <div className="flex gap-2 mb-8 font-mono">
                <Button className="w-full h-[50px] bg-zinc-800 text-gray-100 hover:bg-gray-200 py-4 text-lg font-medium rounded-3xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Check Availability
                </Button>
                <Button className="w-full h-[50px] bg-blue-600 text-gray-900 hover:bg-gray-200 py-4 text-lg font-medium rounded-3xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Rent It Now
                </Button>
              </div>

              {/* Hotel Stats */}
              <div className="flex space-x-8 mb-8">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-gray-900 font-medium">
                    {hotelData.guests} Guests
                  </span>
                </div>
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-gray-900 font-medium">
                    {hotelData.bedrooms} Bedrooms
                  </span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-gray-900 font-medium">
                    {hotelData.bathrooms} Bathroom
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {hotelData.description}
                  <a
                    href="#"
                    className="text-gray-900 font-medium ml-1 hover:underline"
                  >
                    Show more
                  </a>
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What this place offers
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {hotelData.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <span className="mr-2">→</span>
                      {amenity.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-lg font-semibold text-gray-900">
                    {hotelData.rating}
                  </span>
                  <span className="text-gray-600 ml-1">
                    ({hotelData.reviews} reviews)
                  </span>
                </div>

                {hotelData.reviewList.map((review, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center mb-2">
                      <span className="font-medium text-gray-900">
                        {review.author}
                      </span>
                      <span className="text-gray-600 ml-2">
                        , {review.date}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {review.text}
                      <a
                        href="#"
                        className="text-gray-900 font-medium ml-1 hover:underline"
                      >
                        Show more
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Images */}
            <div>
              {/* Image Grid */}
              <div className="grid grid-cols-4 gap-2 p-2">
                {/* 1st image - covers all 4 columns */}
                <div className="col-span-4 h-80 rounded-3xl overflow-hidden">
                  <img
                    src={hotelData.images[0]}
                    alt={hotelData.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 2nd image - covers 2 columns */}
                <div className="col-span-2 h-40 rounded-3xl overflow-hidden">
                  <img
                    src={hotelData.images[1]}
                    alt={`${hotelData.name} 2`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 3rd image - covers 2 columns */}
                <div className="col-span-2 h-40 rounded-3xl overflow-hidden">
                  <img
                    src={hotelData.images[2]}
                    alt={`${hotelData.name} 3`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 4th image - covers all 4 columns */}
                <div className="col-span-4 h-80 rounded-3xl overflow-hidden">
                  <img
                    src={hotelData.images[3]}
                    alt={`${hotelData.name} 4`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
