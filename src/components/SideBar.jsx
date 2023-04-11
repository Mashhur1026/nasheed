import React, { useState } from 'react'
import { logo, icons } from "../data"
import { useGlobalContext } from "../contex";
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-router-dom";


const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  
  return (
    <aside className={isSidebarOpen ? "show" : ""}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <button onClick={closeSidebar}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="navBody">
        <div className="links">
          <ul className="underline">
            <Link to={"/"} className="underline">
              <li>Home</li>
            </Link>
            <Link to={"/categories"} className="underline">
              <li>Categories</li>
            </Link>
            <Link to={"/artists"} className="underline">
              <li>Artists</li>
            </Link>
          </ul>
        </div>
        <div className="socials">
          {icons.map((icon) => {
            const { img, id, name } = icon;
            return (
              <div className="social" key={id}>
                <samp>{img}</samp>
                <p>{name}</p>
              </div>
            );
          })}
        </div>
        <footer>
          <p>
            Created by Mashhur Yoldoshev <br /> in 2023 year.
          </p>
        </footer>
      </div>
    </aside>
  );
  }

export default SideBar
