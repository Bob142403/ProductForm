// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/sign-in/sign-in.component";
// import { AuthCheck } from "./components/auth-check/auth-check.component";
// import { LunchGroup } from "./components/lunch-group/lunch-group.component";
// import { DinnerGroup } from "./components/dinner-group/dinner-group.component";
import { SignUp } from "./components/sign-up/sign-up.component";
// import { BreakfastGroup } from "./components/breakfast-group/breakfast-group.component";
import { useState } from "react";

function App() {
  const [qwe, setQqwe] = useState<boolean>(false);
  console.log(qwe);
  return (
    <>
      {qwe ? (
        <SignIn qwer={() => setQqwe(false)} />
      ) : (
        <SignUp qwer={() => setQqwe(true)} />
      )}{" "}
    </>
    // <BrowserRouter basename="/">
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<AuthCheck children={<BreakfastGroup />} />}
    //     ></Route>
    //     <Route
    //       path="/lunch"
    //       element={<AuthCheck children={<LunchGroup />} />}
    //     />
    //     <Route
    //       path="/dinner"
    //       element={<AuthCheck children={<DinnerGroup />} />}
    //     />
    //     <Route path="/sign-in" element={<SignIn />} />
    //     <Route path="/sign-up" element={<SignUp />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
