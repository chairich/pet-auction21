import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import "../app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
