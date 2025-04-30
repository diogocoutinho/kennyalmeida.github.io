import { FaRobot, FaChartLine, FaUsers, FaWhatsapp } from "react-icons/fa";

const services = [
  {
    icon: <FaRobot className="w-12 h-12 text-[#EF233C]" />,
    title: "Automação Completa",
    description:
      "Sistema automatizado de vendas com chatbots no WhatsApp, funis de venda e atendimento 24/7.",
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-[#EF233C]" />,
    title: "Tráfego Pago",
    description:
      "Estratégias de anúncios no Facebook e Instagram para captação constante de leads qualificados.",
  },
  {
    icon: <FaUsers className="w-12 h-12 text-[#EF233C]" />,
    title: "Mentoria Personalizada",
    description:
      "Acompanhamento prático e direto para implementar o método Pay After Delivery com sucesso.",
  },
  {
    icon: <FaWhatsapp className="w-12 h-12 text-[#EF233C]" />,
    title: "Grupos de Apoio",
    description:
      "Comunidade ativa no WhatsApp e Telegram com suporte diário e compartilhamento de oportunidades.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] mb-4">
            Como Funciona o Método
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um sistema completo para vender produtos físicos sem estoque e com
            automação
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#2B2D42] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
