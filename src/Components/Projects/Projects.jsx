import ProjectBackbone from "./ProjectBackbone";
import fromOceanToPlate from "../../Assets/FromOceanToPlate.png";
import UnitConverter from "../../Assets/unit-converter.jpg";
import BlogApp from "../../Assets/Blog.png";
import FishWeight from "../../Assets/FishWeight.png";
import Bolbol from "../../Assets/FlappyBolBol.png";
import Pomodoro from "../../Assets/Pomodoro.png";
import MyTrackerV3 from "../../Assets/MyTrackerV3.png";
import Scheduleapp from "../../Assets/Scheduling-app.png";
import ReactQuizApp from "../../Assets/ReactQuizzApp.png";
import RandomShop from "../../Assets/RandomShop.png";

const Projects = () => {
  return (
    <div className="projects_container">
      <h1>
        Recent Top <span className="key_words">Projects</span>
      </h1>
      <p>Here are some of my recent projects.</p>
      <div className="backbone">
        <ProjectBackbone
          ProjectTitle="Scheduling App"
          ProjectImage={Scheduleapp}
          ProjectAlt="Scheduling App"
          ProjectDesc="The Scheduling App is a user-friendly appointment and meeting management solution developed using React and Node.js. It integrates with a PostgreSQL database for data integrity and robust security measures. Inspired by modern scheduling tools, it enhances productivity and organization for individuals and teams."
          ProjectLink="https://github.com/boatman-27/scheduling-app"
          ProjectTech={[
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Bcrypt",
            "ReactRouter",
            "ReactHookForm",
            "ReactHookToast",
            "FullCalendar",
            "Add-to-Calendar Button",
            "React Spinners",
          ]}
        />

        <ProjectBackbone
          ProjectTitle="My Tracker V3"
          ProjectImage={MyTrackerV3}
          ProjectAlt="My Tracker V3"
          ProjectDesc="My Tracker V3 is a comprehensive web application developed using React, Node.js, and Express. It features job and task tracking functionalities with a PostgreSQL database for reliable data storage. This project was created to allow me to track job applications and daily tasks and todos. It allows the addition, editing, and deletion of job applications and tasks, as well as updating their statuses. The project also integrates React Query for data fetching and caching, ensuring a seamless and responsive experience."
          ProjectLink="https://github.com/boatman-27/tracker-v3"
          ProjectTech={[
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "React Query",
            "ReactHookForm",
            "ReactRouter",
          ]}
        />

        <ProjectBackbone
          ProjectTitle="Blog Web App"
          ProjectImage={BlogApp}
          ProjectAlt="Blog Web App"
          ProjectDesc="My Blog is a web application created using React and Node.js, offering a user-friendly registration and login experience. It features a robust security system for user data confidentiality and a locally hosted PostgreSQL database for safe storage. Users can access a variety of blog posts from other users, and create and share their own content. The platform also allows users to add tags to their posts, enhancing the browsing experience and fostering community engagement. This tagging system allows users to easily discover blogs that align with their interests, fostering a sense of community connection."
          ProjectLink="https://github.com/boatman-27/Blog_app"
          ProjectTech={[
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Bcrypt",
            "ReactRouter",
            "Axios",
          ]}
        />

        <ProjectBackbone
          ProjectTitle="Dynamic Quiz Application"
          ProjectImage={ReactQuizApp}
          ProjectAlt="Dynamic Quiz Application"
          ProjectDesc="This project is a dynamic quiz application built using React, allowing users to engage in customizable quizzes with various options for question quantity, difficulty level, and question type. Inspired by the Quiz App website made in Jonas Schmedtmann's React course, this version integrates a form page that takes user input and communicates with the Open Trivia Database API based on the selected parameters, rather than relying on a JSON file for questions."
          ProjectLink="https://github.com/boatman-27/Quiz_app"
          ProjectTech={["React", "useContext", "JSON Server"]}
        />

        <ProjectBackbone
          ProjectTitle="E-Commerce Application"
          ProjectImage={RandomShop}
          ProjectAlt="E-Commerce Application"
          ProjectDesc="This project is a dynamic e-commerce application built using React and Redux Toolkit, allowing users to engage in customizable shopping experiences with various product options. The application integrates user authentication, product management, cart functionality, and order processing. This project was built during Jonas Schmedtmann's React course, with additional features and improvements added."
          ProjectLink="https://github.com/boatman-27/Random_Shop"
          ProjectTech={["React", "ReactRouter", "Redux Toolkit", "React Redux"]}
        />

        <ProjectBackbone
          ProjectTitle="Unit Converter"
          ProjectImage={UnitConverter}
          ProjectAlt="Unit Converter"
          ProjectDesc="The Unit Conversion Program is a Python tool designed for accurate unit conversion across various categories. It uses the Pandas library for efficient conversion factors and offers an intuitive user interface for selecting units and entering values. The program is designed to handle temperature conversion, offering dynamic calculations for Celsius, Fahrenheit, and Kelvin units.This project was inspired by Google's online conversion tool."
          ProjectLink="https://github.com/boatman-27/Unit_Converter"
          ProjectTech={["Python", "Pandas", "Tkinter"]}
        />

        <ProjectBackbone
          ProjectTitle="From Ocean to Plate"
          ProjectImage={fromOceanToPlate}
          ProjectAlt="From Ocean to Plate"
          ProjectDesc="My Bachelor's thesis project involved the creation of a dynamic website using React for the frontend and the development of essential smart contracts using Solidity. This platform was designed for all participants in the seafood supply chain, like customers, fishermen, processing and distribution companies, and the system owner. Notably, the project encompassed the implementation of three critical smart contracts for managing transactions, licensing, and adding seafood items to the blockchain to be available for purchase by customers after being processed and distributed. Ganache was used to support the Blockchain functionality."
          ProjectLink="https://github.com/boatman-27/seafood-solidity-react"
          ProjectTech={[
            "Solidity",
            "React",
            "Ganache",
            "Truffle",
            "TailwindCSS",
            "jspdf",
            "qrcode.react",
          ]}
        />

        <ProjectBackbone
          ProjectTitle="Pomodoro Timer"
          ProjectImage={Pomodoro}
          ProjectAlt="Pomodoro Timer"
          ProjectDesc="The Pomodoro timer application is a tool for time management and productivity, using the Pomodoro Technique to break work into intervals with short breaks. Users can set durations, start and reset the timer, and check completed intervals. The app also features a to-do list, allowing users to input tasks and manage them, stored in a text file. The user interface is built using Tkinter."
          ProjectLink="https://github.com/boatman-27/Pomodoro"
          ProjectTech={["Python", "Tkinter"]}
        />

        <ProjectBackbone
          ProjectTitle="Fish Recognition and Weight Estimation"
          ProjectImage={FishWeight}
          ProjectAlt="Fish Recognition and Weight Estimation"
          ProjectDesc="The Fish Species Detection and Weight Estimation project is a comprehensive Python-based solution that leverages the power of YOLOv8 for accurate fish species identification and subsequently estimates the weight of the detected fish. This project seamlessly integrates with a Django web application, providing users with an intuitive and user-friendly interface to interact with the system."
          ProjectLink="https://github.com/boatman-27/Fish_Recognition_and_weight"
          ProjectTech={["Python", "OpenCV", "YOLOv8", "Django", "Flask"]}
        />

        <ProjectBackbone
          ProjectTitle="Flappy Bolbol"
          ProjectImage={Bolbol}
          ProjectAlt="Flappy Bolbol"
          ProjectDesc="Flappy BolBol is my personal adaptation of the classic Flappy Bird game, developed using the versatile Unity game engine. This whimsical and engaging game introduces players to a charming bird named BolBol, who takes on the challenging world of endless obstacles. The game mechanics are simple yet addictive: tap to make BolBol flap its wings and navigate through a maze of pipes."
          ProjectLink="https://github.com/boatman-27/flappy_bolbol"
          ProjectTech={["Unity"]}
        />
      </div>
    </div>
  );
};

export default Projects;
