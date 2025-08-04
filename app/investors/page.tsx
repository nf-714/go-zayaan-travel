"use client";

import Navigation from "@/components/navigation/navigation.component";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BarChart3,
  Building2,
  Calendar,
  ChevronDown,
  Download,
  Eye,
  Globe,
  Leaf,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Shield,
  Smartphone,
  Target,
  TrendingUp,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

export default function InvestorsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState(0);

  const stats = [
    { label: "Internet Penetration", value: "53.6%", icon: Globe },
    { label: "Market Growth", value: "25%", icon: TrendingUp },
    { label: "Digital Readiness", value: "High", icon: Zap },
    { label: "Tourism Recovery", value: "Robust", icon: Rocket },
  ];

  const opportunities = [
    {
      title: "B2C Platform",
      description:
        "Addresses growing demand for convenient, transparent online domestic travel",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "B2B HMS",
      description: "Affordable digital solutions for fragmented hotel industry",
      icon: Building2,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const sdgGoals = [
    {
      number: "8",
      title: "Decent Work & Economic Growth",
      description: "Creating jobs and fostering sustainable tourism",
    },
    {
      number: "9",
      title: "Industry, Innovation & Infrastructure",
      description: "Digitalizing the travel sector",
    },
    {
      number: "17",
      title: "Partnerships for the Goals",
      description: "Collaboration with local stakeholders",
    },
  ];

  const sustainabilityGoals = [
    { year: "2030", goal: "25% eco-friendly bookings", icon: Leaf },
    { year: "2033", goal: "10,000 digital skills empowered", icon: Users },
    { year: "2035", goal: "Net-Zero Operations", icon: Shield },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-zinc-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <Navigation />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] "></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(200%_100%_at_45%_95%,rgba(255,35,35,0)_20%,rgba(41,0,153,1)_100%)]"></div>
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 py-20"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 backdrop-blur-sm">
                🚀 Investment Opportunity
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight px-4"
            >
              Invest in the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-700 block">
                Sri Lankan Travel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Capitalize on a rapidly digitizing market with a proven leader in
              travel technology, targeting high-growth B2C and underserved B2B
              segments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-2xl shadow-blue-500/25 w-full sm:w-auto">
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Download Investor Deck
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-500/30 hover:bg-blue-500/10 text-blue-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl backdrop-blur-sm w-full sm:w-auto"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Schedule a Meeting
              </Button>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative mx-auto max-w-6xl px-4"
          >
            <div className="bg-gradient-to-br from-blue-900/50 to-zinc-900/50 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-zinc-500/20 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        Sri Lanka Market
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">
                        Digital transformation ready
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        Hotel Industry
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">
                        Fragmented & underserved
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        Digital Platform
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">
                        Proven technology stack
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-4 sm:p-6 border border-blue-500/30">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Market Opportunity
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300">
                        High growth potential in digital travel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -tranzinc-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-400"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Market Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Sri Lanka, Why Now?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              A compelling growth story backed by strong market fundamentals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-500/20 p-6 sm:p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-zinc-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Vision
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering Local Travel & Hospitality in Sri Lanka through
              innovative technology solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/30 to-zinc-900/30 rounded-3xl p-6 sm:p-8 lg:p-12 border border-zinc-500/20 backdrop-blur-sm mx-4"
          >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Strategic Market Entry
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  GoZayaan, a leading OTA in Bangladesh, is strategically
                  expanding into Sri Lanka, bringing its innovative B2C flight
                  and hotel booking platform for local travelers and a crucial,
                  low-cost B2B Hotel Management System (HMS) for the
                  nation&apos;s independent hotels.
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  We are uniquely positioned to capture significant market share
                  in a recovering, digitally eager economy with proven
                  technology and regional expertise.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {opportunities.map((opportunity, index) => (
                  <motion.div
                    key={opportunity.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 sm:space-x-4 group"
                  >
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${opportunity.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <opportunity.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {opportunity.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {opportunity.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operational Excellence Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Operational Excellence & Sustainable Growth
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
              Built for scale with proven processes and strategic
              diversification
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 sm:p-8 border border-zinc-500/20 backdrop-blur-sm">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Raw Material & Process
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Our core &quot;raw materials&quot; are{" "}
                  <span className="text-blue-400 font-semibold">
                    data, proprietary algorithms, and human capital
                  </span>
                  . Our agile development processes, robust API integrations
                  with airlines and hotels, and cloud-based infrastructure
                  ensure scalability, real-time inventory, and seamless service
                  delivery.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 sm:p-8 border border-zinc-500/20 backdrop-blur-sm">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Supply Chain Management
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  We ensure efficient flow of information, services, and
                  payments through sophisticated API integrations with GDS
                  systems and direct hotel contracts, automated reconciliation,
                  and dedicated supplier relationship management, ensuring
                  optimal inventory and pricing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 sm:p-8 border border-zinc-500/20 backdrop-blur-sm">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Mode of Entry
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  We are executing a{" "}
                  <span className="text-cyan-400 font-semibold">
                    Greenfield Investment with strong digital localization
                  </span>
                  . This allows us full control to tailor our technology,
                  branding, and operations specifically for the Sri Lankan
                  market, leveraging our existing IP and regional expertise
                  while building local partnerships.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-8 border border-zinc-500/20 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Diversification Strategy
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Beyond initial B2C flights/hotels and B2B HMS, our 3-5 year
                  roadmap includes vertical expansion into
                  <span className="text-green-400 font-semibold">
                    {" "}
                    bus/train bookings, local tours &amp; activities, and car
                    rentals
                  </span>
                  . Longer-term, we foresee horizontal diversification into
                  corporate travel management and travel insurance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact & Return Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Impact & Return: Beyond Profit
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Creating sustainable value for stakeholders and communities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-500/20 p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-blue-400">
                      {goal.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {goal.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {goal.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-700/30 to-zinc-900/30 rounded-3xl p-12 border border-zinc-500/20 backdrop-blur-sm"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Sustainability Goals (10-Year Horizon)
              </h3>
              <p className="text-gray-300 text-lg">
                Building a responsible and resilient ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {sustainabilityGoals.map((goal, index) => (
                <motion.div
                  key={goal.year}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <goal.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">
                    {goal.year}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{goal.goal}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Penetration Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Penetration & Future Outlook
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Strategic approach to capture market share and drive growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-8 border border-zinc-500/20 backdrop-blur-sm h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Campaign Strategies
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our multi-faceted approach combines aggressive{" "}
                  <span className="text-blue-400 font-semibold">
                    digital marketing (SEO/SEM, social media, influencer
                    partnerships)
                  </span>
                  with hyper-local content and promotions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  For B2B, direct sales and strategic alliances with hotel
                  associations will drive adoption and market penetration.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-8 border border-zinc-500/20 backdrop-blur-sm h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Growth Projections
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We anticipate rapid user acquisition in B2C and significant
                  B2B HMS adoption, fueled by the market&apos;s digital
                  readiness and our competitive advantages.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our model is built for scalability and strong unit economics,
                  ensuring sustainable growth and profitability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Shape the Digital Travel Future
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              GoZayaan is not just entering a new market; we are shaping its
              digital travel future. We invite you to partner with us on this
              exciting journey of innovation, growth, and sustainable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900/50 border-t border-zinc-500/20 py-16 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">GoZayaan</h3>
              <p className="text-gray-300 mb-4">
                Your Gateway to Digital Travel Growth
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact Investor Relations
              </h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>investors@gozaayaan.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+94 11 234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Company Website
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Press Kit
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Financial Reports
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-500/20 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 GoZayaan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
