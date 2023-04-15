import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../contex";
import { Link, useLocation } from "react-router-dom";
import nasheeds from "../data"


function Home() {
  const { openSidebar, setPath } = useGlobalContext();
  const location = useLocation();
  
  return (
    <>
      <div className="hamburger">
        <button onClick={openSidebar}>
          <RxHamburgerMenu />
        </button>
      </div>
      <section className="s-songs">
        <h1>Top Nasheeds</h1>
        <div className="songs-container">
          {nasheeds.map((nasheed) => {
            const { artist, id, img, name } = nasheed;
            return (
              <Link
                to={`/nasheed/${nasheed.id}`}
                key={id}
                className="link-no-underline"
              >
                <div
                  onClick={() => setPath(location)}
                  key={id}
                  className="nasheed"
                >
                  <img src={img} alt={name} />
                  <div className="text">
                    <p>{name}</p>
                    <span>{artist}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home
