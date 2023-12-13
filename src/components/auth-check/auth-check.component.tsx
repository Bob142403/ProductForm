import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/";

export const AuthCheck = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const qwe = await fetch(url + "auth", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: token || "",
          },
        });
        if (qwe.status === 400) {
          navigate("/sign-in");
        }
      } catch (err) {
        navigate("/sign-in");
      }
    })();
  }, []);

  return <>{children}</>;
};
