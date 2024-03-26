import React, { useContext, useEffect, useState } from "react";
import "./ModoEscuro.css";
import { useCookies } from "react-cookie";
import { UserContext } from "../../context/UserContext";
function ModoEscuroBTN() {
  const [cookies, setCookies] = useCookies(["DarkMode", "cookieConsent"]);
  const { ModoEscuro, HandleToggleDarkMode } = useContext(UserContext);
  const HandleDarkMode = () => {
    if (cookies.cookieConsent == 1) {
      setCookies("DarkMode", !ModoEscuro, { path: "/" });
      
    }
    HandleToggleDarkMode();
  };
  return <i class="bx bxs-moon" onClick={HandleDarkMode}></i>;
}

export default ModoEscuroBTN;
