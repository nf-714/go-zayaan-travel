"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { useState } from "react";
import HeroVideo from "../../public/video/flight-hero.mp4";

// Import components
import { FlightCard } from "@/components/flight/FlightCard";
import { FlightDetails } from "@/components/flight/FlightDetails";
import { FlightFilterBox } from "@/components/flight/FlightFilterBox"; // Import FlightFilterBox
import { Payment } from "@/components/flight/Payment";

// Import types and data
import Navigation from "@/components/navigation/navigation.component";
import { sriLankanCities, sriLankanFlights } from "@/data/flights";
import type { Flight, PassengerDetails } from "@/types/flight";

export default function SriLankanFlightBooking() {
  const [currentStep, setCurrentStep] = useState<
    "search" | "details" | "passengers" | "payment" | "confirmation"
  >("search");

  /* @typescript-eslint/no-explicit-any */
  const [searchParams, setSearchParams] = useState<any>({
    from: "",
    to: "",
    departDate: undefined,
    returnDate: undefined,
    passengers: 1,
    tripType: "oneway",
  });
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [passengerDetails, setPassengerDetails] = useState<PassengerDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  });

  const handleSearch = () => {
    if (searchParams.from && searchParams.to && searchParams.departDate) {
      document
        .getElementById("flight-results")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFlightSelect = (flight: Flight) => {
    setSelectedFlight(flight);
    setCurrentStep("details");
  };

  const handleBackToSearch = () => {
    setCurrentStep("search");
    setSelectedFlight(null); // Clear selected flight when going back to search
  };

  const handleBookFlight = () => {
    setCurrentStep("passengers");
  };

  const handlePassengerSubmit = () => {
    setCurrentStep("payment");
  };

  const handlePayment = () => {
    setCurrentStep("confirmation");
  };

  const renderFlightResults = () => (
    <div
      id="flight-results"
      className="min-h-screen bg-gradient-to-br from-stone-100 to-stone-200 py-8"
    >
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-700">
              {searchParams.from && searchParams.to
                ? "Available Flights"
                : "All Available Flights"}
            </h2>
            <p className="text-stone-700 text-lg">
              {searchParams.from && searchParams.to
                ? `${
                    sriLankanCities.find((c) => c.code === searchParams.from)
                      ?.name
                  } → ${
                    sriLankanCities.find((c) => c.code === searchParams.to)
                      ?.name
                  } • ${searchParams.passengers} passenger${
                    searchParams.passengers > 1 ? "s" : ""
                  }`
                : "Discover domestic flights across beautiful Sri Lanka"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {(searchParams.from && searchParams.to
            ? sriLankanFlights.filter(
                (flight) =>
                  flight.departure.airport === searchParams.from &&
                  flight.arrival.airport === searchParams.to
              )
            : sriLankanFlights
          ).map((flight) => (
            <FlightCard
              key={flight.id}
              flight={flight}
              onSelect={handleFlightSelect}
            />
          ))}
        </div>

        {searchParams.from &&
          searchParams.to &&
          sriLankanFlights.filter(
            (flight) =>
              flight.departure.airport === searchParams.from &&
              flight.arrival.airport === searchParams.to
          ).length === 0 && (
            <div className="text-center py-12">
              <div className="text-stone-400 text-lg">
                No flights found for this route.
              </div>
              <div className="text-stone-500 text-sm mt-2">
                Please try a different destination.
              </div>
            </div>
          )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-100">
      <main>
        {/* Render FlightFilterBox directly below HeroSection */}

        <div className="min-h-screen bg-zinc-150 px-3">
          {/* Hero Section */}
          <div className="relative h-[98vh] overflow-hidden  rounded-b-3xl">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.8)" }}
              >
                <source src={HeroVideo} type="video/mp4" />
              </video>
              {/* Gradient overlay for image blending */}

              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] "></div>
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(145%_130%_at_100%_75%,rgba(0,15,251,0.5)_40%,rgba(0,0,0,0)_100%)]"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 min-h-screen">
              <Navigation />
              {/* Hero Content */}
              <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
                <h1 className="text-white text-lg font-light">
                  Welcome to our GoZayaan - Where unforgettable experience
                  awaits!
                </h1>

                <h1 className="text-4xl md:text-6xl lg:text-9xl font-light text-white mb-8 drop-shadow-2xl">
                  Find Flights That Fit Your{" "}
                  <span className="font-extrabold italic">Budget</span>
                </h1>

                <p className="mb-4 text-lg md:text-xl text-center text-gray-400">
                  Discover Sri Lanka like never before — from hidden gems to
                  top-rated stays, all in one seamless platform built for
                  locals.
                </p>

                {/* Search Form */}
                <div className="flex flex-col justify-center items-center md:flex-row gap-4 mb-8 w-full max-w-4xl">
                  <FlightFilterBox
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    onSearch={handleSearch}
                    cities={sriLankanCities}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(200%_105%_at_50%_100%,rgba(255,255,255,0)_40%,rgba(0,0,255,1)_100%)]"></div> */}
        </div>

        {renderFlightResults()}

        {/* Flight Details Modal */}
        <Dialog
          open={currentStep === "details"}
          onOpenChange={(open) => !open && handleBackToSearch()}
        >
          <DialogContent className="w-full max-w-full sm:max-w-[800px] h-full sm:h-auto overflow-y-auto p-0 bg-stone-100 text-zinc-800">
            {selectedFlight && (
              <FlightDetails
                flight={selectedFlight}
                onBack={handleBackToSearch}
                onBook={handleBookFlight}
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Passenger & Payment Modal */}
        <Dialog
          open={currentStep === "passengers" || currentStep === "payment"}
          onOpenChange={(open) => !open && setCurrentStep("details")} // Go back to flight details if closed
        >
          <DialogContent className="w-full max-w-full sm:max-w-[600px] h-full sm:h-auto overflow-y-auto p-0 bg-stone-100 text-zinc-800">
            {selectedFlight && (
              <Payment
                flight={selectedFlight}
                passengerDetails={passengerDetails}
                setPassengerDetails={setPassengerDetails}
                onPassengerSubmit={handlePassengerSubmit}
                onPayment={handlePayment}
                step={currentStep === "passengers" ? "passengers" : "payment"}
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Confirmation Modal */}
        <Dialog
          open={currentStep === "confirmation"}
          onOpenChange={(open) => !open && handleBackToSearch()}
        >
          <DialogContent className="w-full max-w-full sm:max-w-[500px] h-full sm:h-auto overflow-y-auto p-0 bg-stone-100 text-zinc-800">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="sr-only">Booking Confirmed</DialogTitle>
              <DialogDescription className="sr-only">
                Your flight has been successfully booked
              </DialogDescription>
            </DialogHeader>
            <div className="p-6 pt-0 text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Booking Confirmed!</h2>
                <p className="text-stone-300">
                  Your flight has been successfully booked
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Booking Details</CardTitle>
                  <CardDescription>
                    Confirmation Number: #SL123456789
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedFlight && (
                    <>
                      <div className="text-left space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Flight</span>
                          <span>
                            {selectedFlight.airline}{" "}
                            {selectedFlight.flightNumber}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Route</span>
                          <span>
                            {selectedFlight.departure.city} →{" "}
                            {selectedFlight.arrival.city}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Date</span>
                          <span>{selectedFlight.departure.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Time</span>
                          <span>
                            {selectedFlight.departure.time} -{" "}
                            {selectedFlight.arrival.time}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Passenger</span>
                          <span>
                            {passengerDetails.firstName}{" "}
                            {passengerDetails.lastName}
                          </span>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex justify-between font-bold">
                        <span>Total Paid</span>
                        <span>
                          LKR {(selectedFlight.price + 2500).toLocaleString()}
                        </span>
                      </div>
                    </>
                  )}

                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      A confirmation email has been sent to{" "}
                      {passengerDetails.email}
                    </p>
                    <Button onClick={handleBackToSearch} className="w-full">
                      Book Another Flight
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
