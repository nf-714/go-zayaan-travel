export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: {
    airport: string;
    city: string;
    time: string;
    date: string; // YYYY-MM-DD
    terminal?: string;
  };
  arrival: {
    airport: string;
    city: string;
    time: string;
    date: string; // YYYY-MM-DD
    terminal?: string;
  };
  duration: string;
  price: number;
  stops: number;
  aircraft: string;
  class: "Economy" | "Premium" | "Business" | "Luxury";
  tripType: string;
  baggage: {
    carryOn: string;
    checked: string;
  };
  fareBenefits: string[];
  features: {
    wifi: boolean;
    entertainment: boolean;
    meals: boolean;
    power: boolean;
  };
  freeCancellation?: boolean;
}

export interface SearchParams {
  from: string;
  to: string;
  departDate: Date | undefined;
  returnDate: Date | undefined;
  passengers: number;
  tripType: "roundtrip" | "oneway";
  departure: string;
}

export interface PassengerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

export interface City {
  code: string;
  name: string;
  airport: string;
}
