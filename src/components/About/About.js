import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

import officialPhoto from "../../Assets/Official_photo.jpeg";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image src={officialPhoto} alt="man-svgrepo" />
          <div className="AboutBio">
            Hello! My name is <strong>Chamali Vishmani</strong> <br />I am a
            Final-year Computer Engineering undergraduate passionate about Full
            stack development. Currently I'm also learning about AI/ ML.
            <br />I am consistently on the journey of learning and developing to
            improve my skills.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
