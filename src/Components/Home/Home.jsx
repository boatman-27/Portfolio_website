import React from "react";
import Type from "./Type";
import About from "./About";
import img from "../../Assets/Home_img.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-section">
        <div className="home-content">
          <h1 style={{ paddingBottom: 15 }}>
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="heading-name">
            I'M <span className="key_words">Adham Osman</span>
          </h1>
          <div
            className="key_words"
            style={{ paddingLeft: 50, textAlign: "left", marginTop: 30 }}
          >
            <Type />
          </div>
        </div>
        <div className="home-image">
          <img
            src={img}
            alt="home pic"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
