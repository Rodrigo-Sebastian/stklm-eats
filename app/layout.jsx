import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stklm|EATS",
  description: "Stklm|EATS en food app, där du kan hitta dina favorit rätter en click ifrån din fötöljd",
  creator: "Rodrigo Sebastian",
  version: "1.0.0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
