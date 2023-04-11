import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../contex";
import { Link, useLocation, useParams } from "react-router-dom";
import nasheeds from "../data";
import { AiOutlineClose } from "react-icons/ai";

function Category() {
  const { openSidebar, setPath } = useGlobalContext();
  const location = useLocation();

  const { id } = useParams()
  const filteredNasheed = nasheeds.filter((nasheed) => nasheed.category === id)

  return (
    <>
      <div className="hamburger">
        <button onClick={openSidebar}>
          <RxHamburgerMenu />
        </button>
      </div>
      <section className="s-songs">
        <Link to={"/categories"}>
          <div className="home-icon">
            <button>
              <AiOutlineClose />
            </button>
          </div>
        </Link>
        <h1>{id} nasheeds</h1>
        <div className="songs-container">
          {filteredNasheed.map((nasheed) => {
            const { artist, id, img, name } = nasheed;
            return (
              <Link
                to={`/nasheed/${nasheed.id}?category=${nasheed.category}`}
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

export default Category;
