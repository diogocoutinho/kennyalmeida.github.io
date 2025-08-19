import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Helena Cerqueira",
    role: "Empreendedora Digital",
    content:
      "A automação completa do WhatsApp implementada pela equipe transformou minhas vendas. Hoje, todo o processo de atendimento e fechamento acontece sem intervenção manual, e meus resultados aumentaram significativamente.",
    image: "https://eu.ui-avatars.com/api/?name=Helena+Serqueira&size=250",
  },
  {
    name: "Gessica Oliveira",
    role: "Gestora de E-commerce",
    content:
      "A integração oficial com o WhatsApp Business fez toda diferença no meu atendimento. Consigo responder clientes com rapidez, automatizar mensagens e manter o relacionamento ativo sem esforço. Atendimento eficiente e clientes mais satisfeitos!",
    image: "https://eu.ui-avatars.com/api/?name=Gessica+Oliveira&size=250",
  },
  {
    name: "Jessica Stefanie",
    role: "Especialista em Tráfego Pago",
    content:
      "Com a Meta Conversion API e o Pixel configurados corretamente, finalmente consegui rastrear todos os eventos das minhas campanhas. O suporte na validação do rastreio foi essencial para aumentar o ROI dos meus anúncios.",
    image: "https://eu.ui-avatars.com/api/?name=Jessica+Stefanie&size=250",
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
            Depoimentos de quem já implementou os serviços e alcançou resultados reais
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
