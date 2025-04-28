import { useState, useRef, KeyboardEventHandler } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";
import { useSearchModalContext } from "../../hooks/useSearchModalContext";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { handleIsOpen } = useSearchModalContext();

  function handleSearch() {
    if (!search) return;

    navigate(`/searchresult?query=${search}`);
    handleIsOpen(false);
  }

  const handleKeydown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && search) {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center mt-4">
      <input
        ref={inputRef}
        className="bg-zinc-700 p-2 px-4 text-white rounded-tl-xs rounded-bl-xs outline-0 w-full"
        type="search"
        placeholder="Pesquise por um filme..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyDown={handleKeydown}
      />
      <button className="bg-cyan-500 p-2" onClick={handleSearch}>
        <Search color="#fff" />
      </button>
    </div>
  );
}
