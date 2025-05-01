"use client";

import { smoothScroll } from "@/utils/smoothScroll";
import Link from "next/link";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#2B2D42] text-white py-4 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("/");
            }}
            className="text-2xl font-bold"
          >
            Kenny Almeida
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(item.href);
                }}
                className="hover:text-[#EF233C] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
