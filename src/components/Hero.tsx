import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#2B2D42] min-h-screen text-white">
      <div className="container ">
        <div className="flex flex-col md:flex-row items-center gap-12 pt-32 md:pt-20 sm:pt-0 pb-5 sm:pb-0">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kenny Almeida{" "}
              <span className="text-[#EF233C]">Digital Stack</span>
            </h1>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              <span>
                Estrutura técnica profissional com rastreamento oficial da Meta.
              </span>
            </h3>
            <p className="text-xl mb-8 text-gray-300">
              Implementação completa de <b>CAPI (Conversões via API)</b>,
              integração com a <b>API oficial do WhatsApp Business</b>, criação
              e verificação de <b>Business Manager com CPF ou CNPJ</b>,
              instalação de <b>eventos personalizados</b> e estrutura compatível
              com as diretrizes de tecnologia da Meta.
            </p>
            <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-[#EF233C] hover:bg-[#D90429] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                Quero minha estrutura profissional
              </Link>
            </div>
          </div>
          <div className="flex-1 pt-32 hidden md:block">
            <div className="relative w-full h-80 sm:h-[400px] lg:h-[600px] overflow-hidden rounded-7xl">
              <Image
                src="/hero-image.jpeg"
                alt="Kenny Almeida - Método Pay After Delivery"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain rounded-7xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
