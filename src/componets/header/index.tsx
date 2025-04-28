import { User, Heart, Search } from "lucide-react";
import { CategoriesMenu } from "../categoriesMenu";
import { useSearchModalContext } from "../../hooks/useSearchModalContext";

export function Header() {
  const { handleIsOpen, isOpen } = useSearchModalContext();

  return (
    <header className="w-full border-b border-zinc-700 px-8 py-6 bg-zinc-800">
      <div className="w-full max-w-7xl flex mx-auto justify-between items-center">
        <a href="" className="text-white font-bold text-xl ">
          Cinema Flow
        </a>

        <div className="flex items-center justify-center gap-6">
          <button onClick={() => handleIsOpen(!isOpen)}>
            <Search color="#FFF" />
          </button>
          <CategoriesMenu />
          <a className="flex items-center gap-2">
            <Heart color="#FFF" />
            <span className="text-white">Favoritos</span>
          </a>
          <a className="rounded-full bg-zinc-500 flex items-center justify-center px-2 py-2">
            <User color="#FFF" />
          </a>
        </div>
      </div>
    </header>
  );
}
