// import React from "react";
// import SignIn from "./component/signin";
// import SignUp from "./component/signup";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./component/signin";
import SignUp from "./component/signup";

const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  )
};

export default App;
