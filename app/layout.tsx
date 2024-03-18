import type { Metadata } from "next";
import { Roboto_Mono, Xanh_Mono, Major_Mono_Display } from "next/font/google";
import "./globals.css";

const oxygen = Roboto_Mono({ subsets: ["latin"], weight: ["100", "400", "700"]})
const carbon = Xanh_Mono({ subsets: ["latin"], weight: ["400"]})
const hydrogen = Major_Mono_Display({ subsets: ["latin"], weight: ["400"]})

export const metadata: Metadata = {
  title: "Anurag Angal",
  description: "Sanctum Sanctorum of Anurag Angal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oxygen.className} bg-[#0f0f0f] text-[#eeeeee]`}>{children}</body>
    </html>
  );
}
