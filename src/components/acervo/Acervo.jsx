import React, { useState, useEffect, useContext } from "react";
import BarraDePesquisa from "../BarraDePesquisa/BarraDePesquisa";
import RenderItens from "../RenderItens/RenderItens";
import PopUp from "../PopUp/PopUp";
import { UserContext } from "../../context/UserContext";

function Acervo({ TipoBusca }) {
  const [atualizarBusca, setAtualizarBusca] = useState(false); //serve pra atualizar o acervo quando deletamos algum item ou quando inserimos algum item,  atualizando na Barra de pesquisa!!!!
  const [PaginaAtual, SetPaginaAtual] = useState(1); //pagina do pagination...
  const [Lista, setLista] = useState([]);
  const [IdPopUp, SetIdPopUp] = useState();
  const [AtivarPopUp, SetAtivarPopUp] = useState(false);
  const { ModoEscuro } = useContext(UserContext);
  return (
    //o que está sendo enviado por parametro aqui é justamente os mecanismo de atualizar pagina atualizar lista e atualizar acervo no geral.
    <>
  
        <PopUp
          setAtualizarBusca={setAtualizarBusca}
          AtualizarBusca={atualizarBusca}
          id={IdPopUp}
          PopUpAtivo={AtivarPopUp}
          SetPopUp={SetAtivarPopUp}
          tipo={1}
        />

      <main
        className="MainBackground"
        style={
          ModoEscuro
            ? {
                backgroundColor: "var(--corFundoPreto)",
              
              }
            : { backgroundColor: "var(--corFundoBranco)", zIndex: "1" }
        }
      >
        <BarraDePesquisa
          setLista={setLista}
          atualizarBusca={atualizarBusca}
          setAtualizarBusca={setAtualizarBusca}
          PaginaAtual={PaginaAtual}
          TipoBusca={TipoBusca}
        />
        <RenderItens
          Lista={Lista}
          setAtualizarBusca={setAtualizarBusca}
          atualizarBusca={atualizarBusca}
          SetPaginaAtual={SetPaginaAtual}
          PaginaAtual={PaginaAtual}
          SetAtivarPopUp={SetAtivarPopUp}
          SetIdPopUp={SetIdPopUp}
          TipoBusca={TipoBusca}
        />
      </main>
    </>
  );
}

export default Acervo;
