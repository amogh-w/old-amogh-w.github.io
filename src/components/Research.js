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
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Research = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Articles
        </Typography>
      </div>
      <Card style={{ marginBottom: "20px" }}>
        <img
          src="https://github.com/amogh-w/Paper-DevGAN/raw/master/Images/working_of_gans.png"
          style={{ width: "100%" }}
          alt="project"
        />
        <CardHeader title="Measuring Performance of Generative Adversarial Networks on Devanagari Script"></CardHeader>
        <CardContent style={{ paddingTop: "0px" }}>
          <Typography variant="body1">
            <Typography variant="caption">
              International Journal of Computer Applications, Foundation of
              Computer Science (FCS), NY, USA, Volume 176 - Number 33, Year of
              Publication: 2020
            </Typography>
            <Divider style={{ marginTop: "10px" }} />
            <List>
              <ListItem>
                ★ Authors: Amogh G. Warkhandkar, Baasit Sharief, Omkar B.
                Bhambure
              </ListItem>
              <ListItem>
                ★ Abstract: The working of neural networks following the
                adversarial philosophy to create a generative model is a
                fascinating field. Multiple papers have already explored the
                architectural aspect and proposed systems with potentially good
                results however, very few papers are available which implement
                it on a real-world example. Traditionally, people use the famous
                MNIST dataset as a Hello, World! example for implementing
                Generative Adversarial Networks (GAN). Instead of going the
                standard route of using handwritten digits, this paper uses the
                Devanagari script which has a more complex structure. As there
                is no conventional way of judging how well the generative models
                perform, three additional classifiers were built to judge the
                output of the GAN model. The following paper is an explanation
                of what this implementation has achieved.
              </ListItem>
              <ListItem style={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  href="https://www.researchgate.net/publication/342281657_Measuring_Performance_of_Generative_Adversarial_Networks_on_Devanagari_Script"
                >
                  <FontAwesomeIcon
                    icon={faEye}
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
          <Button to="/experience" component={Link}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ margin: "0px 10px" }}
            />
            experience
          </Button>
          <Button to="/projects" component={Link}>
            projects
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

export default Research;
