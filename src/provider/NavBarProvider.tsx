import React, { createContext, useState } from "react";

export const NavBarContext = createContext<{
  lang: string;
  setLang: (newLang: "ENG" | "TJK") => void;
}>({
  lang: "ENG",
  setLang: () => {},
});

export const NavBarProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [lang, setLang] = useState<"ENG" | "TJK">(
    (localStorage.getItem("lang") as "ENG" & "TJK ") || "ENG"
  );

  return (
    <NavBarContext.Provider
      value={{
        lang,
        setLang: (newLang: "ENG" | "TJK") => {
          localStorage.setItem("lang", newLang);
          setLang(newLang);
        },
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
