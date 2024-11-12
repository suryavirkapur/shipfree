import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { SITE_DISCRIPTION, SITE_NAME } from "@/config";

const lexend = Lexend();

export const metadata: Metadata = {
  title: SITE_NAME + " | Home",
  description: SITE_DISCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>{children}</body>
    </html>
  );
}
