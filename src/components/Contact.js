import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  ButtonGroup,
  Divider,
} from "@material-ui/core";
//import emailjs from "emailjs-com";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMail({ ...mail, [name]: value });
  };

  const handleSubmit = (e) => {
    //const { name, email, subject, message } = mail;
    console.log(mail);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4">Get in Touch</Typography>{" "}
      </div>
      <TextField
        name="name"
        label="Name"
        margin="normal"
        value={mail.name}
        onChange={handleInput}
      ></TextField>
      <br />
      <TextField
        name="email"
        label="Email"
        margin="normal"
        value={mail.email}
        onChange={handleInput}
      ></TextField>
      <br />
      <TextField
        name="subject"
        label="Subject"
        margin="normal"
        value={mail.subject}
        onChange={handleInput}
      ></TextField>
      <br />
      <TextField
        name="message"
        label="Message"
        multiline
        rows={4}
        value={mail.message}
        onChange={handleInput}
        style={{ marginTop: "16px", marginBottom: "8px", width: "100%" }}
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "16px", marginBottom: "8px" }}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
      <Divider style={{ margin: "20px 0px" }} />
      <div style={{ textAlign: "center" }}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button to="/projects" component={Link}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ margin: "0px 10px" }}
            />
            projects
          </Button>
          <Button to="/" component={Link}>
            home
            <FontAwesomeIcon icon={faHome} style={{ margin: "0px 10px" }} />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Contact;
