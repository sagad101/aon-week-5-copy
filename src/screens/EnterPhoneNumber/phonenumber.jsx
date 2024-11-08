import "./phonenumber.css";
import Container from "../../components/Container/container";
import LeftSide from "../../components/left-side_content/leftside";
import Main from "../../components/Main/Main";
import ProgressLine from "../../components/progressLine/ProgressLine";
import PhoneNumberValidation from "../../components/PhoneNumberValidation/PhoneNumberValidation";
import Verficationbutton from "../../components/VerficationButton/verficationbutton";
import { useState } from "react";

const PhoneNumber = () => {
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  return (
    <Container>
      <Main>
        <LeftSide />
        <div className="phon-right">
          <ProgressLine />
          <div className="phonetext-content">
            <h1 className="phoneright-side_heading">Enter Your Phone Number</h1>
            <p className="phoneright-side_P">
              Enter your phone number to verify your identity and the validity
              of your number to safely activate your account on the platform.
            </p>
          </div>
          <PhoneNumberValidation setIsValid={setIsPhoneNumberValid} />
          <Verficationbutton valid={isPhoneNumberValid}>
            Send verification code
          </Verficationbutton>
        </div>
      </Main>
    </Container>
  );
};

export default PhoneNumber;
