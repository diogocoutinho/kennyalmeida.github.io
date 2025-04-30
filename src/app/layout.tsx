import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

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
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
