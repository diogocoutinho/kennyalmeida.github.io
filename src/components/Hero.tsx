"use client";

import Image from "next/image";
import { smoothScroll } from "@/utils/smoothScroll";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#2B2D42] text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Método Pay After Delivery:{" "}
              <span className="text-[#EF233C]">Vendas no Automático</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Aprenda a vender produtos físicos sem estoque, sem riscos
              financeiros e com automação completa. Transforme sua vida
              financeira com estratégias reais de marketing digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("#contact");
                }}
                className="bg-[#EF233C] hover:bg-[#D90429] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                Quero Começar Agora
              </Link>
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("#services");
                }}
                className="border-2 border-white hover:bg-white hover:text-[#2B2D42] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                Conhecer a Mentoria
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-[400px]">
              <Image
                src="/hero-image.jpeg"
                alt="Kenny Almeida - Método Pay After Delivery"
                width={372}
                height={372}
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
