import React from "react";
import Acervo from "../components/acervo/Acervo";
import "./titleSecondery.css";
import BoasVindas from "../components/boasVindas/BoasVindas";
function AcervoCompleto() {
  return (
    <>
      <BoasVindas Imagem={"https://raw.githubusercontent.com/NeemiasHD/Projeto_React_museu/main/src/img/backgroundAcervo.jpg"} Title={"ACERVO"} />
      <Acervo TipoBusca={2} />
    </>
  );
}

export default AcervoCompleto;
