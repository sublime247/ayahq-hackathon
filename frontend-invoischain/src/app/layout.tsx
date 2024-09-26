import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css"; 
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import React from "react";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "InvoisChain",
  description: "Create, Manage and Track your Invoicing System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <div>
        {children}
        </div>
      </Providers>
      </body>
    </html>
  );
}
