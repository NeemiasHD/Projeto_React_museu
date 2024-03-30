import React from "react";
import "./CookieConcentiment.css";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
function CookieConcentiment() {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookies("cookieConsent", 1, { path: "/" });
  };
  const RefuseCookieConsent = () => {
    setCookies("cookieConsent", 2, { path: "/" });
  };
  const TimerPopUpA = () => {
    document.querySelector(".Cookie").style.bottom="-100px"
    setTimeout(() => {giveCookieConsent()}, 2000);
  };
  const TimerPopUpR = () => {
    document.querySelector(".Cookie").style.bottom="-100px"
    setTimeout(() => {RefuseCookieConsent()}, 2000);
  };
  return (
    <div className="CookieConcentimentMain">
      <div className="Cookie">
        <i class="bx bxs-cookie"></i>
        <div className="textoCookie">
          <h1>Política de Cookies</h1>
          <p>
            Este site usa cookies para garantir uma experiência melhor. Ao
            continuar a navegar neste site, você concorda com o uso de cookies
            de acordo com nossa{" "}
            <Link to={"/PoliticaCookies"} className="PoliticaCookie" onClick={()=>{
               window.scrollTo({
                top: 0,
                
              });
            }}>Política de Cookies.</Link>
          </p>
        </div>
        <div className="ButtonsCookies">
          <a className="AceitarCookieBtn" onClick={TimerPopUpA}>
            Aceitar
          </a>
          <a className="RecusarCookieBtn" onClick={TimerPopUpR}>
            Recusar
          </a>
        </div>
      </div>
    </div>
  );
}

export default CookieConcentiment;
