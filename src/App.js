import React, { useState } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import {
  CssBaseline,
  Container,
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  Button,
  Divider,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, purple, yellow } from "@material-ui/core/colors";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import profilePhoto from "./media/linkedin-circle.png";

const App = () => {
  const [darkState, setDarkState] = useState(
    window.localStorage.getItem("darkMode") === "true" ? true : false
  );
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: darkState ? blue : purple,
      secondary: yellow,
    },
  });

  const handleThemeChange = () => {
    const preference = darkState;
    setDarkState(!darkState);
    window.localStorage.setItem("darkMode", !preference);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Grid container spacing={3}>
            <HashRouter basename="/">
              <Grid item xs={12} sm={3}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={profilePhoto}
                    style={{
                      width: "50%",
                      paddingTop: "5%",
                    }}
                  />
                </div>
                <List>
                  <ListItem style={{ textAlign: "center" }}>
                    <Typography variant="h4">Amogh Warkhandkar</Typography>
                  </ListItem>
                  <ListItem style={{ justifyContent: "center" }}>
                    <Button
                      color="primary"
                      to="/"
                      component={Link}
                      variant="text"
                    >
                      Home
                    </Button>
                  </ListItem>
                  <ListItem style={{ justifyContent: "center" }}>
                    <Button
                      color="primary"
                      to="/about"
                      component={Link}
                      variant="text"
                    >
                      About
                    </Button>
                  </ListItem>
                  <ListItem style={{ justifyContent: "center" }}>
                    <Button
                      color="primary"
                      to="/experience"
                      component={Link}
                      variant="text"
                    >
                      Experience
                    </Button>
                  </ListItem>
                  <ListItem style={{ justifyContent: "center" }}>
                    <Button
                      color="primary"
                      to="/research"
                      component={Link}
                      variant="text"
                    >
                      Research
                    </Button>
                  </ListItem>
                  <ListItem style={{ justifyContent: "center" }}>
                    <Button
                      color="primary"
                      to="/projects"
                      component={Link}
                      variant="text"
                    >
                      Projects
                    </Button>
                  </ListItem>
                  <ListItem style={{ justifyContent: "center" }}>
                    <Button
                      color="primary"
                      to="/contact"
                      component={Link}
                      variant="text"
                    >
                      Contact
                    </Button>
                  </ListItem>
                  <Divider />{" "}
                  <ListItem style={{ justifyContent: "center" }}>
                    <Button
                      color="primary"
                      variant="body1"
                      onClick={handleThemeChange}
                    >
                      {!darkState ? (
                        <FontAwesomeIcon icon={faMoon} size="2x" />
                      ) : (
                        <FontAwesomeIcon icon={faSun} size="2x" />
                      )}
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={9}>
                <div
                  id="div1"
                  style={{
                    height: "98vh",
                    position: "relative",
                    paddingTop: "1%",
                  }}
                >
                  <div
                    id="div2"
                    style={{
                      // height: "100vh",
                      maxHeight: "100%",
                      overflow: "auto",
                    }}
                  >
                    <Paper style={{ padding: "20px" }}>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/experience" component={Experience} />
                      <Route path="/research" component={Research} />
                      <Route path="/projects" component={Projects} />
                      <Route path="/contact" component={Contact} />
                    </Paper>
                  </div>
                </div>
              </Grid>
            </HashRouter>
          </Grid>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
