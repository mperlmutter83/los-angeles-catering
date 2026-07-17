import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Los Angeles Catering & Full Bar | Experts in catering and bartending",
    template: "%s | Los Angeles Catering & Full Bar",
  },
  description: "Exquisite catering and bartending for unforgettable events. Experience the finest in culinary and mixology services tailored to elevate your special occasions in Los Angeles.",
  keywords: ["catering", "bartending", "Los Angeles", "events", "weddings", "corporate events", "private parties", "cocktails"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${openSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
