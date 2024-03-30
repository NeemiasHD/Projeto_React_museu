import React from "react";

import "./titleSecondery.css";
import BoasVindas from "../components/boasVindas/BoasVindas";
import TextCookie from "../components/CookieTextForPage/TextCookie";

function PoliticaCookiesPage() {
  return (
    <>
      <BoasVindas
        Title={"POLITICA DE COOKIES"}
        Imagem={"https://github.com/NeemiasHD/Projeto_React_museu/blob/main/src/img/backgroundCookiePage.jpg?raw=true"}
      />
      <TextCookie/>
    </>
  );
}

export default PoliticaCookiesPage;
