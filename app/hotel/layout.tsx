import Navigation from "@/components/navigation/navigation.component";

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-100">
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
