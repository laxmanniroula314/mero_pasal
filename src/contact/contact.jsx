import React, { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="contact-us-container">
      <h2 className="hover:font-bold">Contact Us</h2>
      <p>We would love to hear from you! Please fill out the form below.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Enter the subject"
          />
          {errors.subject && <small className="error">{errors.subject}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message"
            rows="5"
          ></textarea>
          {errors.message && <small className="error">{errors.message}</small>}
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
