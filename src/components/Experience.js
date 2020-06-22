import React from "react";
import {
  Typography,
  List,
  ListItem,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from "@material-ui/core";

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
              <ListItem>B.E. in Information Technology</ListItem>
              <ListItem>Overall GPA: 8.19</ListItem>
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
    </div>
  );
};

export default Experience;
