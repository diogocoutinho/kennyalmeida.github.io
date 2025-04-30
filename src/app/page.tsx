import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Kenny Almeida | Marketing Digital",
  description:
    "Transformando visões em resultados digitais. Especialista em marketing digital e estratégias de crescimento online.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services /> 
      <About />
      <Testimonials />
      <Contact />
      <CTA />
    </main>
  );
}
