import React from "react";

export const metadata = {
  title: "Política de Privacidade | Kenny Almeida",
  description:
    "Política de privacidade do site Kenny Almeida - Método Pay After Delivery",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto my-24 px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>

      <div className="space-y-6">
        <p className="text-gray-600 mb-8">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <p className="text-gray-700 mb-6">
          Esta Política de Privacidade descreve como coletamos, usamos e
          protegemos suas informações pessoais ao utilizar nossos serviços e
          canais de comunicação, incluindo WhatsApp, anúncios em redes sociais e
          formulários.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Coleta de Informações</h2>
          <p className="text-gray-700">
            Coletamos dados como nome, e-mail, telefone, localização e
            preferências, com o objetivo de fornecer atendimento personalizado e
            direcionado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Uso das Informações</h2>
          <p className="text-gray-700">
            Usamos as informações para entrar em contato com você, prestar
            suporte, enviar ofertas e melhorar nossa comunicação com base em
            seus interesses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Compartilhamento</h2>
          <p className="text-gray-700">
            Não vendemos ou compartilhamos seus dados com terceiros, exceto
            quando necessário para processar pagamentos, entregas ou integrações
            com plataformas confiáveis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Segurança</h2>
          <p className="text-gray-700">
            Adotamos medidas técnicas e organizacionais para proteger seus dados
            contra acessos não autorizados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Seus Direitos</h2>
          <p className="text-gray-700">
            Você pode solicitar a atualização, correção ou exclusão de seus
            dados a qualquer momento entrando em contato conosco.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p className="text-gray-700">
            Em caso de dúvidas sobre esta política, envie um e-mail para:{" "}
            <a
              href="mailto:contato@kennygalmeida.com.br"
              className="text-blue-600 hover:underline"
            >
              contato@kennygalmeida.com.br
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
