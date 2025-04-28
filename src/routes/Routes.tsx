import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layout/MainLayout";
import Home from "../pages/home";
import SearchResult from "../pages/searchResult";

// Definindo as rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/searchresult", element: <SearchResult /> },
    ],
  },
]);

export default router;
