import React from "react";

export const metadata = {
  title: "Termos de Uso | Kenny Almeida",
  description:
    "Termos de uso do site Kenny Almeida - Método Pay After Delivery",
};

export default function TermsOfUse() {
  return (
    <div className="mx-auto my-24 px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Termos de Serviço</h1>

      <div className="space-y-6">
        <p className="text-gray-600 mb-8">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <p className="text-gray-700 mb-6">
          Ao acessar ou utilizar nossos serviços, você concorda com os termos
          abaixo:
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Serviços Prestados</h2>
          <p className="text-gray-700">
            Oferecemos conteúdos informativos, consultorias e soluções de vendas
            e marketing digital, podendo incluir o envio de mensagens, materiais
            e suporte por WhatsApp ou outras plataformas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Uso Permitido</h2>
          <p className="text-gray-700">
            Você concorda em utilizar nossos serviços de forma legal, ética e
            respeitosa. É proibido reproduzir, distribuir ou revender qualquer
            conteúdo sem autorização.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Responsabilidade</h2>
          <p className="text-gray-700">
            Nos esforçamos para oferecer informações corretas e seguras, mas não
            garantimos resultados específicos. O uso das estratégias é de sua
            responsabilidade.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Alterações</h2>
          <p className="text-gray-700">
            Podemos atualizar estes termos a qualquer momento. Recomenda-se
            revisar periodicamente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Contato</h2>
          <p className="text-gray-700">
            Em caso de dúvidas, fale conosco pelo e-mail:{" "}
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
