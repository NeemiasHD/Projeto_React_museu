import React, { useState, useEffect, useContext } from "react";
import "./BarraDePesquisa.css";
import itemFetch from "../../axios/api";
import { UserContext } from "../../context/UserContext";

async function BuscarTodos(PaginaAtual) {
  const response = await itemFetch.get(
    `/ItemAcervo/BuscarTodos?page=${PaginaAtual}&pageSize=6`
  );
  const data = await response.data;
  return data;
}

function BarraDePesquisa({
  setLista,
  atualizarBusca,
  setAtualizarBusca,
  PaginaAtual,
}) {
  const [PalavraChave, SetPalavraChave] = useState();
  const {ModoEscuro} = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
    
      const result = await BuscarTodos(PaginaAtual);
      setLista(result); // se desejar atualizar o estado com o resultado
      setAtualizarBusca(false);
    }
    fetchData();
  }, [atualizarBusca]);

  return (
    <div className="Pesquisar">
      <input
    style={ModoEscuro?{color:"var(--corFundoBranco)"}:{color:"var(--corFundoPreto)"}}
        className="InputBarraDePesquisa"
        placeholder="Pesquisar Item"
        type="text"
        onChange={(e) => {
          SetPalavraChave(e.target.value);
        }}
      />
      <button className="submitbtnSearch">
        <i class="bx bx-search-alt" style={ModoEscuro?{color:"var(--corFundoBranco)"}:{color:"var(--corFundoPreto)"}}></i>
      </button>
    </div>
  );
}

export default BarraDePesquisa;
