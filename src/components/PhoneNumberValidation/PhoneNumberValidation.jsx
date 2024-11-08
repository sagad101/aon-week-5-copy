import React, { useState } from "react";
import "./PhonNumberValidation.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberValidation = ({ setIsValid }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (value) => {
    setPhoneNumber(value);
    const isValid = validatePhoneNumber(value);
    setIsValid(isValid);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className="validation-container">
      <p className="validation-p">Phone Number</p>
      <div className="phoneNumbervalidation-container">
        <PhoneInput
          inputStyle={{
            width: "620px",
            height: "48px",
            border: "1px solid #EBEBEB",
          }}
          className="input"
          country={"iq"}
          value={phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          inputProps={{
            required: true,
          }}
        />
      </div>

      {!validatePhoneNumber(phoneNumber) && isTouched && (
        <p className="error">Please enter a valid phone number.</p>
      )}
    </div>
  );
};

export default PhoneNumberValidation;
