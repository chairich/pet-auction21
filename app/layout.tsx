import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Pet Auction",
  description: "Bid on pets in real-time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
