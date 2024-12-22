import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { SessionProvider } from "next-auth/react"

import "./globals.css";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Example",
  description: "A battery-backed energy supplier",
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
        <div className="p-4 border-b-2 mx-auto">

          <NavigationMenu className="NavigationMenuRoot">
            <Image 
              src="c-logo.svg"
              width={100}
              height={300}
              alt="Picture of the author"
            />
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/dashboard">Dashboard</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

        </div>
        {children}
      </body>
    </html>
  );
}
