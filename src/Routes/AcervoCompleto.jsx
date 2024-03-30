import React from "react";
import Acervo from "../components/acervo/Acervo";
import "./titleSecondery.css";
import BoasVindas from "../components/boasVindas/BoasVindas";
function AcervoCompleto() {
  return (
    <>
      <BoasVindas Imagem={"/src/img/backgroundAcervo.JPG"} Title={"ACERVO"} />
      <Acervo TipoBusca={2} />
    </>
  );
}

export default AcervoCompleto;
