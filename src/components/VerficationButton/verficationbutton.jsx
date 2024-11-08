import React from "react";
import { Link } from "react-router-dom";
import "./verficationbutton.css";

const Verficationbutton = ({ children, valid }) => {
  return (
    <div
      style={{
        backgroundColor: valid ? "#3C97AF" : "",

        cursor: valid ? "pointer" : "not-allowed",
      }}
      disabled={!valid}
      className="verfication-content"
    >
      <Link
        style={{ color: valid ? "white" : "" }}
        className="verficationbutton"
      >
        {children}
      </Link>
    </div>
  );
};

export default Verficationbutton;
