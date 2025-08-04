import Link from "next/link";
import GoZayaanLogo from "../goZayaan/GoZayaanLogo";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 lg:px-12 relative z-50">
      <div className="flex items-center space-x-2">
        <GoZayaanLogo />
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className="text-white hover:text-blue-200 transition-colors drop-shadow-lg"
        >
          Home
        </Link>
        <Link
          href="/investors"
          className="text-white hover:text-blue-200 transition-colors drop-shadow-lg"
        >
          For Investors
        </Link>
        <Link
          href="/hotel-owners"
          className="text-white hover:text-blue-200 transition-colors drop-shadow-lg"
        >
          For Hotel Owners
        </Link>
        <Link
          href="/hotel"
          className="text-white hover:text-blue-200 transition-colors drop-shadow-lg"
        >
          Hotels
        </Link>
        <Link
          href="/flight"
          className="text-white hover:text-blue-200 transition-colors drop-shadow-lg"
        >
          Flights
        </Link>
      </div>
    </nav>
  );
}
