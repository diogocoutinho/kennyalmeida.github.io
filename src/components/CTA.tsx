"use client";

import { smoothScroll } from "@/utils/smoothScroll";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-[#2B2D42] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para Começar a Vender sem Estoque?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Aprenda o método Pay After Delivery e comece a vender produtos físicos
          sem investir em estoque. Com automação completa e suporte diário, você
          terá tudo o que precisa para construir um negócio online lucrativo.
        </p>
        <Link
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("#contact");
          }}
          className="inline-block bg-[#EF233C] hover:bg-[#D90429] text-white font-bold py-4 px-8 rounded-full transition-colors duration-300"
        >
          Quero Aprender o Método
        </Link>
      </div>
    </section>
  );
}
