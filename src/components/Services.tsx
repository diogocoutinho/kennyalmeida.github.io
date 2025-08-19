import {
  FaRobot,
  FaChartLine,
  FaUsers,
  FaWhatsapp,
  FaFacebook,
  FaBusinessTime,
  FaCheckCircle,
} from "react-icons/fa";

const marketingServices = [
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
    title: "Eventos Personalizados",
    description:
      "Configuração de eventos personalizados com rastreamento em tempo real",
  },
  {
    icon: <FaWhatsapp className="w-12 h-12 text-[#EF233C]" />,
    title: "Grupos de Apoio",
    description:
      "Comunidade ativa no WhatsApp e Telegram com suporte diário e compartilhamento de oportunidades.",
  },
];

const infraServices = [
  {
    icon: <FaFacebook className="w-12 h-12 text-[#EF2330]" />,
    title: "Meta Conversion API",
    description: "Instalação e validação da CAPI (Meta Conversion API)",
  },
  {
    icon: <FaWhatsapp className="w-12 h-12 text-[#EF2330]" />,
    title: "WhatsApp Business",
    description:
      "Integração com a API Oficial do WhatsApp Business (Cloud API)",
  },
  {
    icon: <FaBusinessTime className="w-12 h-12 text-[#EF2332]" />,
    title: "Business Manager",
    description: "Criação e verificação de Business Manager (CPF ou CNPJ)",
  },
  {
    icon: <FaFacebook className="w-12 h-12 text-[#EF233C]" />,
    title: "Uso correto e validado do Pixel da Meta",
    description:
      "Garantia de implementação correta e validação do Pixel para rastreamento eficiente.",
  },
  {
    icon: <FaRobot className="w-12 h-12 text-[#EF233C]" />,
    title:
      "Estrutura baseada nas diretrizes da TEC Provider (Meta Technology Partner)",
    description:
      "Configuração alinhada às melhores práticas recomendadas pela TEC Provider.",
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-[#EF233C]" />,
    title: "Conformidade com as políticas de rastreamento da Meta",
    description:
      "Estrutura que respeita e segue as políticas oficiais de rastreamento da Meta.",
  },
  {
    icon: <FaUsers className="w-12 h-12 text-[#EF233C]" />,
    title: "Suporte técnico direto para ativação da estrutura",
    description:
      "Assistência especializada para garantir o funcionamento e ativação correta da estrutura.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-10 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] mb-4">
            O que você recebe com a estrutura completa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A Meta entrega quando reconhece estrutura real. E é isso que você
            recebe aqui: rastreio validado, legítimo e com entrega progressiva.
          </p>
        </div>
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md border border-gray-100 p-8 rounded-3xl shadow-sm animate-fadeIn hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#2B2D42] to-[#EF233C] mb-8 text-center">
              Marketing & Automação
            </h3>
            <ul className="mt-4 space-y-4">
              {marketingServices.map((service, idx) => (
                <li
                  key={idx}
                  className={`flex items-start space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-opacity delay-${
                    idx * 100
                  }`}
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>{service.title}</strong>: {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/90 backdrop-blur-md border border-gray-100 p-8 rounded-3xl shadow-sm animate-fadeIn hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#2B2D42] to-[#EF233C] mb-8 text-center">
              Infraestrutura & Conformidade Meta
            </h3>
            <ul className="mt-4 space-y-4">
              {infraServices.map((service, idx) => (
                <li
                  key={idx}
                  className={`flex items-start space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-opacity delay-${
                    idx * 100
                  }`}
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>{service.title}</strong>: {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
