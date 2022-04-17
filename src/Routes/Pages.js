import SearchComponent from "../Components/SearchComponent";
import { getPages } from "../Repositories/Pages";
import { Outlet } from "react-router-dom";

export default function Pages() {
  const pages = getPages();
  return (
    <div className="App container mx-auto h-screen px-4">
      <div className="w-full">
        <div className="flex justify-center items-center h-full">
          <SearchComponent pages={pages} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
