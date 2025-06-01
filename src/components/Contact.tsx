"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { trackFormSubmit, trackContact } = useFacebookPixel();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      formRef.current.reset();
      trackFormSubmit("contact_form");
      trackContact("email");
    } catch (err) {
      console.log(err);
      setError(
        "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
      );
      console.error("Error sending email:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vamos conversar sobre como posso ajudar seu negócio a crescer
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EF233C] focus:ring-2 focus:ring-[#EF233C] focus:ring-opacity-50"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EF233C] focus:ring-2 focus:ring-[#EF233C] focus:ring-opacity-50"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EF233C] focus:ring-2 focus:ring-[#EF233C] focus:ring-opacity-50"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EF233C] focus:ring-2 focus:ring-[#EF233C] focus:ring-opacity-50"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && (
                <p className="text-green-500 text-sm">
                  Mensagem enviada com sucesso!
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#EF233C] hover:bg-[#D90429] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#2B2D42] mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaEnvelope className="text-[#EF233C] text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">contato@kennyalmeida.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-[#EF233C] text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800">Telefone</h4>
                    <p className="text-gray-600">(31) 99223-8899</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-[#EF233C] text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800">Localização</h4>
                    <p className="text-gray-600">Ibirité, MG - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
