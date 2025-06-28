import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qzjjdh9",//Reaplace with your EmailJS service ID
        "template_27cd24c",//replace with your EmailJSS template ID
        form.current,
        "E2h1csf5UBCwq_--H"//Replace with your EmailJS public key 
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 1000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer />

      <div className="contact-header">
        <h2>CONTACT</h2>
        <div className="contact-underline"></div>
        <p>
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      <div className="contact-form-container">
        <h3>
          Connect With Me <span>🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
          />
          <button type="submit" style={{fontSize: 17}}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
