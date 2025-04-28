import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";

export function CategoriesMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Verificar e executar a função closeMenu caso o click do usuário seja fora do menu
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        className="flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white">Categorias</span>
        <ChevronDown
          color="#FFF"
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute mt-3 left-0 rounded-md shadow-lg w-44 bg-zinc-800">
          <div className="flex flex-col">
            <a className="block py-2 px-4 text-sm text-gray-200 hover:bg-zinc-700 transition-all rounded-tl-md rounded-tr-md">
              Ação
            </a>
            <a className="block py-2 px-4 text-sm text-gray-200 hover:bg-zinc-700 transition-all">
              Aventura
            </a>
            <a className="block py-2 px-4 text-sm text-gray-200 hover:bg-zinc-700 transition-all rounded-bl-md rounded-br-md">
              Terror
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
