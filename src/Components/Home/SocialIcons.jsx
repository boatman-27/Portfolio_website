import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="home-about-social">
      <h1>FIND ME ON</h1>
      <p>
        Please don't hesitate to reach out to me and{" "}
        <span className="key_words">connect.</span>
      </p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/boatman-27"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
            aria-label="github"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/demzaya1bs"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
            aria-label="twitter"
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/adham-osman-662529233"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
            aria-label="linkedin"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/ao.27.o1/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
            aria-label="instagram"
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
