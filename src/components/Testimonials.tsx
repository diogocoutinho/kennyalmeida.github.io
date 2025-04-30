import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empreendedor Digital",
    content:
      "Em apenas 30 dias implementando o método Pay After Delivery, consegui minha primeira venda e hoje tenho um negócio totalmente automatizado. O suporte da mentoria foi fundamental!",
    image: "https://eu.ui-avatars.com/api/?name=Carlos+Silva&size=250",
  },
  {
    name: "Ana Oliveira",
    role: "Mentorada",
    content:
      "A automação no WhatsApp mudou completamente meu negócio. Agora consigo atender dezenas de clientes por dia sem precisar ficar online 24 horas. Recomendo muito!",
    image: "https://eu.ui-avatars.com/api/?name=Ana+Oliveira&size=250",
  },
  {
    name: "Roberto Santos",
    role: "Aluno da Mentoria",
    content:
      "O método é revolucionário! Sem precisar investir em estoque, consegui montar um negócio lucrativo em poucas semanas. A estrutura de tráfego pago é incrível!",
    image: "https://eu.ui-avatars.com/api/?name=Roberto+Santos&size=250",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#2B2D42] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados Reais
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Depoimentos de quem já implementou o método Pay After Delivery
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg relative"
            >
              <FaQuoteLeft className="text-[#EF233C] text-4xl mb-6" />
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
