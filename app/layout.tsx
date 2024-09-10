import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const aeonik = localFont({
  src: "./fonts/AeonikTRIAL-Regular.otf", // Path to your Aeonik font file
  variable: "--font-aeonik",  // Custom CSS variable for this font
  weight: "100 500 900",              // Specific weight you want (500 in this case)
});

export const metadata: Metadata = {
  title: "React List | Andrew MONDOR",
  description: "Collection of mini react.js projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aeonik.variable} antialiased text-deepgray` }
      >
        {children}
      </body>
    </html>
  );
}
