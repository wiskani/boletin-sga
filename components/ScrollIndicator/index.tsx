import { useState, useEffect } from "react";

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprueba si hay contenido para hacer scroll
    const checkScrollableContent = () => {
      if (document.documentElement.scrollHeight > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Comprueba el scroll inicial al cargar
    checkScrollableContent();

    // Escucha el evento de redimensionar la ventana
    window.addEventListener("resize", checkScrollableContent);

    return () => {
      window.removeEventListener("resize", checkScrollableContent);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Oculta el indicador si el usuario hace scroll
      if (window.scrollY > 0) {
        setIsVisible(false);
      }
    };

    // Escucha el evento de scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Limpia el evento al desmontar el componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    // Hace scroll corto hacia abajo
    window.scrollBy({
      top: 100, // Ajusta la cantidad de scroll
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
      onClick={handleClick} // Agregar evento de clic para hacer scroll
    >
      <div className="flex flex-col items-center cursor-pointer">
        <div className="mt-2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  ) : null;
};

export default ScrollIndicator;

