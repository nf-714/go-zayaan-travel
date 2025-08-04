"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import {
  CheckCircle,
  Info,
  Luggage,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
} from "lucide-react";
import type { Flight } from "../../types/flight";

interface FlightDetailsProps {
  flight: Flight;
  onBack: () => void;
  onBook: () => void;
}

export function FlightDetails({ flight, onBack, onBook }: FlightDetailsProps) {
  const departureDate = new Date(flight.departure.date);
  const arrivalDate = new Date(flight.arrival.date);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Button
        variant="outline"
        onClick={onBack}
        className="mb-6 bg-transparent"
      >
        ← Back to Results
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Flight Details</CardTitle>
              <CardDescription>
                {flight.airline} • {flight.flightNumber}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Flight Route & Times */}
              <div className="flex flex-col sm:flex-row items-center sm:justify-between">
                <div className="space-y-1 text-center mb-4 sm:mb-0">
                  <PlaneTakeoff className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">
                    {flight.departure.time}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {format(departureDate, "EEE, MMM d")}
                  </div>
                  <div className="text-lg font-medium">
                    {flight.departure.airport}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {flight.departure.city}
                  </div>
                  {flight.departure.terminal && (
                    <div className="text-xs text-muted-foreground">
                      Terminal {flight.departure.terminal}
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center flex-1 mx-4 mb-4 sm:mb-0">
                  <div className="text-sm text-muted-foreground">
                    {flight.duration}
                  </div>
                  <div className="flex items-center w-full my-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary relative">
                      <Plane className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-primary rotate-90" />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {flight.stops === 0
                      ? "Nonstop"
                      : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
                  </div>
                </div>

                <div className="space-y-1 text-center">
                  <PlaneLanding className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">
                    {flight.arrival.time}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {format(arrivalDate, "EEE, MMM d")}
                  </div>
                  <div className="text-lg font-medium">
                    {flight.arrival.airport}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {flight.arrival.city}
                  </div>
                  {flight.arrival.terminal && (
                    <div className="text-xs text-muted-foreground">
                      Terminal {flight.arrival.terminal}
                    </div>
                  )}
                </div>
              </div>

              <Separator />

              {/* Aircraft & Class */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium flex items-center mb-1">
                    <Info className="h-4 w-4 mr-2 text-muted-foreground" />
                    Aircraft
                  </Label>
                  <p className="text-base font-semibold">{flight.aircraft}</p>
                  <p className="text-sm text-muted-foreground">
                    Flight Duration: {flight.duration}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium flex items-center mb-1">
                    <CheckCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                    Class
                  </Label>
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    {flight.class}
                  </Badge>
                </div>
              </div>

              <Separator />

              {/* Baggage Allowance */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center mb-2">
                  <Luggage className="h-4 w-4 mr-2 text-muted-foreground" />
                  Baggage Allowance
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Carry-on:</span>{" "}
                    {flight.baggage.carryOn}
                  </div>
                  <div>
                    <span className="font-semibold">Checked:</span>{" "}
                    {flight.baggage.checked}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Additional baggage fees may apply. Please check airline
                  policy.
                </p>
              </div>

              <Separator />

              {/* Fare Benefits */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center mb-2">
                  <Info className="h-4 w-4 mr-2 text-muted-foreground" />
                  Fare Benefits ({flight.class})
                </Label>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {flight.fareBenefits.map((benefit, index) => (
                    <li key={index} className="text-muted-foreground">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Flight Price</span>
                  <span>LKR {flight.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>LKR 2,500</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>LKR {(flight.price + 2500).toLocaleString()}</span>
                </div>
              </div>

              <Button onClick={onBook} className="w-full" size="lg">
                Book This Flight
              </Button>

              <div className="text-xs text-muted-foreground text-center">
                Free cancellation within 24 hours
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
