import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Jungsu Lee",
  description: "Personal portfolio website created by Jungsu Lee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-light dark:bg-dark ${inter.className}`}>
          <Navbar />
          <div>{children}</div>
      </body>
    </html>
  );
}
