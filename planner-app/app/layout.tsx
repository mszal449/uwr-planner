import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components";

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
      <AuthProvider>
        <body className={inter.className}>
            <div>
              {children}
            </div>
        </body>
      </AuthProvider>
    </html>
  );
}
