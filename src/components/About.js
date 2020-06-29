import React from "react";
import {
  Typography,
  Divider,
  List,
  ListItem,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows, faLinux } from "@fortawesome/free-brands-svg-icons";
import { faCode, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Development Environment
      </Typography>
      <Divider style={{ margin: "20px 0px" }} />
      <Typography variant="body1" gutterBottom>
        <FontAwesomeIcon icon={faWindows} style={{ marginRight: "10px" }} />
        Windows with WSL2
        <List>
          <ListItem>i7 4790K</ListItem>
          <ListItem>Gigabyte Z97X Gaming 5</ListItem>
          <ListItem>GTX 960 2GB</ListItem>
          <ListItem>8GB Corsair Vengeance</ListItem>
        </List>
      </Typography>
      <Typography variant="body1" gutterBottom>
        <FontAwesomeIcon icon={faLinux} style={{ marginRight: "10px" }} />
        MSI GV62 7RE running Manjaro
        <List>
          <ListItem>i7 7700HQ</ListItem>
          <ListItem>GTX 1050Ti 4gb</ListItem>
        </List>
      </Typography>
      <Divider style={{ margin: "20px 0px" }} />
      <Typography variant="body1" gutterBottom>
        <FontAwesomeIcon icon={faKeyboard} style={{ marginRight: "10px" }} />
        Hardware
        <List>
          <ListItem>
            HyperX Alloy Elite RGB Keyboard with Cherry MX Blue Keys
          </ListItem>
          <ListItem>Logitech G403</ListItem>
          <ListItem>Steelseries Arctis 5</ListItem>
        </List>
      </Typography>
      <Divider style={{ margin: "20px 0px" }} />
      <Typography variant="body1" gutterBottom>
        <FontAwesomeIcon icon={faCode} style={{ marginRight: "10px" }} />
        Code Editors
        <List>
          <ListItem>
            Visual Studio Code with many extensions which you can find in
            <Button
              variant="outlined"
              href="https://gist.github.com/amogh-w/a7eb9470b0691a6e8d817dd2153dcbbb"
              style={{ marginLeft: "10px" }}
            >
              gist
            </Button>
          </ListItem>
          <ListItem>
            Vim with minimal plugins which you can find in
            <Button
              variant="outlined"
              href="https://github.com/amogh-w/dotfiles/blob/master/vim/.vimrc"
              style={{ marginLeft: "10px" }}
            >
              vimrc
            </Button>
          </ListItem>
        </List>
      </Typography>
      <Divider style={{ margin: "20px 0px" }} />
      <Typography variant="body1" gutterBottom>
        <FontAwesomeIcon icon={faTerminal} style={{ marginRight: "10px" }} />
        Terminal
        <List>
          <ListItem>
            Kitty or Alacritty with oh-my-zsh and spaceship prompt
          </ListItem>
        </List>
      </Typography>
      <Divider style={{ margin: "20px 0px" }} />
      <div style={{ textAlign: "center" }}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button to="/" component={Link}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ margin: "0px 10px" }}
            />
            home
          </Button>
          <Button to="/experience" component={Link}>
            experience
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

export default About;
