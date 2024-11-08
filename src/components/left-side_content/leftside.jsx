import "./leftside.css";
import line1 from "/src/assets/line1.png";
import line2 from "/src/assets/line2.png";

const LeftSide = () => {
  return (
    <div className="left-side">
      <h1 className="main-heading">
        Welcome to Your
        <br />
        Freelancing Hub!
      </h1>
      <p className="main-P">
        We’re thrilled to have you here! Whether you're a client
        <br /> searching for skilled freelancers to bring your projects to life{" "}
        <br /> or a freelancer eager to find exciting opportunities, this is the{" "}
        <br /> place where connections are made, and ideas come to reality.{" "}
        <br /> Let's start building something amazing together!
      </p>

      <div className="img-container">
        <img className="first-v" src={line1} alt="vectore1" />
        <img className="second-v" src={line2} alt="vectore2" />
      </div>
    </div>
  );
};
export default LeftSide;
