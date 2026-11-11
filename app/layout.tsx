import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashber & Drifa | A Wedding Story",
  description:
    "A collection of moments, people and memories from Ashber and Drifa's wedding in Goa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
