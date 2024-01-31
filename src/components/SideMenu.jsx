import React, { useContext, useState } from "react";
import { esFlag, usFlag, moon, profile, sun } from "../assets";
import { LangContext } from "../config/LangContext";
import { darkSideMenu, lightSideMenu } from "../style/theme";
import { ThemeContext } from "../config/ThemeContext";

const SideMenu = ({switchTheme}) => {
  var [theme] = useContext(ThemeContext);
  var { lang, setLang } = useContext(LangContext);

  const switchLanguage = () => {
    if (lang === "es") {
      document.getElementById("btnFlag").src = usFlag;
      setLang("us");
    } else {
      document.getElementById("btnFlag").src = esFlag;
      setLang("es");
    }
  };

  return (
    <div className={theme === 'light' ? lightSideMenu : darkSideMenu} id="divSideMenu">
      <button>
        <img src={profile} alt="Profile Info" className="h-9 fill-gray-50" />
      </button>
      <button onClick={switchTheme}>
        <img src={theme === 'light' ? sun : moon} className="h-9" id="btnTheme" />
      </button>
      <button onClick={switchLanguage}>
        <img src={esFlag} className="h-9" id="btnFlag" />
      </button>
    </div>
  );
};

export default SideMenu;
