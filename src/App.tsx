import React from "react";
import "./App.css";

// Importações dos componentes e do hook
import Hero from "./components/sections/Hero";
import { useScrollSpy } from "./hooks/useScrollSpy";
import Banner from "./components/sections/Banner";

// Componente provisório para as outras seções da página.
const PlaceholderSection: React.FC<{ id: string; title: string }> = ({
  id,
  title,
}) => (
  <section
    id={id}
    className="flex h-screen items-center justify-center border-t bg-gray-100"
  >
    <h2 className="text-5xl font-bold text-gray-400">{title}</h2>
  </section>
);

function App() {
  //  IDs das seções para o hook 'useScrollSpy' observar.
  const sectionIds = ["home", "about", "services", "contact"];

  //  O hook retorna o ID da seção que está visível na tela.
  const activeSection = useScrollSpy(sectionIds);

  return (
    <>
      <main>
        <Hero activeSection={activeSection} />
        <Banner />
        {/* Seções restantes da página */}
        <PlaceholderSection id="about" title="Quem Somos" />
        <PlaceholderSection id="services" title="Serviços" />
        <PlaceholderSection id="contact" title="Contato" />
      </main>
    </>
  );
}

export default App;
