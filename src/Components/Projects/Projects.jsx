import ProjectBackbone from "./ProjectBackbone";
import fromOceanToPlate from "../../Assets/FromOceanToPlate.png";
import MyTracker from "../../Assets/MyTracker.png";
import MyTrackerv2 from "../../Assets/MyTrackerV2.png";
import UnitConverter from "../../Assets/unit-converter.jpg";
import BlogApp from "../../Assets/Blog.png";
import FishWeight from "../../Assets/FishWeight.png";
import FishAi from "../../Assets/fishaimodel.jpg";
import Bolbol from "../../Assets/FlappyBolBol.png";
import Pomodoro from "../../Assets/Pomodoro.png";

const Projects = () => {
  return (
    <div className="projects_container">
      <h1>
        Recent Top <span className="key_words">Projects</span>
      </h1>
      <p>Here are some of my recent projects.</p>
      <div className="backbone">
        <ProjectBackbone
          ProjectTitle="Blog Web App"
          ProjectImage={BlogApp}
          ProjectAlt="Blog Web App"
          ProjectDesc="Welcome to my Blog web application, meticulously crafted with React and Node.js. This dynamic platform not only provides users with a seamless registration and login experience but also invites them to immerse themselves in a vibrant community of passionate bloggers. At the core of our platform is a robust security system that ensures the confidentiality of user data. Utilizing a locally hosted PostgreSQL database, we guarantee the safe storage of login credentials, prioritizing the privacy and trust of our users. Once logged in, users gain access to a world of captivating blog posts, both from seasoned writers and new contributors. Our intuitive interface empowers users to effortlessly browse through an array of diverse content, and with just a few clicks, they can create and share their own compelling blog posts. One of the standout features of our platform is the ability to enhance blog posts with relevant tags. This not only allows users to categorize their content effectively but also facilitates an enriched and organized browsing experience for the entire community. The innovative tagging system enables users to seamlessly search for and discover blogs that align with their interests, fostering a sense of community engagement and connection."
          ProjectLink="https://github.com/boatman-27/Blog_app"
        />

        <ProjectBackbone
          ProjectTitle="My Tracker"
          ProjectImage={MyTracker}
          ProjectAlt="My Tracker"
          ProjectDesc="My Tracker website seamlessly combines the power of Flask as its robust backend and React.js as its dynamic frontend, creating an intuitive and aesthetically pleasing platform for users to effortlessly track their daily activities. With three main pages—Jobs, Todo, and Expenses—the website offers a unique and streamlined experience. On the Jobs page, users can input and manage information about the jobs they've applied for, ensuring a comprehensive overview of their professional pursuits. The Todo page provides a dynamic task management system, allowing users to input tasks, mark them as completed, and efficiently organize their daily responsibilities. The Expenses page serves as a sophisticated expense tracker, enabling users to record both income and expenses seamlessly, with entries elegantly displayed in tables for a clear visual representation of financial activities. Leveraging the robust capabilities of Firebase as the database of choice."
          ProjectLink="https://github.com/boatman-27/MyTracker"
        />

        <ProjectBackbone
          ProjectTitle="My Tracker V2"
          ProjectImage={MyTrackerv2}
          ProjectAlt="My Tracker V2"
          ProjectDesc="Introducing the second iteration of My Tracker, now offering an enhanced user experience through the integration of React for the frontend and Express with Node.js for the backend. Seamlessly hosted on Vercel, My Tracker v2 retains all the features of its predecessor, My Tracker v1. The Todo page remains a dynamic task manager, facilitating effortless input, completion marking, and organisation of daily responsibilities. The Expenses page continues to function as a sophisticated financial tracker, displaying income and expense entries in clear tables. The Jobs page completes the trio, providing a comprehensive tool for managing professional pursuits. A new addition to My Tracker v2 is the Travel page, fulfilling a personal dream to explore the world. This page features a map where I can enter the name of the country I visited, and its colour changes on the map, marking it as visited. Under the hood, My Tracker v2 harnesses the power of Express and Node.js for the backend, enhancing performance and scalability. The migration to PostgreSQL as the chosen database ensures reliable and flexible data management tailored to each user's preferences."
          ProjectLink="https://github.com/boatman-27/My_Tracker-v2"
        />

        <ProjectBackbone
          ProjectTitle="Unit Converter"
          ProjectImage={UnitConverter}
          ProjectAlt="Unit Converter"
          ProjectDesc="Introducing the Unit Conversion Program, a versatile Python tool developed for seamless and accurate conversion across various unit categories. Built with a clean and modular code structure, this program leverages the power of the Pandas library for efficient handling of conversion factors. Covering a wide range of units, including area, data transfer rate, energy, frequency, fuel economy, length, mass, plane angle, pressure, speed, temperature, time, and volume, the program provides an intuitive user interface for selecting specific units and entering values. Special attention has been given to temperature conversion, offering dynamic calculations for Celsius, Fahrenheit, and Kelvin units. The program's use of Pandas ensures precise and reliable results, making it a valuable tool for students and professionals alike."
          ProjectLink="https://github.com/boatman-27/Unit_Converter"
        />

        <ProjectBackbone
          ProjectTitle="From Ocean to Plate"
          ProjectImage={fromOceanToPlate}
          ProjectAlt="From Ocean to Plate"
          ProjectDesc="My Bachelor's thesis project involved the creation of a dynamic website using React.js for the frontend and the development of essential smart contracts using Solidity. This platform was designed for all participants in the seafood supply chain, like customers, fishermen, processing and distribution companies, and the system owner. Notably, the project encompassed the implementation of three critical smart contracts for managing transactions, licensing, and adding seafood items to the blockchain to be available for purchase by customers after being processed and distributed. Ganache was used to support the Blockchain functionality."
          ProjectLink="https://github.com/boatman-27/seafood-solidity-react"
        />

        <ProjectBackbone
          ProjectTitle="Pomodoro Timer"
          ProjectImage={Pomodoro}
          ProjectAlt="Pomodoro Timer"
          ProjectDesc="The Pomodoro timer application is a tool designed to enhance time management and productivity. It uses the Pomodoro Technique, which breaks work into intervals separated by short breaks. Users can set customizable durations for work sessions, short and long breaks. The timer function allows users to start and reset the timer, and checkmarks indicate completed work intervals. The application also features a to-do list, allowing users to input tasks and manage them alongside the timer. Tasks can be added, checked off, and removed as needed. Tasks are stored in a text file to ensure tasks remain intact across different sessions. Built using Tkinter, the user-friendly interface is intuitive and easy to navigate."
          ProjectLink="https://github.com/boatman-27/Pomodoro"
        />

        <ProjectBackbone
          ProjectTitle="Fish Recognition and Weight Estimation"
          ProjectImage={FishWeight}
          ProjectAlt="Fish Recognition and Weight Estimation"
          ProjectDesc="The Fish Species Detection and Weight Estimation project is a comprehensive Python-based solution that leverages the power of YOLOv8 for accurate fish species identification and subsequently estimates the weight of the detected fish. This project seamlessly integrates with a Django web application, providing users with an intuitive and user-friendly interface to interact with the system."
          ProjectLink="https://github.com/boatman-27/Fish_Recognition_and_weight"
        />

        <ProjectBackbone
          ProjectTitle="FishSpecAI: Species Identification with Deep Learning"
          ProjectImage={FishAi}
          ProjectAlt="FishSpecAI: Species Identification with Deep Learning"
          ProjectDesc="FishSpecAI is a deep learning project aimed at automating fish species identification. Using a dataset found on Kaggle, this Python-based endeavor comprises three key components. The first file is dedicated to training and generating the 'model.h5' file. The second file allows users to deploy the trained model, providing immediate species predictions when provided with an image. The third file offers valuable insights by presenting the percentage likelihood of the identified species."
          ProjectLink="https://github.com/boatman-27/SpeciesGuesser"
        />

        <ProjectBackbone
          ProjectTitle="Flappy Bolbol"
          ProjectImage={Bolbol}
          ProjectAlt="Flappy Bolbol"
          ProjectDesc="Flappy BolBol is my personal adaptation of the classic Flappy Bird game, developed using the versatile Unity game engine. This whimsical and engaging game introduces players to a charming bird named BolBol, who takes on the challenging world of endless obstacles. The game mechanics are simple yet addictive: tap to make BolBol flap its wings and navigate through a maze of pipes."
          ProjectLink="https://github.com/boatman-27/flappy_bolbol"
        />
      </div>
    </div>
  );
};

export default Projects;
