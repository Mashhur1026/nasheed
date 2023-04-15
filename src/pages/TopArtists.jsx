import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../contex";
import nasheeds from "../data";
import { AiOutlineHome } from "react-icons/ai";

function Categories() {
  const sortedArtists = [...new Set(nasheeds.map((nasheed) => nasheed.artist))];
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <div className="hamburger">
        <button onClick={openSidebar}>
          <RxHamburgerMenu />
        </button>
      </div>

      <section className="s-top-artists">
        <Link to={"/"}>
          <div className="home-icon">
            <button>
              <AiOutlineHome />
            </button>
          </div>
        </Link>
        <h1>Top Artists</h1>
        <div className="top-artists-container">
          {sortedArtists.map((sortedArtist) => {
            const filteredNasheeds = nasheeds.filter(
              (nasheed) => nasheed.artist === sortedArtist
            );
            const { artistImg, id, artist } = filteredNasheeds[0]; // Assuming each category has at least one nasheed
            const number = filteredNasheeds.length;
            return (
              <Link
                to={`/artists/${filteredNasheeds[0].artist}`}
                key={id}
                className="link-no-underline"
              >
                <div key={id} className="atist">
                  <img src={artistImg} alt={artist} />
                  <div className="text">
                    <p>{artist}</p>
                    <span>{number} songs</span>
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

export default Categories;
