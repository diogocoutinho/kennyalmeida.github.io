import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import dynamic from "next/dynamic";
import FacebookPixel from "@/components/FacebookPixel";
import ScrollTracker from "@/components/ScrollTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenny Almeida | Método Pay After Delivery",
  description:
    "Aprenda a vender produtos físicos sem estoque usando o método Pay After Delivery. Automação completa, tráfego pago e mentoria personalizada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <meta
        name="facebook-domain-verification"
        content="59tmj4fmcv9csexbw13i76n793u1gg"
      />
      <body className={inter.className}>
        <FacebookPixel />
        <ScrollTracker />
        <Navbar />
        {children}
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
