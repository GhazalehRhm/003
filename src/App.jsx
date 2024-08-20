import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Otp from "./components/OTP/Otp";
import { createContext, useContext, useState } from "react";
import { EndPage } from "./components/EndPage/EndPage";

const userContext = createContext(null);

export const useUser = () => {
  return useContext(userContext);
};
function App() {
  const [state, setState] = useState();

  return (
    <userContext.Provider value={{ state, setState }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/endPage" element={<EndPage />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
