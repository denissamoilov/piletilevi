import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Piletilevi | Discounts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${montserrat.variable} text-base antialiased bg-neutral-100`}
      >
        {children}
      </body>
    </html>
  );
}
