import React from "react";
import {
  Typography,
  List,
  ListItem,
  Divider,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faResearchgate,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Hello! Hallo! こんにちは! 안녕하세요!
        </Typography>
      </div>
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

      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
      </div>
      <Typography>
        💎 <b>Data Science:</b> Python, Numpy, Pandas, Seaborn, Matplotlib,
        Scikit-Learn
        <br />
        💎 <b>Deep Learning Libraries:</b> Keras, Tensorflow, PyTorch
        <br />
        💎 <b>DevOps:</b> Docker, CircleCI
        <br />
        💎 <b>Cloud Services:</b> Amazon Web Services, IBM Cloud
        <br />
        💎 <b>Frontend Development:</b> HTML5, CSS3, JavaScript, TypeScript,
        React.js framework.
        <br />
        💎 <b>Backend Development:</b> Node.js, Express.js.
        <br />
        💎 <b>Databases:</b> MySQL, PostgreSQL, MongoDB
        <br />
        💎 <b>Protocols & APIs:</b> JSON, REST, GraphQL
        <br />
        💎 <b>Source Control Management:</b> git
        <br />
        💎 <b>Operating Systems:</b> Windows, MacOS, Linux (Debian and
        Arch-based Distros)
        <br />
        💎 <b>Scripting Tools:</b> Vim, Emacs
        <br />
        💎 <b>Scripting Languages:</b> perl, ruby, bash
        <br />
        💎 <b>Typesetting Tools:</b> LaTeX
        <br />
        💎 <b>Soft Skills:</b> Excellent Written and Verbal Communication,
        Critical Thinking Skills, Strong Interpersonal Skills
        <br />
      </Typography>
      <Divider style={{ margin: "20px 0px" }} />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Links
        </Typography>
      </div>
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
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/amogh-warkhandkar-517a4b174/"
            style={{ marginLeft: "20px" }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ marginRight: "10px" }}
              size="2x"
            />
            linkedin
          </Button>
          <Button
            variant="outlined"
            href="https://www.researchgate.net/profile/Amogh_Warkhandkar"
            style={{ marginLeft: "20px" }}
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
          <Button
            variant="outlined"
            href="https://drive.google.com/file/d/11z62-2rz4Hj-OnebP5Ay86aPQAYZWWoc/view?usp=sharing"
          >
            <FontAwesomeIcon
              icon={faFile}
              style={{ marginRight: "10px" }}
              size="2x"
            />
            multi page resume
          </Button>
          <Button
            variant="outlined"
            href="https://drive.google.com/file/d/1pE-JrhRatN1-R1kxu0z_l4qvoon0L7oa/view?usp=sharing"
            style={{ marginLeft: "20px" }}
          >
            <FontAwesomeIcon
              icon={faFile}
              style={{ marginRight: "10px" }}
              size="2x"
            />
            single page resume
          </Button>
        </ListItem>
      </List>
      <Divider style={{ margin: "20px 0px" }} />
      <div style={{ textAlign: "center" }}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button to="/about" component={Link}>
            about
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ margin: "0px 10px" }}
            />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Home;
