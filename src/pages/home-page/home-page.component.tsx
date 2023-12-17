import { Outlet } from "react-router-dom";
import NavBar from "../../components/nav-bar/nav-bar.component";

export const HomePage = () => {
  return (
    <>
      <NavBar></NavBar>

      <Outlet />
    </>
  );
};
