import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="relative w-full h-[400px]">
              <Image
                src="/about-image.jpeg"
                alt="Kenny Almeida - Método Pay After Delivery"
                width={350}
                height={350}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] mb-6">
              O Método Pay After Delivery
            </h2>
            <p className="text-gray-600 mb-6">
              Desenvolvi um método completo que permite vender produtos físicos
              sem a necessidade de investir em estoque ou correr riscos
              financeiros. Com o método Pay After Delivery, você vende primeiro,
              e o cliente paga apenas na entrega do produto, reduzindo objeções
              e ganhando mais credibilidade e confiança do consumidor final ou
              cliente.
            </p>
            <p className="text-gray-600 mb-6">
              Através de estratégias avançadas de marketing digital e automação,
              criei um modelo de negócio que funciona 24 horas por dia, com o
              mínimo de esforço manual. Meu objetivo é ajudar empreendedores a
              construir um negócio online escalável e lucrativo.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-[#EF233C] mb-2">24/7</h3>
                <p className="text-gray-600">Vendas Automatizadas</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-[#EF233C] mb-2">0</h3>
                <p className="text-gray-600">Investimento em Estoque</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
