"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/auctions", label: "Auctions" },
  { href: "/create-auction", label: "Create Auction" }
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white shadow mb-4">
      <div className="px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-amber-600">🐾 Pet Auction</h1>
        <div className="space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`${pathname === link.href ? "bg-amber-500 text-white" : "text-gray-600"} px-3 py-1 rounded hover:bg-amber-100 cursor-pointer`}>
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
