import "./App.css";
import SearchComponent from "./Components/SearchComponent";
import { getPages } from "./Repositories/Pages";

import { Outlet } from "react-router-dom";

export default function App() {
  const pages = getPages();
  return (
    <div className="App container mx-auto h-screen">
      <div className="w-full h-screen px-4">
        <div className="flex justify-center items-center h-full">
          <SearchComponent pages={pages} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
