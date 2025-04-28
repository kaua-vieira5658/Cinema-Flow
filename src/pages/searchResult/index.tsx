import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function SearchResult() {
  const location = useLocation();
  const [queryItem, setQueryItem] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");

    if (query) {
      setQueryItem(query);
    }
  }, [location]);

  return (
    <main className="w-full my-10 px-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-white text-2xl">
          Resultado da pesquisa:{" "}
          <span className="text-2xl font-bold">{queryItem}</span>
        </h1>
      </div>
    </main>
  );
}
