import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

/* eslint-disable @next/next/no-img-element */
export default function BookingComponent() {
  const flightCards = [
    {
      id: 1,
      from: "Surakarta",
      to: "Kuala Lumpur",
      date: "04 Apr, 2024",
      price: "$213,53",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2940&auto=format&fit=crop",
      alt: "Kuala Lumpur skyline",
    },
    {
      id: 2,
      from: "Jakarta",
      to: "Bangkok",
      date: "06 Apr, 2024",
      price: "$258,94",
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Bangkok canal",
    },
    {
      id: 3,
      from: "Bandung",
      to: "London",
      date: "07 Apr, 2024",
      price: "$321,75",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2940&auto=format&fit=crop",
      alt: "London Big Ben",
    },
    {
      id: 4,
      from: "Jakarta",
      to: "Singapore",
      date: "08 Apr, 2024",
      price: "$70,53",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2940&auto=format&fit=crop",
      alt: "Singapore Marina Bay",
    },
    {
      id: 5,
      from: "Surabaya",
      to: "Denpasar Bali",
      date: "09 Apr, 2024",
      price: "$25,12",
      image:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2940&auto=format&fit=crop",
      alt: "Kelingking Beach Bali",
    },
    {
      id: 6,
      from: "Yogyakarta",
      to: "Istanbul Turkey",
      date: "10 Apr, 2024",
      price: "$464,75",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2940&auto=format&fit=crop",
      alt: "Istanbul mosque",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.div>
              <span className="text-gray-400 text-sm font-medium">
                Recommendation
              </span>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Popular flights near your location available now.
        </motion.h2>

        {/* Flight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flightCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-zinc-900 rounded-xl overflow-hidden group cursor-pointer hover:bg-zinc-800 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative h-48">
                <motion.img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover rounded-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-white font-medium">{card.from}</span>
                    <ArrowRight className="w-4 h-4 text-white mx-2" />
                    <span className="text-white font-medium">{card.to}</span>
                  </div>
                  <p className="text-gray-400 text-sm font-light">
                    {card.date}
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Start From</p>
                    <p className="text-white font-light text-base">
                      {card.price}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
