import React from "react";
import "./Myaccount.css";
import Navbar3 from "../../Components/Navbar3/Navbar3";
import English1 from "../../assets/englishimg.png";
import Physics1 from "../../assets/physicsimg.png";
import Math1 from "../../assets/mathimg.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Gov from "../../assets/govimg.png";
import History from "../../assets/historyimg.png";
import Sam from "../../assets/samimg.png";
import Memory from "../../assets/memoryimg.png";
import Health from "../../assets/healthimg.png";
import Know from "../../assets/knowimg.png";
import Bread from "../../assets/breadimg.png";
import Smile from "../../assets/smileimg.png";
import Facebookimg from "../../assets/facebookimg.png";
import Link from "../../assets/linkimg.png";
import Twitter from "../../assets/twitterimg.png";
import Unknown from "../../assets/unknownimg.png";
import Footer from "../../Components/Footer/Footer";

import { FaArrowRightLong } from "react-icons/fa6";
const Myaccount = () => {
  return (
    <div>
      <Navbar3 />

      <header className="myaccount-header">
        <div className="myaccount-top">
          <h2>Shop Now</h2>
          <p>Buy and sell your textbooks for the best price</p>
        </div>
        <div className="myselect-con">
          <div className="myselect-flex">
            <p>State</p>
            <IoMdArrowDropdown />
          </div>
          <div className="myline"></div>
          <div className="myselect-flex">
            <p>State</p>
            <IoMdArrowDropdown />
          </div>
          <div className="myline"></div>
          <div className="myselect-flex">
            <p>State</p>
            <IoMdArrowDropdown />
          </div>
          <div className="myline"></div>
          <div className="myselect-flex">
            <p>State</p>
            <IoMdArrowDropdown />
          </div>
          <button>search</button>
        </div>
        <div className="myaccount-top1">
          <h2>Best Seller Books</h2>
        </div>
        
<Splide
          options={{
            arrows: false,
            perPage: 4,
            perMove: 1,
            autoplay: true,
            gap: "104px",
            pagination: false,
            
          }}
        >
          {/* <div className="myaccount-img"> */}
            <SplideSlide>
              <img src={Math1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={English1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={Physics1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={Math1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={English1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={Physics1} alt="image is not available" />
            </SplideSlide>

            <SplideSlide>
              <img src={Math1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={English1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={Physics1} alt="image is not available" />
            </SplideSlide>
          {/* </div> */}
        </Splide>
        <div className="splidegap"></div>

        

        <Splide
          options={{
            arrows: false,
            perPage: 4,
            perMove: 1,
            autoplay: true,
            gap: "104px",
            pagination: false,
            
          }}
        >
          {/* <div className="myaccount-img1"> */}
            <SplideSlide>
              <img src={Math1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={English1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={Physics1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={Math1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={English1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={Physics1} alt="image is not available" />
            </SplideSlide>

            <SplideSlide>
              <img src={Math1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={English1} alt="image is not available" />
            </SplideSlide>
            <SplideSlide>
              <img src={Physics1} alt="image is not available" />
            </SplideSlide>
          {/* </div> */}
        </Splide>
        <div className="splidegap1"></div>
      </header>
      <section className="mybook-con">
        <div>
          <div className="mybookdiv">
            <img src={Gov} alt="image not available" />
            <img src={History} alt="image not available" />
          </div>
          <div className="mybookdiv1">
            <img src={Gov} alt="image not available" />
            <img src={History} alt="image not available" />
          </div>
        </div>
        <div className="mybookdiv-item">
          <h2>
            Find your favorite books <span>here</span>
          </h2>
          <p>
            Bookly regularly updates its library with the<br/> most interesting and
            fascinating books for kids <br/>and adults alike.
          </p>
          <div className="mybookdiv-item1">
          <div className="mybookdiv-items1">
            <h3>80+</h3>
            <h4>Book</h4>
            <h4>Bestsellers</h4>
          </div>
          <div className="mybookdiv-items1">
            <h3>60+</h3>
            <h4>New</h4>
            <h4>Arrivals</h4>
          </div>
          <div className="mybookdiv-items1">
            <h3>75+</h3>
            <h4>Books</h4>
            <h4>for coming</h4>
          </div>
          </div>
          <button>Learn more< FaArrowRightLong className="mybookdiv-arrow"/></button>
        </div>
      </section>
      <section className="otherbooks-con">
        <div className="subject-con">
          <p> Fairytale<br/>
Biography<br/>
Picture books<br/>
Geography<br/>
Historical fiction<br/>
Fantasy fiction<br/>
Adventure<br/>
Comics<br/>
Literature<br/>
Religion<br/>
Classics
<br/>Health</p>
        </div>
        <div className="otherbooks-div">
          <h2>Other Books</h2>
          <div>
            <div className="otherbooks-img">
            <img src={Sam} alt="image is not available" />
            <img src={Bread} alt="image is not available" />
            <img src={Know} alt="image is not available" />
            <img src={Know} alt="image is not available" />
            </div>
            <div className="otherbooks-img1">
            <img src={Memory} alt="image is not available" />
            <img src={Bread} alt="image is not available" />
            <img src={Sam} alt="image is not available" />
            <img src={Health} alt="image is not available" />
            </div>
          </div>
        </div>
      </section>
      <section className="logo-contain">
        <h2>Follow <span> Us </span> On</h2>
        <div className="logocontain-img">
          <img src={Twitter} alt="image is not available" className="logo-border"/>
          <img src={Facebookimg} alt="image is not available" className="logo-border"/>
          <img src={Link} alt="image is not available" className="logo-border"/>
          <img src={Unknown} alt="image is not available" className="logo-border"/>
        </div>
      </section>
      <section className="smile-con">
        <div>
        <img src={Smile} alt="image is not available" />
        </div>
        <div className="smile-item">
          <h2>We provide you the Experience</h2>
          <div className="smile-line"></div>
          <p>Browse the collection of our best-selling
          and top interesting products</p>
          <button>Search products< FaArrowRightLong className="smile-arrow"/></button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Myaccount;
