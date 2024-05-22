// --------------------------------------- Project List
import nextTripImage from "../Assets/projectImgs/nextTrip.png";
import museumObjDetectionImg from "../Assets/projectImgs/museumObjDetection.jpeg";
import thrifeeImg from "../Assets/projectImgs/thriftee.png";
import askReference from "../Assets/projectImgs/askReference.png";
import marvelStoriesImg from "../Assets/projectImgs/marvelStories.png";
import covidProImg from "../Assets/projectImgs/covidPro.png";
import sudokuSolverImg from "../Assets/projectImgs/sudoku.png";

import jsImg from "../Assets/techStackImgs/js.png";
import reactImg from "../Assets/techStackImgs/react.png";
import pythonImg from "../Assets/techStackImgs/python.png";
import mySqlImg from "../Assets/techStackImgs/mysql.png";
import nodejsImg from "../Assets/techStackImgs/nodejs.png";

export const ProjectList = [
  {
    img: museumObjDetectionImg,
    title: "Colombo National Museum Object Detection",
    description:
      "• To solve the issue of most items in the Colombo national museum being unlabelled, this app detects the unlabelled garments in the museum and gives information on them from the museum registries.",
    tech_stack: "Javascript, TensorFlow, Jupyter, IBM Cloud storage, Vercel",
    github_url: "https://github.com/ChamaliVishmani/museum-object-detection",
    demo_url: "https://your_project_demo_link",
  },
  {
    img: marvelStoriesImg,
    title: "Marvel Stories",
    description:
      "• Uses the marvel API to retrieve the stories of a user given character and gives the title and description of each story",
    tech_stack: "Reactjs, Marvel API, ChakraUI",
    github_url: "https://github.com/ChamaliVishmani/marvel_stories",
    demo_url: "https://your_project_demo_link",
  },
  {
    img: sudokuSolverImg,
    title: "Sudoku Solver",
    description: "• Sudoku/ Hexadoku solver using openCV",
    tech_stack: "Python, OpenCV",
    github_url: "https://github.com/ChamaliVishmani/Sudoku_Solver",
    demo_url: "https://your_project_demo_link",
  },
  {
    img: askReference,
    title: "Ask your reference book",
    description:
      "• A project that uses AI to answer questions from a reference book.\n• This is done by using the ChromaDB and Ollama AI models to answer questions from an uploaded pdf.",
    tech_stack: "Python, ChromaDB, Jupyter, Ollama, Langchain",
    github_url: "https://github.com/ChamaliVishmani/Ask-your-reference-book",
    demo_url: "https://your_project_demo_link",
  },
  {
    img: nextTripImage,
    title: "Next Trip",
    description:
      "(Data management project : Semester 06)\n• To solve the issue of tuk drivers not having a proper way to find locations to find more rides, this application provides insight on times and locations a driver could get more rides based on past rides data",
    tech_stack: "Python, React, MongoDB, Jupyter, Flask",
    github_url: "https://github.com/ChamaliVishmani/Next-Trip",
    demo_url: "https://your_project_demo_link",
  },
  {
    img: thrifeeImg,
    title: "Thriftee",
    description:
      "(Computer Engineering Project : Semester 05)\n• A mobile application that can be used by its users to sell and purchase items. This provides small businesses a cost-effective platform to conduct their business and other users a way to make a small income",
    tech_stack: "Reactjs, Firebase",
    github_url: "https://github.com/ChamaliVishmani/Thriftee",
    demo_url: "https://your_project_demo_link/",
  },
  {
    img: covidProImg,
    title: "Covid Pro",
    description:
      "(Software Engineering Project : Semester 04)\n• An integrated system developed with the intention of being used by shops to ensure that their customers and staff follow some of the most essential protocols againts Covid-19 spread.",
    tech_stack: "Arduino, TensorFlow,React, MongoDB",
    github_url: "https://github.com/CovidPro",
    demo_url: "https://your_project_demo_link",
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: jsImg,
    name: "JavaScript",
  },
  {
    img: reactImg,
    name: "ReactJS",
  },
  {
    img: nodejsImg,
    name: "NodeJS",
  },
  {
    img: pythonImg,
    name: "Python",
  },
  {
    img: mySqlImg,
    name: "MySQL",
  },
];
