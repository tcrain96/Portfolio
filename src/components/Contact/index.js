import React, { useState } from "react";
import "./index.css";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [requiredNameMessage, setRequiredNameMessage] = useState("");
  const [requiredEmailMessage, setRequiredEmailMessage] = useState("");
  const [requiredMessageMessage, setRequiredMessageMessage] = useState("");

  const { name, email, message } = formState;

  function handleMouseLeave(event) {
    switch (event.target.name) {
      case "email":
        if (event.target.value === "" || event.target.value === null) {
          setRequiredEmailMessage("Email is required");
        } else {
          setRequiredEmailMessage("");
        }
        break;

      case "name":
        if (event.target.value === "" || event.target.value === null) {
          setRequiredNameMessage("Name is required");
        } else {
          setRequiredNameMessage("");
        }
        break;

      case "message":
        if (event.target.value === "" || event.target.value === null) {
          setRequiredMessageMessage("Message is required");
        } else {
          setRequiredMessageMessage("");
        }
        break;

      default:
        break;
    }
  }

  function handleChange(event) {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email address.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="contact">
      <article className="contact-section">
        <h1>Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              defaultValue={name}
              onChange={handleChange}
              onMouseLeave={handleMouseLeave}
              name="name"
            />
          </div>
          {requiredNameMessage && (
            <div>
              <p className="error-text">{requiredNameMessage}</p>
            </div>
          )}
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              defaultValue={email}
              onBlur={handleChange}
              onMouseLeave={handleMouseLeave}
              name="email"
            />
          </div>
          {requiredEmailMessage && (
            <div>
              <p className="error-text">{requiredEmailMessage}</p>
            </div>
          )}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              defaultValue={message}
              onChange={handleChange}
              onMouseLeave={handleMouseLeave}
              rows="5"
            />
          </div>
          {requiredMessageMessage && (
            <div>
              <p className="error-text">{requiredMessageMessage}</p>
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
