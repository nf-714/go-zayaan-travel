import { motion } from "motion/react";
import Image from "next/image";

export default function ServiceComponent() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-blue-500 font-medium text-sm tracking-wide uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          OUR SERVICE
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Book your Flight with seamless experience
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Discover a myriad of flight choices available through our service,
          offering limitless flying possibilities for your exploration and
          enjoyment
        </motion.p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
        {/* Left Large Card */}
        <motion.div
          className="relative rounded-2xl overflow-hidden group cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/bentoimg-1.jpg"
            alt="Coastal rock formation"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <motion.div
            className="absolute bottom-8 left-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium mb-3">
              Comprehensive Hotel and Travel Support
            </h3>
            <p className="text-white/90 text-sm leading-relaxed max-w-xs">
              From Airport to Hotel, GoZayaan manages all. 24/7 customer service
              to assist you.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column - Two Stacked Cards */}
        <div className="flex flex-col gap-6">
          {/* Top Right Card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden group cursor-pointer flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/bentoimg-2.jpg"
              alt="Volcanic mountain landscape"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <motion.div
              className="absolute bottom-6 left-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium mb-2">
                Seamless Travel System for flight tickting
              </h3>
              <p className="text-white/90 text-sm leading-relaxed max-w-xs">
                Easy and seamless flight booking system that's save times
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden group cursor-pointer flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/bentoimg-3.jpg"
              alt="Traditional temple pagoda"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <motion.div
              className="absolute bottom-6 left-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium mb-2">
                Diverse Destinations with Diverse Hotel
              </h3>
              <p className="text-white/90 text-sm leading-relaxed max-w-xs">
                Explore a myriad range of hotels suitable for you and your trip
                journey!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
