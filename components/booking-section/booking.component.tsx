import { ArrowRight } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function BookingComponent() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm font-medium">
                Recommendation
              </span>
            </div>
          </div>
          <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            <span>See More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Popular flights near your location available now.
        </h2>

        {/* Flight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Kuala Lumpur */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden group cursor-pointer hover:bg-zinc-800 transition-colors">
            <div className="relative h-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2940&auto=format&fit=crop"
                alt="Kuala Lumpur skyline"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-white font-medium">Surakarta</span>
                  <ArrowRight className="w-4 h-4 text-white mx-2" />
                  <span className="text-white font-medium">Kuala Lumpur</span>
                </div>
                <p className="text-gray-400 text-sm font-light">04 Apr, 2024</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Start From</p>
                  <p className="text-white font-light text-base">$213,53</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Bangkok */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden group cursor-pointer hover:bg-zinc-800 transition-colors">
            <div className="relative h-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1508009603885-50cf7c079365?q=80&w=2940&auto=format&fit=crop"
                alt="Bangkok canal"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-white font-medium">Jakarta</span>
                  <ArrowRight className="w-4 h-4 text-white mx-2" />
                  <span className="text-white font-medium">Bangkok</span>
                </div>
                <p className="text-gray-400 text-sm font-light">06 Apr, 2024</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Start From</p>
                  <p className="text-white font-light text-base">$258,94</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - London */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden group cursor-pointer hover:bg-zinc-800 transition-colors">
            <div className="relative h-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2940&auto=format&fit=crop"
                alt="London Big Ben"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-white font-medium">Bandung</span>
                  <ArrowRight className="w-4 h-4 text-white mx-2" />
                  <span className="text-white font-medium">London</span>
                </div>
                <p className="text-gray-400 text-sm font-light">07 Apr, 2024</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Start From</p>
                  <p className="text-white font-light text-base">$321,75</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Singapore */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden group cursor-pointer hover:bg-zinc-800 transition-colors">
            <div className="relative h-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2940&auto=format&fit=crop"
                alt="Singapore Marina Bay"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-white font-medium">Jakarta</span>
                  <ArrowRight className="w-4 h-4 text-white mx-2" />
                  <span className="text-white font-medium">Singapore</span>
                </div>
                <p className="text-gray-400 text-sm font-light">08 Apr, 2024</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Start From</p>
                  <p className="text-white font-light text-base">$70,53</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 - Bali */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden group cursor-pointer hover:bg-zinc-800 transition-colors">
            <div className="relative h-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2940&auto=format&fit=crop"
                alt="Kelingking Beach Bali"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-white font-medium">Surabaya</span>
                  <ArrowRight className="w-4 h-4 text-white mx-2" />
                  <span className="text-white font-medium">Denpasar Bali</span>
                </div>
                <p className="text-gray-400 text-sm font-light">09 Apr, 2024</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Start From</p>
                  <p className="text-white font-light text-base">$25,12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 - Istanbul */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden group cursor-pointer hover:bg-zinc-800 transition-colors">
            <div className="relative h-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2940&auto=format&fit=crop"
                alt="Istanbul mosque"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-white font-medium">Yogyakarta</span>
                  <ArrowRight className="w-4 h-4 text-white mx-2" />
                  <span className="text-white font-medium">
                    Istanbul Turkey
                  </span>
                </div>
                <p className="text-gray-400 text-sm font-light">10 Apr, 2024</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Start From</p>
                  <p className="text-white font-light text-base">$464,75</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
