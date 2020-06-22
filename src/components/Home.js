import React from "react";
import { Typography, List, ListItem, Divider, Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faResearchgate,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Hello! Hallo! こんにちは! 안녕하세요!
      </Typography>
      <Divider style={{ margin: "20px 0px" }} />
      <Typography variant="body1" gutterBottom>
        I am a 20 year old engineering student and developer who wants to change
        the world for the better with the help of technology.
        <br />
        I write stuff in JavaScript and Python.
        <br /> I love Artificial Intelligence and the maths behind it. It's
        simple and complex at the same time. I plan to understand it all.
        <br /> All of my projects are open sourced and well documented in my
        GitHub repositories. Pull requests are welcomed.
        <br /> Almost everything can be done from a terminal. The Arch wiki has
        all the solutions to my problems.
        <Divider style={{ margin: "20px 0px" }} />
        “Why waste time say lot word when few word do trick?” - Kevin Malone
        <Divider style={{ margin: "20px 0px" }} />
      </Typography>
      <Typography variant="body1">Links:</Typography>
      <List>
        <ListItem>
          <Button variant="outlined" href="https://github.com/amogh-w">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ marginRight: "10px" }}
              size="2x"
            />
            github
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/amogh-warkhandkar-517a4b174/"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ marginRight: "10px" }}
              size="2x"
            />
            linkedin
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="outlined"
            href="https://www.researchgate.net/profile/Amogh_Warkhandkar"
          >
            <FontAwesomeIcon
              icon={faResearchgate}
              style={{ marginRight: "10px" }}
              size="2x"
            />
            researchgate
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" href="#">
            <FontAwesomeIcon
              icon={faFile}
              style={{ marginRight: "10px" }}
              size="2x"
            />
            resume
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" href="#">
            <FontAwesomeIcon
              icon={faFile}
              style={{ marginRight: "10px" }}
              size="2x"
            />
            single page resume
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

export default Home;
