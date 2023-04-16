import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../contex";
import { Link, useLocation,useParams } from "react-router-dom";
import nasheeds from "../data";
import { AiOutlineHome } from "react-icons/ai";

function SearchPage() {
  const { openSidebar, setPath } = useGlobalContext();
  const location = useLocation();
  const { text } = useParams()
  const [data, setData] = useState(nasheeds)
  
 useEffect(() => {
   const filteredData = nasheeds.filter((nasheed) => {
     if (
       nasheed.name.toUpperCase().includes(text.toUpperCase()) ||
       nasheed.artist.toUpperCase().includes(text.toUpperCase())
     ) {
       return nasheed;
     }
     return null;
   });
   setData(filteredData);
 }, [text]);


  return (
    <>
      <div className="hamburger">
        <button onClick={openSidebar}>
          <RxHamburgerMenu />
        </button>
      </div>
      <section className="s-songs">
        <Link to={"/"}>
          <div className="home-icon">
            <button>
              <AiOutlineHome />
            </button>
          </div>
        </Link>
        <h1 className="search-text">Search results for "{text}"</h1>
        <div className="songs-container single-grid">
          {!data.length ? (
            <h3 className="h3">We do not have such a nasheed</h3>
          ) : (
            data.map((nasheed) => {
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
            })
          )}
        </div>
      </section>
    </>
  );
}

export default SearchPage;
