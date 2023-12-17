import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/sign-in/sign-in.component";
import { AuthCheck } from "./components/auth-check/auth-check.component";
import { LunchGroup } from "./components/lunch-group/lunch-group.component";
import { DinnerGroup } from "./components/dinner-group/dinner-group.component";
import { SignUp } from "./components/sign-up/sign-up.component";
import { BreakfastGroup } from "./components/breakfast-group/breakfast-group.component";
import { FinishPage } from "./pages/finish-page/finish-page.component";
import { HomePage } from "./pages/home-page/home-page.component";
import { HomeIntro } from "./pages/home-intro/home-intro.component";
import { RatingPage } from "./pages/rating-page/rating-page.component";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* <Route
          path="/"
          element={<AuthCheck children={<BreakfastGroup />} />}
        ></Route> */}
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<HomeIntro />} />
          <Route
            path="breakfast"
            element={<AuthCheck children={<BreakfastGroup />} />}
          >
            
          </Route>
          <Route
            path="lunch"
            element={<AuthCheck children={<LunchGroup />} />}
          />
          <Route
            path="dinner"
            element={<AuthCheck children={<DinnerGroup />} />}
          />
          <Route path="finish" element={<FinishPage />} />
          <Route path="rating" element={<RatingPage />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    // <HomePage />
  );
}

export default App;
