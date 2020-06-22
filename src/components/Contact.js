import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
//import emailjs from "emailjs-com";

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
      <Typography variant="h4">Get in Touch</Typography>{" "}
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
        color="secondary"
        style={{ marginTop: "16px", marginBottom: "8px" }}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </div>
  );
};

export default Contact;
