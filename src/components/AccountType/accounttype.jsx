import { useState } from "react";
import "./accounttype.css";
import UserIcon from "../../assets/UserIcon";
import UserIcon2 from "../../assets/UserIcon2";
import NextButton from "../../components/Button/button";

const AccountType = () => {
  const [acctype, setacctype] = useState("");
  return (
    <div className="acc-container">
      <div className="accounttype-container">
        <div
          onClick={() => setacctype("freelancer")}
          className={`leftacc ${acctype === "freelancer" ? "select" : ""}`}
        >
          <UserIcon color={acctype === "freelancer" ? "#3c97af" : "black"} />
          <h5 className="freelancer">Freelancer</h5>
          <p className="freelancer-p">
            I’m a freelancer ready to work for <br /> projects
          </p>
        </div>
        <div
          onClick={() => setacctype("client")}
          className={`rightacc ${acctype === "client" ? "select" : ""}`}
        >
          <UserIcon2 color={acctype === "client" ? "#3c97af" : "black"} />
          <h5 className="client">Client</h5>
          <p className="client-p">
            I’m a client searching for talented <br /> freelancers
          </p>
        </div>
      </div>
      <NextButton acctype={acctype} path={"/phonenumber"}>
        Next <span className="arrow">&gt;</span>
      </NextButton>
    </div>
  );
};

export default AccountType;
