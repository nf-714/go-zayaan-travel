/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";

export default function AboutSectionComponent() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-b">
      <div className="max-w-7xl h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-blue-600 text-xm font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              ABOUT US
            </motion.h2>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-stone-700 text-3xl leading-relaxed font-inconsolata">
                We are a passionate team of travel enthusiasts dedicated to
                making your travel dreams come true.{" "}
                <span className="text-gray-400  leading-relaxed">
                  Our mission is to provide you with the best travel experiences
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Statistics */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1637055972140-64608c1abe53"
              alt="Travel team working together"
              className="w-full h-auto rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.div
              className="flex justify-between items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-900 mb-2">
                  200+
                </div>
                <div className="text-gray-600">Happy Customers</div>
              </motion.div>

              <div className="w-px h-16 bg-gray-300"></div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-900 mb-2">
                  65+
                </div>
                <div className="text-gray-600">Top Hotels</div>
              </motion.div>

              <div className="w-px h-16 bg-gray-300"></div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-900 mb-2">
                  250+
                </div>
                <div className="text-gray-600">Experienced Guide</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
