import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoTirarVisto from "../../assets/images/logo-tirar_visto.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navegação para rotas/páginas reais
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/quem-somos", label: "Quem somos" },
    { href: "/servicos", label: "Serviços" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <div className="flex w-full flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={logoTirarVisto} alt="Logo Tirar Visto" className="h-10" />
      </a>

      {/* Menu Desktop */}
      <nav className="hidden items-center space-x-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-md py-2 font-medium text-[#232323] transition-colors hover:font-bold"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Botão menu mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile expansível */}
      {isMenuOpen && (
        <nav className="mt-4 w-full flex-col items-center space-y-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center text-lg text-gray-700"
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
