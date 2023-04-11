import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import TopArtists from "./pages/TopArtists";
import Error from "./pages/Error";
import Nasheed from "./pages/Nasheed";
import Category from "./pages/Category";
import Artist from "./pages/Artist";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Search />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/artists" element={<TopArtists />} />
        <Route path="/artists/:id" element={<Artist />} />
        <Route path="/nasheed/:id" element={<Nasheed />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
