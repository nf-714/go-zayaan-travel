/* eslint-disable @next/next/no-img-element */
export default function HotelSectionComponent() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-0">
            Our top vacation rental homes and condos
          </h2>
          <p className="text-gray-600 text-lg max-w-md">
            From Stunning Properties to Seamless Support— We&apos;ve Got You
            Covered.
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - MaraVilla Condominiums */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2940&auto=format&fit=crop"
                alt="MaraVilla Condominiums"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">MaraVilla</h3>
              <p className="text-sm mb-2">Condominiums</p>
              <p className="text-sm font-medium">Prices from $59 USD / night</p>
            </div>
          </div>

          {/* Card 2 - B Nayar Villas (with expanded info on hover) */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1508009603885-50cf7c079365?q=80&w=2940&auto=format&fit=crop"
                alt="B Nayar Villas"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              {/* B Logo */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
            </div>

            {/* Base Info (always visible) */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">B Nayar Villas</h3>
              <p className="text-sm font-medium mb-2">
                Prices from $59 USD / night
              </p>
            </div>

            {/* Expanded Info (visible on hover) */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">B Nayar Villas</h3>
                <p className="text-sm mb-3">Prices from $59 USD / night</p>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  In La Cruz de Huanacaxtle, B Nayar Villas offer 3-5 bedroom
                  villas for 6-12 guests. Enjoy a private beach club with pools,
                  a gym, and a restaurant.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Last Vueltas */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2940&auto=format&fit=crop"
                alt="Last Vueltas"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Last Vueltas</h3>
              <p className="text-sm font-medium">Prices from $55 USD / night</p>
            </div>
          </div>

          {/* Card 4 - Tayau 2BR */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2940&auto=format&fit=crop"
                alt="Tayau 2BR"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Tayau 2BR</h3>
              <p className="text-sm font-medium">
                Prices from $175 USD / night
              </p>
            </div>
          </div>

          {/* Card 5 - Quinta Delfin */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2940&auto=format&fit=crop"
                alt="Quinta Delfin"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Quinta Delfin</h3>
              <p className="text-sm font-medium">
                Prices from $190 USD / night
              </p>
            </div>
          </div>

          {/* Card 6 - Ocean View Suites */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2940&auto=format&fit=crop"
                alt="Ocean View Suites"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Ocean View Suites</h3>
              <p className="text-sm font-medium">
                Prices from $190 USD / night
              </p>
            </div>
          </div>

          {/* Card 7 - Additional Property */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop"
                alt="Sunset Beach Villa"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Sunset Beach Villa</h3>
              <p className="text-sm font-medium">
                Prices from $220 USD / night
              </p>
            </div>
          </div>

          {/* Card 8 - Additional Property */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2940&auto=format&fit=crop"
                alt="Mountain Retreat"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Mountain Retreat</h3>
              <p className="text-sm font-medium">
                Prices from $145 USD / night
              </p>
            </div>
          </div>

          {/* Card 9 - Additional Property */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2940&auto=format&fit=crop"
                alt="City View Apartment"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">City View Apartment</h3>
              <p className="text-sm font-medium">Prices from $95 USD / night</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
