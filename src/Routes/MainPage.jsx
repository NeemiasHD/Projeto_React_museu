import React from "react";
import BoasVindas from "../components/boasVindas/BoasVindas";
import Dividir_Itens from "../components/dividirItens/Dividir_Itens";
import Noticias from "../components/noticias/Noticias";
import Acervo from "../components/acervo/Acervo";
import Donate from "../components/doações/Donate";

function MainPage() {
  return (
    <div>
      
      <BoasVindas type={1} />
      <Dividir_Itens dividir={"NOTÍCIAS"} PrimeiroItem={1} BtnPlus={"MAIS"} />
      <Noticias />
      <Dividir_Itens dividir={"ACERVO"} BtnPlus={"VER TODO"} />
      <Acervo />
      <Dividir_Itens dividir={"DOAÇÃO"} BtnPlus={"REALIZAR"}/>
      <Donate />
    </div>
  );
}

export default MainPage;
