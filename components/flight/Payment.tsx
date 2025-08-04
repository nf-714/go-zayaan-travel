"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard } from "lucide-react";
import type { Flight, PassengerDetails } from "../../types/flight";

interface PaymentProps {
  flight: Flight;
  passengerDetails: PassengerDetails;
  setPassengerDetails: (
    details: PassengerDetails | ((prev: PassengerDetails) => PassengerDetails)
  ) => void;
  onPassengerSubmit: () => void;
  onPayment: () => void;
  step: "passengers" | "payment";
}

export function Payment({
  flight,
  passengerDetails,
  setPassengerDetails,
  onPassengerSubmit,
  onPayment,
  step,
}: PaymentProps) {
  if (step === "passengers") {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Passenger Information</h2>
          <p className="text-muted-foreground">
            Please provide details for all passengers
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Passenger 1</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={passengerDetails.firstName}
                  onChange={(e) =>
                    setPassengerDetails((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  placeholder="Enter first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={passengerDetails.lastName}
                  onChange={(e) =>
                    setPassengerDetails((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={passengerDetails.email}
                onChange={(e) =>
                  setPassengerDetails((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                placeholder="Enter email address"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={passengerDetails.phone}
                onChange={(e) =>
                  setPassengerDetails((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                placeholder="Enter phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                value={passengerDetails.dateOfBirth}
                onChange={(e) =>
                  setPassengerDetails((prev) => ({
                    ...prev,
                    dateOfBirth: e.target.value,
                  }))
                }
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions and privacy policy
              </Label>
            </div>

            <Button onClick={onPassengerSubmit} className="w-full" size="lg">
              Continue to Payment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Payment Information</h2>
        <p className="text-muted-foreground">Secure payment processing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName">Name on Card</Label>
                <Input id="cardName" placeholder="Enter name as on card" />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Billing Address</Label>
                <Input placeholder="Street Address" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="City" />
                  <Input placeholder="ZIP Code" />
                </div>
              </div>

              <Button onClick={onPayment} className="w-full" size="lg">
                Complete Payment
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">{flight.airline}</div>
                <div className="text-sm text-muted-foreground">
                  {flight.flightNumber}
                </div>
                <div className="text-sm text-muted-foreground">
                  {flight.departure.city} → {flight.arrival.city}
                </div>
              </div>

              <Separator />

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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
