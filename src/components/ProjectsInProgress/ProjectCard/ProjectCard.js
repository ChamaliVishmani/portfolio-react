import React from "react";
import { ProjectInProgressList } from "../../../data/ProjectDataInProgress";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {ProjectInProgressList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            {list.description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < list.description.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              {/* <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a> */}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
