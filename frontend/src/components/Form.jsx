import React, { useState, useEffect } from "react";
import axios from "axios";
import "./form.css";

const Form = ({ formType }) => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setName(savedData.name || "");
      setCountryCode(savedData.countryCode || "");
      setPhoneNumber(savedData.phoneNumber || "");
    }
  }, []);

  useEffect(() => {
    const formData = { name, countryCode, phoneNumber };
    if (name || countryCode || phoneNumber || countryCode) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [name, countryCode, phoneNumber]);

  const validatePhoneNumber = () => {
    let regex;
    switch (countryCode) {
      case "+1":
        regex = /^\(\d{3}\) \d{3}-\d{4}$/;
        break;
      case "+91":
        regex = /^\d{10}$/;
        break;
      case "+44":
        regex = /^07\d{9}$/;
        break;
      case "+61":
        regex = /^04\d{8}$/;
        break;
      case "+81":
        regex = /^0[789]0-\d{4}-\d{4}$/;
        break;
      default:
        return false;
    }
    return regex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { formType, name, countryCode, phoneNumber };

    const errors = {};
    if (!name.trim()) errors.name = "Name is required.";
    if (!countryCode) errors.countryCode = "Country code is required.";
    if (!validatePhoneNumber())
      errors.phoneNumber = "Invalid phone number format.";
    setErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      await axios.post("http://localhost:5000/api/forms/submit", formData);
      alert(`${formType} submitted successfully!`);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form_container">
      <h2>{formType === "A" ? "Form A" : "Form B"}</h2>
      <div className="form_field">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {errors.name && <p className="error">{errors.name}</p>}
      <div className="form_field">
        <label htmlFor="countryCode">Country Code:</label>
        <select
          id="countryCode"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
          <option value="">Select Country Code</option>
          <option value="+1">+1</option>
          <option value="+91">+91</option>
          <option value="+44">+44</option>
          <option value="+61">+61</option>
          <option value="+81">+81</option>
        </select>
      </div>
      {errors.countryCode && <p className="error">{errors.countryCode}</p>}
      <div className="form_field">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          id="phoneNumber"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      <button type="submit" className="btn primary sm form_sumbit">
        Submit
      </button>
    </form>
  );
};

export default Form;
