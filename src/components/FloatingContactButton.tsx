"use client";

import { useState } from "react";
import { FaWhatsapp, FaTelegram, FaTimes } from "react-icons/fa";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3">
          <a
            href="https://wa.me/5531992238899?text=Olá, gostaria de saber mais sobre os serviços que vocês oferecem."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center gap-2"
          >
            <FaWhatsapp className="text-xl" />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
          <a
            href="https://t.me/kenny_almeida?text=Olá, gostaria de saber mais sobre os serviços que vocês oferecem."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2"
          >
            <FaTelegram className="text-xl" />
            <span className="text-sm font-medium">Telegram</span>
          </a>
        </div>
      )}
      <button
        onClick={toggleMenu}
        className="bg-[#EF233C] text-white p-4 rounded-full shadow-lg hover:bg-[#D90429] transition-colors duration-300"
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaWhatsapp className="text-xl" />
        )}
      </button>
    </div>
  );
}
