import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Exibe o botão quando a página for rolada para baixo
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      // Exibe o botão após rolar 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Rola suavemente para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Adiciona e remove o listener de rolagem
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-50">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="focus:ring-opacity-50 transform rounded-full bg-blue-600 p-3 font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
