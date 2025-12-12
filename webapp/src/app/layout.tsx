import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";

const devanagari = Baloo_2({
  subsets: ["devanagari", "latin"],
  variable: "--font-devanagari",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "डायनासोर की छाँव",
  description:
    "दयालु डायनासोर और किसान के फल से उगे वृक्ष की मनमोहक कहानी का दृश्यात्मक अनुभव।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body
        className={`${devanagari.variable} ${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
