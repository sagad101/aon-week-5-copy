import Container from "../../components/Container/container";
import "./selectacc.css";
import ProgressLine from "../../components/progressLine/ProgressLine";
import AccountType from "../../components/AccountType/accounttype";
import LeftSide from "../../components/left-side_content/leftside";
import Main from "../../components/Main/Main";

const SelectAccountType = () => {
  return (
    <Container>
      <Main>
        <LeftSide />
        <div className="right-side">
          <ProgressLine />
          <div className="text-content">
            <h1 className="right-side_heading">Let’s Get started!</h1>
            <p className="right-side_P">How do you plan to use this platform</p>
          </div>
          <AccountType />
        </div>
      </Main>
    </Container>
  );
};

export default SelectAccountType;
