import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Swastik Clinic",
  description: "Healthcare Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-16">{/* pt-16 for navbar space */} 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
