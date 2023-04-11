import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../contex";
import nasheeds from "../data";
import {AiOutlineHome} from "react-icons/ai"

function Categories() {
  const categories = [...new Set(nasheeds.map((nasheed) => nasheed.category))];
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <div className="hamburger">
        <button onClick={openSidebar}>
          <RxHamburgerMenu />
        </button>
      </div>


      <section className="s-categories">
      <Link to={"/"}>
        <div className="home-icon">
          <button>
            <AiOutlineHome />
          </button>
        </div>
      </Link>
        <h1>Categories</h1>
        <div className="categories-container">
          {categories.map((category) => {
            const filteredNasheeds = nasheeds.filter(
              (nasheed) => nasheed.category === category
            );
            const number = filteredNasheeds.length;
            const { img, id } = filteredNasheeds[0]; // Assuming each category has at least one nasheed
            return (
              <Link
                to={`/category/${filteredNasheeds[0].category}`}
                key={id}
                className="link-no-underline"
              >
              <div key={id} className="category">
                <img src={img} alt={category} />
                <div className="text">
                    <p>{category}</p>
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
