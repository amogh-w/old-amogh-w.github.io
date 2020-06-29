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
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Card style={{ marginBottom: "20px" }}>
        <CardHeader title="Vidyalankar Institute of Technology"></CardHeader>
        <CardContent style={{ paddingTop: "0px" }}>
          <Typography variant="body1">
            <Typography variant="caption">August 2017 - Present</Typography>
            <Divider style={{ marginTop: "10px" }} />
            <List>
              <ListItem>★ Course: B.E. in Information Technology</ListItem>
              <ListItem>★ Overall GPA: 8.19 (SEM I - V)</ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
      <Divider style={{ margin: "20px 0px" }} />
      <Typography variant="h4" gutterBottom>
        Work
      </Typography>
      <Card>
        <CardHeader title="JavaScript Developer and UI/UX Designer Intern @ Hyfunn"></CardHeader>
        <CardContent style={{ paddingTop: "0px" }}>
          <Typography variant="body1">
            <Typography variant="caption">
              Jun 2019 – Aug 2019 | 3 Months | Mumbai, India
            </Typography>
            <Divider style={{ marginTop: "10px" }} />
            <List>
              <ListItem>
                ★ Created an Academic Widget for the web and mobile application
                which encompassed all the major features of the application in
                one place, enriching the user experience.
              </ListItem>
              <ListItem>
                ★ Simplified the Event Management process by creating a Dynamic
                Calendar which fetched a personalized events list and displayed
                it to the user with an intuitive color palette.
              </ListItem>
              <ListItem>
                ★ Improved the aesthetics of the web and mobile application by
                redesigning multiple parts while researching the visual trends
                of similar applications in the social media domain like Facebook
                and Instagram.
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
          <Button to="/about" component={Link}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ margin: "0px 10px" }}
            />
            about
          </Button>
          <Button to="/research" component={Link}>
            research
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

export default Experience;
