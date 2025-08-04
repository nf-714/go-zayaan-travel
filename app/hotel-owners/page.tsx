/* eslint-disable @next/next/no-img-element */
"use client";

import Navigation from "@/components/navigation/navigation.component";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle,
  Facebook,
  Globe,
  Linkedin,
  Mail,
  Phone,
  Play,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
  Twitter,
  Users,
} from "lucide-react";

export default function HotelOwnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-indigo-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#6464642e_1px,transparent_1px),linear-gradient(to_bottom,#6464642e_1px,transparent_1px)] bg-[size:20px_20px] "></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(170%_130%_at_50%_0%,rgba(255,255,255,0)_40%,rgba(0,0,255,1)_100%)]"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-zinc-100 text-blue-800 hover:bg-blue-200 px-4 py-2">
              🏨 Hotel Management System
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6 leading-tight">
              Modernize Your Hotel.
              <span className="text-blue-600 block">
                Effortlessly. Affordably.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Introducing GoZayaan Hotel OS – The Smart Management Solution for
              Every Sri Lankan Hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                Request FREE Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-5xl">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <img
                src="/hotel-owner-hero.webp"
                alt="GoZayaan Hotel Management System Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why GoZayaan Section */}
      <section className="py-20 bg-[#07079b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Why GoZayaan Hotel OS?
            </h2>
            <p className="text-xl text-gray-200">
              Tired of manual bookings, missed reservations, and complicated
              processes?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Boost Bookings, Instantly
              </h3>
              <p className="text-gray-600">
                Get a powerful online booking engine directly on your website.
                Seamlessly integrate with GoZayaan&apos;s popular B2C platform
                and other leading OTAs.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Manage with Ease
              </h3>
              <p className="text-gray-600">
                Control every aspect of your operations from one intuitive
                dashboard. Say goodbye to spreadsheets and confusion!
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Delight Your Guests
              </h3>
              <p className="text-gray-600">
                Provide smoother guest experiences with faster check-ins,
                personalized communication, and efficient service delivery.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Affordable for Every Property
              </h3>
              <p className="text-gray-600">
                Advanced technology shouldn&apos;t be reserved for large chains.
                Robust features at a price point designed for small and
                medium-sized hotels.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#07079b] to-blue-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Key Features You&apos;ll Love
            </h2>
            <p className="text-xl text-gray-300">
              Go beyond the basics with features crafted for your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">
                    Integrated Booking Engine
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Accept direct bookings from your website, commission-free.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">
                    Smart Channel Manager
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Update rates and availability across all major OTAs from a
                    single screen.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">
                    Automated Front Desk
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Simplify check-ins, check-outs, and guest profile
                    management.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">
                    Dynamic Pricing Tools
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Adjust rates intelligently based on demand and seasonality.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">
                    Housekeeping & Maintenance
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Assign tasks, track room status in real-time, and ensure
                    swift turnovers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Smartphone className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">
                    Guest Relationship Management
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Store guest preferences and communication history for
                    personalized service.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">
                    Comprehensive Reporting
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Gain insights into occupancy, revenue, and guest
                    demographics.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-gray-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">
                    Secure & Cloud-Based
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Access your system from anywhere, anytime, on any device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">For Hotels, By Experts</h2>
          <p className="text-xl leading-relaxed">
            GoZayaan brings years of expertise from powering seamless travel
            experiences across the region. We understand the unique challenges
            and opportunities for local businesses. Our dedicated local support
            team in Sri Lanka is ready to assist you every step of the way.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;Since implementing GoZayaan Hotel OS, our online bookings
                have increased by 30% and our operational efficiency has soared.
                It&apos;s truly a game-changer for small hotels like ours!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hotel Manager</p>
                  <p className="text-gray-600 text-sm">Colombo, Sri Lanka</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;The ease of use and the affordable pricing of GoZayaan
                Hotel OS made it the perfect choice for our guesthouse. The
                support team is fantastic!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Guesthouse Owner
                  </p>
                  <p className="text-gray-600 text-sm">Galle, Sri Lanka</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Hotel?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Unlock the power of efficient management and increased bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              Request a FREE Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              View Pricing Plans
              <span className="ml-2 text-blue-600">
                Starting from just LKR 2,500/month!
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GoZayaan Hotel OS</h3>
              <p className="text-gray-400">Empowering Sri Lankan Hospitality</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+94 11 234 5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>hotels@gozaayaan.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  GoZayaan B2C
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Support
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 GoZayaan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
