import "./button.css";
import { Link } from "react-router-dom";

const NextButton = ({ children, acctype, path }) => {
  return (
    <div className={acctype === "" ? "next-button_content" : "active"}>
      <Link
        to={path}
        className="next-button"
        style={{
          color: acctype ? "#fff" : "",
        }}
      >
        {children}
      </Link>
    </div>
  );
};

export default NextButton;
