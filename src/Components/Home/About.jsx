import SocialIcons from "./SocialIcons";

const About = () => {
  return (
    <div className="home-about-section">
      <div className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="key_words"> INTRODUCE </span> MYSELF
        </h1>
        <p className="home-about-body">
          Hi, my name is <span className="key_words">Adham Osman </span>
          and I'm from <span className="key_words"> Cairo, Egypt.</span>
          <br />
          <br />I recently graduated with a{" "}
          <span className="key_words">
            {" "}
            Bachelor's degree in Computer Science with a business administration
            minor{" "}
          </span>{" "}
          in 2023 from the German University of Technology (Gutech) in Oman.
          <br />
          <br />
          As an aspiring
          <b className="key_words"> Full-Stack </b>developer, I enjoy tackling
          new challenges and continuously expanding my skillset. I actively seek
          out educational content and projects on YouTube to enhance my skills
          and knowledge.
          <br />
          <br />I am proficient in
          <b className="key_words"> Pyhton, </b>
          as well as have knowledge in other programming languages such as C++,
          JavaScript, and
          <b className="key_words"> Solidity.</b>
          <br />
          <br />I have a passion for developing games with{" "}
          <b className="key_words">Unity. </b> Also, I have intermediate-level
          experience in embedded systems, specializing in
          <i>
            <b className="key_words">
              {" "}
              Arduino Uno and NodeMCU ESP8266 for creating electronics projects
              and IoT solutions.
            </b>
          </i>
          <br />
          <br />I am also interested in building new
          <i>
            <b className="key_words"> Web Technologies and Products, </b>
            as well as exploring areas related to
            <b className="key_words"> Artificial Intelligence.</b>
          </i>
          <br />
        </p>
      </div>
      <SocialIcons />
    </div>
  );
};

export default About;
