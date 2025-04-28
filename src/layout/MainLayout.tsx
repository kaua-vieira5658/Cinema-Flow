import { Outlet } from "react-router";
import { Header } from "../componets/header";
import { SearchModal } from "../componets/SearchModal";

export function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <SearchModal />
      </main>
    </>
  );
}
