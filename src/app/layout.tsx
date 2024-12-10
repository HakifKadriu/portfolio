import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "./components/navigation";

export const metadata: Metadata = {
  title: "Kifa",
  description: "Hakif Kadriu's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="mainBodyInLayout">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
