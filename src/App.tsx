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
import { CategoryPage } from "./pages/category-page/category-page.component";
import { useContext } from "react";
import { ToolsContext } from "./provider/ToolsProvider";
import { CommentsPage } from "./pages/comments-page/comments-page.component";

function App() {
  const { contextHolder } = useContext(ToolsContext);
  return (
    <>
      {contextHolder}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="" element={<HomeIntro />} />
            <Route
              path="breakfast"
              element={<AuthCheck children={<BreakfastGroup />} />}
            ></Route>
            <Route
              path="lunch"
              element={<AuthCheck children={<LunchGroup />} />}
            />
            <Route
              path="dinner"
              element={<AuthCheck children={<DinnerGroup />} />}
            />
            <Route
              path="finish"
              element={<AuthCheck children={<FinishPage />} />}
            />
            <Route
              path="rating"
              element={<AuthCheck children={<RatingPage />} />}
            />
            <Route path="category" element={<CategoryPage />} />
            <Route path="comments" element={<CommentsPage />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
