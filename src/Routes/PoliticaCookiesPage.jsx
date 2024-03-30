import React from "react";

import "./titleSecondery.css";
import BoasVindas from "../components/boasVindas/BoasVindas";
import TextCookie from "../components/CookieTextForPage/TextCookie";

function PoliticaCookiesPage() {
  return (
    <>
      <BoasVindas
        Title={"POLITICA DE COOKIES"}
        Imagem={"https://raw.githubusercontent.com/NeemiasHD/Projeto_React_museu/main/src/img/backgroundCookiePage.jpg"}
      />
      <TextCookie/>
    </>
  );
}

export default PoliticaCookiesPage;
