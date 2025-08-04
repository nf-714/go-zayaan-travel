"use client";

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import { format } from "date-fns";
import { Briefcase, CalendarDays, Clock, Plane, Tag } from "lucide-react";
import type { Flight } from "../../types/flight";

interface FlightCardProps {
  flight: Flight;
  onSelect: (flight: Flight) => void;
}

export function FlightCard({ flight, onSelect }: FlightCardProps) {
  return (
    <div
      className="relative bg-white rounded-xl p-6 shadow-lg border border-stone-200 cursor-pointer hover:shadow-xl hover:border-stone-300 transition-all duration-300 overflow-hidden"
      onClick={() => onSelect(flight)}
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Airline and Flight Number */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {/* Placeholder for Airline Logo */}
            <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 font-semibold text-xs">
              {flight.airline.charAt(0)}
            </div>
            <span className="text-lg font-semibold text-stone-800">
              {flight.airline}
            </span>
          </div>
          <span className="text-sm text-stone-500">{flight.flightNumber}</span>
        </div>

        {/* Flight Times and Route */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-4">
          <div className="text-center sm:text-left flex-1 mb-4 sm:mb-0">
            <div className="text-2xl font-bold text-stone-900">
              {flight.departure.time}
            </div>
            <div className="text-sm text-stone-600">
              {flight.departure.airport}
            </div>
            <div className="text-xs text-stone-500">
              {flight.departure.city}
            </div>
          </div>

          <div className="flex flex-col items-center mx-4 flex-shrink-0 mb-4 sm:mb-0">
            <div className="text-sm text-stone-500 mb-1">{flight.duration}</div>
            <div className="flex items-center w-24">
              <div className="w-2 h-2 rounded-full bg-stone-400"></div>
              <div className="flex-1 h-px bg-stone-300 relative">
                <Plane className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 rotate-90" />
              </div>
              <div className="w-2 h-2 rounded-full bg-stone-400"></div>
            </div>
            <div className="text-xs text-stone-500 mt-1">
              {flight.stops === 0
                ? "Nonstop"
                : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
            </div>
          </div>

          <div className="text-center sm:text-right flex-1">
            <div className="text-2xl font-bold text-stone-900">
              {flight.arrival.time}
            </div>
            <div className="text-sm text-stone-600">
              {flight.arrival.airport}
            </div>
            <div className="text-xs text-stone-500">{flight.arrival.city}</div>
          </div>
        </div>

        <Separator className="my-4 bg-stone-200" />

        {/* Key Details: Date, Class, Trip Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm flex-grow">
          <div className="flex items-center space-x-2">
            <CalendarDays className="h-4 w-4 text-stone-500" />
            <span className="text-stone-600 font-medium">
              {format(new Date(flight.departure.date), "MMM dd, yyyy")}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Briefcase className="h-4 w-4 text-stone-500" />
            <span className="text-stone-600 font-medium">{flight.class}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Tag className="h-4 w-4 text-stone-500" />
            <span className="text-stone-600 font-medium">
              {flight.tripType}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-stone-500" />
            <span className="text-stone-600 font-medium">
              {flight.duration}
            </span>
          </div>
        </div>

        <Separator className="my-4 bg-stone-200" />

        {/* Price and Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-auto space-y-3 sm:space-y-0">
          <div className="text-3xl font-bold text-stone-900">
            LKR {flight.price.toLocaleString()}
          </div>
          <Button className="bg-stone-800 text-white px-6 py-2 rounded-full font-medium hover:bg-stone-700 transition-colors w-full sm:w-auto">
            View deal
          </Button>
        </div>
      </div>
    </div>
  );
}
