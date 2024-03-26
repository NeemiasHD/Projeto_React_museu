import React, { useState, useEffect } from "react";
import BarraDePesquisa from "../BarraDePesquisa/BarraDePesquisa";
import RenderItens from "../RenderItens/RenderItens";
import PopUp from "../PopUp/PopUp";

function Acervo() {
  const [atualizarBusca, setAtualizarBusca] = useState(false); //serve pra atualizar o acervo quando deletamos algum item ou quando inserimos algum item,  atualizando na Barra de pesquisa!!!!
  const [PaginaAtual, SetPaginaAtual] = useState(1); //pagina do pagination...
  const [Lista, setLista] = useState([]);
  const [IdPopUp, SetIdPopUp] = useState();
  const [AtivarPopUp, SetAtivarPopUp] = useState(false);
  return (
    //o que está sendo enviado por parametro aqui é justamente os mecanismo de atualizar pagina atualizar lista e atualizar acervo no geral.
    <>
      <PopUp  setAtualizarBusca={setAtualizarBusca} AtualizarBusca={atualizarBusca} id={IdPopUp} PopUpAtivo={AtivarPopUp} SetPopUp={SetAtivarPopUp} tipo={1}/>
      <BarraDePesquisa
        setLista={setLista}
        atualizarBusca={atualizarBusca}
        setAtualizarBusca={setAtualizarBusca}
        PaginaAtual={PaginaAtual}
      />
      <RenderItens
        Lista={Lista}
        setAtualizarBusca={setAtualizarBusca}
        atualizarBusca={atualizarBusca}
        SetPaginaAtual={SetPaginaAtual}
        PaginaAtual={PaginaAtual}
        SetAtivarPopUp={SetAtivarPopUp}
        SetIdPopUp={SetIdPopUp}
      />
    </>
  );
}

export default Acervo;
