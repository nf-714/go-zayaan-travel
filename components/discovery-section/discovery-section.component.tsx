import { motion } from "motion/react";

export default function DiscoverySectionComponent() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-stone-200">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-6xl font-light text-stone-800 mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Make your <span className="text-blue-600">move</span> and{" "}
          <span className="text-blue-600">discover</span>{" "}
          <motion.span
            className="inline-block w-48 h-24 lg:w-32 lg:h-16 overflow-hidden mx-2 rounded-full align-middle"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-48 h-full object-cover"
            >
              <source
                src="https://f1pl1h42g5.ufs.sh/f/S0nwnmaGkaqop3JXghfzB9YjG5knSW18gXA0P7hHDIiv4pTQ"
                type="video/mp4"
              />
            </video>
          </motion.span>
          world that&apos;s
          <motion.span
            className="inline-block w-48 h-24 lg:w-32 lg:h-16 overflow-hidden mx-2 rounded-full align-middle"
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-48 h-full object-cover"
            >
              <source
                src="https://f1pl1h42g5.ufs.sh/f/S0nwnmaGkaqo3g6c1jesyM98UfxdYOqQLeb6XV1P5DE2hIRJ"
                type="video/mp4"
              />
            </video>
          </motion.span>{" "}
          waiting for you.
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Traveling changes you. You see new places, meet new people, and become
          a new version of yourself.
        </motion.p>
      </div>
    </section>
  );
}
