import React from "react";
import {
  Typography,
  List,
  ListItem,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Card style={{ marginBottom: "20px" }}>
        <CardHeader title="Object Detection Tool"></CardHeader>
        <CardContent style={{ paddingTop: "0px" }}>
          <Typography variant="body1">
            <Typography variant="caption">
              caMicroscope GSoC 2020 Code Challenge
            </Typography>
            <Divider style={{ marginTop: "10px" }} />
            <List>
              <ListItem>
                ★ React.js web application to experiment with the COCO Single
                Shot MultiBox Detection pre-trained model to detect objects
                through the User’s Webcam or another video source.
              </ListItem>
              <ListItem>
                ★ Technologies: Tensorflow.js, React.js, Node.js
              </ListItem>
              <ListItem style={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  href="https://github.com/amogh-w/React-Tensorflow-Object-Detection"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ marginRight: "10px" }}
                  />
                  View
                </Button>
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <CardHeader title="OCR Magic"></CardHeader>
        <CardContent style={{ paddingTop: "0px" }}>
          <Typography variant="body1">
            <Typography variant="caption">
              Smart India Hackathon 2020
            </Typography>
            <Divider style={{ marginTop: "10px" }} />
            <List>
              <ListItem>
                ★ React.js web application for utilizing optical character
                recognition techniques to extract information from documents
                with database integration.
              </ListItem>
              <ListItem>
                ★ Technologies: React.js, Tesseract.js, Node.js, Firebase,
                MongoDB, GraphQL
              </ListItem>
              <ListItem style={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  href="https://github.com/amogh-w/Hackathon-OCR-Magic"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ marginRight: "10px" }}
                  />
                  View
                </Button>
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <CardHeader title="Digital Wellbeing"></CardHeader>
        <CardContent style={{ paddingTop: "0px" }}>
          <Typography variant="body1">
            <Typography variant="caption">
              Semester V Internet of Things Miniproject
            </Typography>
            <Divider style={{ marginTop: "10px" }} />
            <List>
              <ListItem>
                ★ Cross-platform application for keeping track of moods of the
                user by interpreting facial features to assist mental health.
              </ListItem>
              <ListItem>
                ★ Technologies: Raspberry Pi, Faceapi.js, React.js, Socket.io,
                Node.js, Firebase, MongoDB, GraphQL
              </ListItem>
              <ListItem style={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  href="https://github.com/amogh-w/IOT-Digital-Wellbeing"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ marginRight: "10px" }}
                  />
                  View
                </Button>
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <CardHeader title="Classic Pong Game"></CardHeader>
        <CardContent style={{ paddingTop: "0px" }}>
          <Typography variant="body1">
            <Typography variant="caption">
              Semester IV Python Miniproject
            </Typography>
            <Divider style={{ marginTop: "10px" }} />
            <List>
              <ListItem>
                ★ Python implemented retro game from 1972 with database support
                including player and match customization.
              </ListItem>
              <ListItem>
                ★ Technologies: Python, Turtle, Tkinter, SQLite
              </ListItem>
              <ListItem style={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  href="https://github.com/amogh-w/PongGamePython"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ marginRight: "10px" }}
                  />
                  View
                </Button>
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <CardHeader title="Pluto Railway Registration and Login Portal"></CardHeader>
        <CardContent style={{ paddingTop: "0px" }}>
          <Typography variant="body1">
            <Typography variant="caption">
              Semester III Java Miniproject
            </Typography>
            <Divider style={{ marginTop: "10px" }} />
            <List>
              <ListItem>
                ★ Java implemented registration and login page with database
                support.
              </ListItem>
              <ListItem>★ Technologies: Java, Swing, MySQL</ListItem>
              <ListItem style={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  href="https://github.com/amogh-w/PlutoRailwayLogin"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ marginRight: "10px" }}
                  />
                  View
                </Button>
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Hexo Theme"></CardHeader>
        <CardContent style={{ paddingTop: "0px" }}>
          <Typography variant="body1">
            <Typography variant="caption">OnePlus Community</Typography>
            <Divider style={{ marginTop: "10px" }} />
            <List>
              <ListItem>
                ★ Android application to provide new customization opportunities
                for custom firmware users.
              </ListItem>
              <ListItem style={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  href="https://forums.oneplus.com/threads/modified-hexo-theme-for-cyanogenmod.310444/"
                >
                  <FontAwesomeIcon
                    icon={faChrome}
                    style={{ marginRight: "10px" }}
                  />
                  View
                </Button>
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
      <Divider style={{ margin: "20px 0px" }} />
      <div style={{ textAlign: "center" }}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button to="/research" component={Link}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ margin: "0px 10px" }}
            />
            research
          </Button>
          <Button to="/contact" component={Link}>
            contact
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

export default Projects;
