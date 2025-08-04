/* eslint-disable @next/next/no-img-element */
export default function AboutSectionComponent() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-b">
      <div className="max-w-7xl h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-1">
            <h2 className="text-blue-600 text-xm font-bold">ABOUT US</h2>
            <div className="space-y-4">
              <p className="text-stone-700 text-3xl leading-relaxed font-inconsolata">
                We are a passionate team of travel enthusiasts dedicated to
                making your travel dreams come true.{" "}
                <span className="text-gray-400  leading-relaxed">
                  Our mission is to provide you with the best travel experiences
                </span>
              </p>
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="flex flex-col gap-4">
            <img
              src="https://images.unsplash.com/photo-1637055972140-64608c1abe53"
              alt="Travel team working together"
              className="w-full h-auto rounded-xl"
            />
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-900 mb-2">
                  200+
                </div>
                <div className="text-gray-600">Happy Customers</div>
              </div>

              <div className="w-px h-16 bg-gray-300"></div>

              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-900 mb-2">
                  65+
                </div>
                <div className="text-gray-600">Top Hotels</div>
              </div>

              <div className="w-px h-16 bg-gray-300"></div>

              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-900 mb-2">
                  250+
                </div>
                <div className="text-gray-600">Experienced Guide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
