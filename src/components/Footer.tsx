"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2B2D42] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-between itens-center text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm my-2">
              © {new Date().getFullYear()} Kenny Almeida – Digital Stack.
            </p>
            <p className="text-sm my-2">Todos os direitos reservados.</p>
            <p className="text-sm my-2">CNPJ: 61.498.348/0001-45</p>
          </div>
          <div className="flex flex-col justify-between itens-center text-center md:text-right">
            <div className="flex flex-col justify-between itens-center text-right md:text-right mt-2 space-x-4">
              <Link
                href="/politica-de-privacidade"
                className="text-sm text-[#EF233C] hover:text-white transition-colors duration-300 my-4"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="text-sm text-[#EF233C] hover:text-white transition-colors duration-300"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around itens-center my-2 text-center md:text-right">
          <p className="text-sm my-2">
            Desenvolvido por{" "}
            <Link
              href="https://easydevsolucoes.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EF233C] hover:text-[#D90429] transition-colors duration-300"
            >
              EASYDEV Soluções
            </Link>{" "}
            através de{" "}
            <Link
              href="https://diogocoutinho.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EF233C] hover:text-[#D90429] transition-colors duration-300"
            >
              Diogo Coutinho
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
