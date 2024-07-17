import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Heroimg from "../../assets/rectangleimg.png";
import { useNavigate } from "react-router-dom";
import Amazon from "../../assets/amazonimg.png";
import Jumia from "../../assets/jumiaimg.png";
import Shopify from "../../assets/shopifyimg.png";
import Shoprite from "../../assets/shopriteimg.png";
import Justrite from "../../assets/justriteimg.png";
import Jiji from "../../assets/jijiimg.png";
import English from "../../assets/englishimg.png";
import Physics from "../../assets/physicsimg.png";
import Math from "../../assets/mathimg.png";

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/signup");
  };

  return (
    <div className="App">
      <Navbar />

      <div className="hero-container">
        <div className="hero-content">
          <h2>AN ONLINE BOOKSTORE</h2>
          <h1>Welcome to Bookly</h1>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit
            <br />
            aspernatur aut odit aut fugit, sed quia consequuntur <br />
            magni dolores eos qui ratione voluptatem
            <br />
            sequi nesciunt.
          </p>
          <button className="hero-btn" onClick={handleLogin}>
            Get Started
          </button>
        </div>

        <div className="rectangleimg">
          <img src={Heroimg} alt="image not available" />
        </div>
      </div>
      <div className="search-brd">
        <h3>Search a Book</h3>
        <form className="searchdiv">
          <div className="searchdiv-div">
            <div className="search-div-select">
              <select className="searchdiv-select">
                <option>State</option>
                <option>OPTION 2</option>
                <option>OPTION 3</option>
                <option>OPTION 4</option>
              </select>
            </div>
            <div className="search-div-select">
              <select className="searchdiv-select">
                <option>School</option>
                <option>OPTION 2</option>
                <option>OPTION 3</option>
                <option>OPTION 4</option>
              </select>
            </div>
            <div className="search-div-select">
              <select className="searchdiv-select">
                <option>Class</option>
                <option>OPTION 2</option>
                <option>OPTION 3</option>
                <option>OPTION 4</option>
              </select>
            </div>
            <div className="search-div-select">
              <select className="searchdiv-select">
                <option>Section</option>
                <option>OPTION 2</option>
                <option>OPTION 3</option>
                <option>OPTION 4</option>
              </select>
            </div>
            <button>search</button>
          </div>
        </form>
      </div>
      <section className="cartbook">
        <h2>Top Features</h2>
        <div className="cartbook-div">
          <div className="cartbook-select">
            <img src={Math} alt="image not available" />
            <h3>New General Maths 1</h3>
            <h4># 3000</h4>
            <button>ADD TO CART</button>
          </div>

          <div className="cartbook-select">
            <img src={English} alt="image not available" />
            <h3>New General Maths 1</h3>
            <h4># 3000</h4>
            <button>ADD TO CART</button>
          </div>

          <div className="cartbook-select">
            <img src={Physics} alt="image not available" />
            <h3>New General Maths 1</h3>
            <h4># 3000</h4>
            <button>ADD TO CART</button>
          </div>
        </div>

        <h2>New Arrivals</h2>
        <div className="cartbook-div">
          <div className="cartbook-select">
            <img src={Math} alt="image not available" />
            <h3>New General Maths 1</h3>
            <h4># 3000</h4>
            <button>ADD TO CART</button>
          </div>

          <div className="cartbook-select">
            <img src={English} alt="image not available" />
            <h3>New General Maths 1</h3>
            <h4># 3000</h4>
            <button>ADD TO CART</button>
          </div>

          <div className="cartbook-select">
            <img src={Physics} alt="image not available" />
            <h3>New General Maths 1</h3>
            <h4># 3000</h4>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="showmore-btn">
          <button>Show more</button>
        </div>
      </section>
      <section className="trust">
        <div className="our-word">
          <h3>Don’t take our word for it.</h3>
          <p>Trust our Customers</p>
        </div>
        <div className="lorem-div">
          <div className="lorem">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,{" "}
            </h2>
            <p>Mr Ogunjobi - Lagos Nigeria</p>
          </div>
          <div className="lorem">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </h2>
            <p>Mr Ogunjobi - Lagos Nigeria</p>
          </div>
          <div className="lorem">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </h2>
            <p>Mr Ogunjobi - Lagos Nigeria</p>
          </div>
        </div>
      </section>
      <section className="partner">
        <h3>Partners</h3>
        <div className="partnerimg">
          <img src={Jumia} alt="image not available" />
          <img src={Jiji} alt="image not available" />
          <img src={Amazon} alt="image not available" />
          <img src={Shopify} alt="image not available" />
          <img src={Shoprite} alt="image not available" />
          <img src={Justrite} alt="image not available" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
