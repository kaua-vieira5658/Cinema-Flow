import { SearchBar } from "../searchBar";
import { useSearchModalContext } from "../../hooks/useSearchModalContext";
import { useRef, useEffect } from "react";

export function SearchModal() {
  const { isOpen, handleIsOpen } = useSearchModalContext();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleIsOpen(false);
      }
    }

    document.addEventListener("mousedown", clickOutside);

    return () => document.removeEventListener("mousedown", clickOutside);
  }, [handleIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed z-20 inset-0 bg-black/40 w-full flex justify-center">
      <div
        ref={modalRef}
        className="p-5 h-24 w-full max-w-3xl bg-zinc-800 mt-20 opacity-100 rounded-md"
      >
        <SearchBar />
      </div>
    </div>
  );
}
