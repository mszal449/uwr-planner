import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UWR Planner",
  description: "Planer zajęć dla studentów Uniwersytetu Wrocławskiego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar/>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
