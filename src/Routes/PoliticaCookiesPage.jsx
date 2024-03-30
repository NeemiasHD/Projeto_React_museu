import React from "react";

import "./titleSecondery.css";
import BoasVindas from "../components/boasVindas/BoasVindas";
import TextCookie from "../components/CookieTextForPage/TextCookie";

function PoliticaCookiesPage() {
  return (
    <>
      <BoasVindas
        Title={"POLITICA DE COOKIES"}
        Imagem={"/src/img/backgroundCookiePage.jpg"}
      />
      <TextCookie/>
    </>
  );
}

export default PoliticaCookiesPage;
