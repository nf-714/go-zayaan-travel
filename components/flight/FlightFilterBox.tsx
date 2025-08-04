"use client";

import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar, MapPin, Plane, Users } from "lucide-react";
import type { City, SearchParams } from "../../types/flight";

interface FlightFilterBoxProps {
  searchParams: SearchParams;
  setSearchParams: (
    params: SearchParams | ((prev: SearchParams) => SearchParams)
  ) => void;
  onSearch: () => void;
  cities: City[];
}

export function FlightFilterBox({
  searchParams,
  setSearchParams,
  onSearch,
  cities,
}: FlightFilterBoxProps) {
  return (
    <div className="bg-stone-900/20 backdrop-blur-2xl rounded-2xl p-6 w-full max-w-5xl mx-auto shadow-2xl relative z-20 border border-white/10">
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        {/* From */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-semibold text-white mb-2">
            From
          </label>
          <Select
            value={searchParams.from}
            onValueChange={(value) =>
              setSearchParams((prev) => ({ ...prev, from: value }))
            }
          >
            <SelectTrigger className="w-full border-white/20 text-white bg-white/10 backdrop-blur-md">
              <Plane className="w-4 h-4 mr-2 text-stone-400" />
              <SelectValue placeholder="Select departure city" />
            </SelectTrigger>
            <SelectContent className="bg-stone-100 border-white/20">
              {cities.map((city) => (
                <SelectItem key={city.code} value={city.code}>
                  {city.name} ({city.code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* To */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-semibold text-white mb-2">
            To
          </label>
          <Select
            value={searchParams.to}
            onValueChange={(value) =>
              setSearchParams((prev) => ({ ...prev, to: value }))
            }
          >
            <SelectTrigger className="w-full border-white/20 text-white bg-white/10 backdrop-blur-md">
              <MapPin className="w-4 h-4 mr-2 text-stone-400" />
              <SelectValue placeholder="Select destination city" />
            </SelectTrigger>
            <SelectContent className="bg-stone-100 border-white/20">
              {cities
                .filter((city) => city.code !== searchParams.from)
                .map((city) => (
                  <SelectItem key={city.code} value={city.code}>
                    {city.name} ({city.code})
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-semibold text-white mb-2">
            Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal border-white/20 text-white bg-white/10 backdrop-blur-md hover:bg-white/20"
              >
                <Calendar className="mr-2 h-4 w-4 text-stone-400" />
                {searchParams.departDate ? (
                  format(searchParams.departDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-stone-100 border-white/20">
              <CalendarComponent
                mode="single"
                selected={searchParams.departDate}
                onSelect={(date) =>
                  setSearchParams((prev) => ({
                    ...prev,
                    departDate: date,
                  }))
                }
                disabled={(date) =>
                  date < new Date() || date < new Date("1900-01-01")
                }
                initialFocus
                className="bg-stone-100"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* People */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-semibold text-white mb-2">
            Passengers
          </label>
          <Select
            value={searchParams.passengers.toString()}
            onValueChange={(value) =>
              setSearchParams((prev) => ({
                ...prev,
                passengers: Number.parseInt(value),
              }))
            }
          >
            <SelectTrigger className="w-full border-white/20 text-white bg-white/10 backdrop-blur-md">
              <Users className="w-4 h-4 mr-2 text-stone-400" />
              <SelectValue placeholder="Select passengers" />
            </SelectTrigger>
            <SelectContent className="bg-stone-100 border-white/20">
              <SelectItem value="1">1 Passenger</SelectItem>
              <SelectItem value="2">2 Passengers</SelectItem>
              <SelectItem value="3">3 Passengers</SelectItem>
              <SelectItem value="4">4 Passengers</SelectItem>
              <SelectItem value="5">5 Passengers</SelectItem>
              <SelectItem value="6">6 Passengers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <button
          onClick={onSearch}
          className="w-full md:w-auto bg-white/20 backdrop-blur-md text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors flex-shrink-0 border border-white/20"
        >
          Search Flights
        </button>
      </div>
    </div>
  );
}
