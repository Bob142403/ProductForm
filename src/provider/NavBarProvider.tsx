import React, { createContext, useState } from "react";

export const NavBarContext = createContext<{
  lang: "ENG" | "TJK" | "UZB";
  setLang: (newLang: "ENG" | "TJK" | "UZB") => void;
}>({
  lang: "ENG",
  setLang: () => {},
});

export const NavBarProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [lang, setLang] = useState<"ENG" | "TJK" | "UZB">(
    (localStorage.getItem("lang") as "ENG" & "TJK" & "UZB") || "ENG"
  );

  return (
    <NavBarContext.Provider
      value={{
        lang,
        setLang: (newLang: "ENG" | "TJK" | "UZB") => {
          localStorage.setItem("lang", newLang);
          setLang(newLang);
        },
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
