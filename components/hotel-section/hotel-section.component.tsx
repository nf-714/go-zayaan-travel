/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";

export default function HotelSectionComponent() {
  const hotelCards = [
    {
      id: 1,
      name: "MaraVilla",
      type: "Condominiums",
      price: "$59 USD / night",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2940&auto=format&fit=crop",
      alt: "MaraVilla Condominiums",
    },
    {
      id: 2,
      name: "B Nayar Villas",
      type: "",
      price: "$59 USD / night",
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "B Nayar Villas",
      hasLogo: true,
      description:
        "In La Cruz de Huanacaxtle, B Nayar Villas offer 3-5 bedroom villas for 6-12 guests. Enjoy a private beach club with pools, a gym, and a restaurant.",
    },
    {
      id: 3,
      name: "Last Vueltas",
      type: "",
      price: "$55 USD / night",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2940&auto=format&fit=crop",
      alt: "Last Vueltas",
    },
    {
      id: 4,
      name: "Tayau 2BR",
      type: "",
      price: "$175 USD / night",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2940&auto=format&fit=crop",
      alt: "Tayau 2BR",
    },
    {
      id: 5,
      name: "Quinta Delfin",
      type: "",
      price: "$190 USD / night",
      image:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2940&auto=format&fit=crop",
      alt: "Quinta Delfin",
    },
    {
      id: 6,
      name: "Ocean View Suites",
      type: "",
      price: "$190 USD / night",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2940&auto=format&fit=crop",
      alt: "Ocean View Suites",
    },
    {
      id: 7,
      name: "Sunset Beach Villa",
      type: "",
      price: "$220 USD / night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop",
      alt: "Sunset Beach Villa",
    },
    {
      id: 8,
      name: "Mountain Retreat",
      type: "",
      price: "$145 USD / night",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2940&auto=format&fit=crop",
      alt: "Mountain Retreat",
    },
    {
      id: 9,
      name: "City View Apartment",
      type: "",
      price: "$95 USD / night",
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2940&auto=format&fit=crop",
      alt: "City View Apartment",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our top vacation rental homes and condos
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            From Stunning Properties to Seamless Support— We&apos;ve Got You
            Covered.
          </motion.p>
        </motion.div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotelCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative h-96">
                <motion.img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {card.hasLogo && (
                  <motion.div
                    className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + 0.1 * index,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-white font-bold text-xl">B</span>
                  </motion.div>
                )}
              </div>

              {/* Base Info (always visible) */}
              <motion.div
                className="absolute bottom-4 left-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + 0.1 * index,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-1">{card.name}</h3>
                {card.type && <p className="text-sm mb-2">{card.type}</p>}
                <p className="text-sm font-medium">Prices from {card.price}</p>
              </motion.div>

              {/* Expanded Info (visible on hover) - Only for B Nayar Villas */}
              {card.description && (
                <motion.div
                  className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                    <p className="text-sm mb-3">Prices from {card.price}</p>
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <motion.button
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn more
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
