"use client";

import AboutSectionComponent from "@/components/about-section/about-section.component";
import BookingComponent from "@/components/booking-section/booking.component";
import DiscoverySectionComponent from "@/components/discovery-section/discovery-section.component";
import FooterComponent from "@/components/footer.component";
import HeroSectionComponent from "@/components/hero-section/hero-section.component";
import HotelSectionComponent from "@/components/hotel-section/hotel-section.component";
import ServiceComponent from "@/components/service-section/service-section.component";

export default function HomePage() {
  return (
    <>
      <HeroSectionComponent />
      <DiscoverySectionComponent />
      <AboutSectionComponent />
      <ServiceComponent />
      <BookingComponent />
      <HotelSectionComponent />
      <FooterComponent />
    </>
  );
}
