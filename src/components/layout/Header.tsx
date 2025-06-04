import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoTirarVisto from "../../assets/images/logo-tirar_visto.svg";

// O Header recebe a seção ativa para destacar o link correto no menu.
interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  // Estado para controlar a visibilidade do menu em telas pequenas (mobile).
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lista de links de navegação para facilitar a renderização.
  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "Quem somos", id: "about" },
    { href: "#services", label: "Serviços", id: "services" },
    { href: "#contact", label: "Contato", id: "contact" },
  ];

  // Função para gerar as classes do link, aplicando um sublinhado se a seção estiver ativa.
  const getLinkClass = (id: string) => `
    relative py-2 text-md font-medium text-[#232323] transition-colors hover:font-bold
    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
    after:bg-blue-600 after:transition-transform after:duration-300
    ${activeSection === id ? "after:scale-x-100" : "after:scale-x-0"}
  `;

  return (
    // O container principal do header. 'justify-between' alinha a logo à esquerda e o menu à direita.
    <div className="flex w-full flex-wrap items-center justify-between">
      {/* 1. Logo da Aplicação */}
      <a href="#home" className="flex items-center">
        <img src={logoTirarVisto} alt="Logo Tirar Visto" className="h-10" />
      </a>

      {/* 2. Menu de Navegação para Desktop */}
      <nav className="hidden items-center space-x-8 md:flex">
        {navLinks.map((link) => (
          <a key={link.id} href={link.href} className={getLinkClass(link.id)}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* 3. Botão do Menu para Mobile (Hamburguer) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 4. Menu Expansível para Mobile */}
      {isMenuOpen && (
        <nav className="mt-4 w-full flex-col items-center space-y-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-center text-lg ${
                activeSection === link.id
                  ? "font-bold text-blue-600"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Header;
