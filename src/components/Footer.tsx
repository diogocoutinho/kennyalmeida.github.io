"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2B2D42] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Kenny Almeida. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
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
      </div>
    </footer>
  );
}
