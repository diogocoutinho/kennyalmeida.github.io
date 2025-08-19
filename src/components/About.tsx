import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white w-full">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-2">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="relative w-full h-80 sm:h-[800px] lg:h-[900px] overflow-hidden rounded-7xl">
            <Image
              src="/hero-image.jpeg"
              overrideSrc="/about-image.jpeg"
              alt="Kenny Almeida - Método Pay After Delivery"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain rounded-7xl"
              priority
            />
          </div>
          {/* Text Column */}
          <div className="flex flex-col justify-center w-full max-w-xl mx-auto lg:mx-0 space-y-8 p-10">
            <span className="text-sm font-semibold tracking-wide text-[#EF233C] uppercase block text-center lg:text-left">
              Sobre mim
            </span>
            <h2 className="text-3xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2B2D42] to-[#EF233C] leading-tight text-center lg:text-left">
              Não vendo promessas. <br /> Entrego execução.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Sou executor técnico certificado, com histórico de operação limpa,
              BM verificada, estrutura rastreável e atuação em conformidade com
              o padrão TEC Provider.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Atendo afiliados e empresas que desejam construir uma base sólida
              de vendas com rastreamento legítimo, usando apenas as tecnologias
              oficiais da Meta.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <h3 className="text-4xl font-extrabold text-[#EF233C]">24/7</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Aqui você não compra curso.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <h3 className="text-4xl font-extrabold text-[#EF233C]">100%</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Execução técnica comprovada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
