import { Inter } from "next/font/google";
import "./globals.css";
import Orb from "./(components)/Orb/Orb";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by AS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Orb />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
