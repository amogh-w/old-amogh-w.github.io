import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import {
  Container,
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <HashRouter basename="/">
            <Grid item xs={12} sm={3}>
              <List>
                <ListItem>
                  <Typography variant="h4">Amogh Warkhandkar</Typography>
                </ListItem>
                <ListItem>
                  <Link to="/">
                    <Typography variant="h6">Home</Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/about">
                    <Typography variant="h6">About</Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/experience">
                    <Typography variant="h6">Experience</Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/research">
                    <Typography variant="h6">Research</Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/projects">
                    <Typography variant="h6">Projects</Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact">
                    <Typography variant="h6">Contact</Typography>
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Paper style={{ padding: "20px" }}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/experience" component={Experience} />
                <Route path="/research" component={Research} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
              </Paper>
            </Grid>
          </HashRouter>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
