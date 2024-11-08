import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SelectAccountType from "./screens/SelectAccType/selectacc";
import PhoneNumber from "./screens/EnterPhoneNumber/phonenumber";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectAccountType />} />
          <Route path="/phonenumber" element={<PhoneNumber />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
