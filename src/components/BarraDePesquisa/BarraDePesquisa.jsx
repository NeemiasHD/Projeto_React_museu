import React, { useState, useEffect, useContext } from "react";
import "./BarraDePesquisa.css";
import itemFetch from "../../axios/api";
import { UserContext } from "../../context/UserContext";

async function BuscarTodos(PaginaAtual) {
  let response;
  PaginaAtual
    ? (response = await itemFetch.get(
        `/ItemAcervo/BuscarTodos?page=${PaginaAtual}&pageSize=6`
      ))
    : (response = await itemFetch.get(`/ItemAcervo/BuscarTodos`));
  const data = await response.data;
  return data;
}

function BarraDePesquisa({
  setLista,
  atualizarBusca,
  setAtualizarBusca,
  PaginaAtual,
  TipoBusca,
}) {
  const [PalavraChave, SetPalavraChave] = useState();
  const { ModoEscuro, setBuscaPorFiltroIsOn, BuscaPorFiltroIsOn } =
    useContext(UserContext);

  const HandleSearch = async () => {
    if (TipoBusca) {
      try {
        const response = await itemFetch.get(`/ItemAcervo/BuscarTodos`);
        const data = response.data;
        const filteredData = data.filter((item) =>
          item.nomeItem.toLowerCase().includes(PalavraChave.toLowerCase())
        );
        setLista(filteredData);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    } else {
      try {
        const response = await itemFetch.get(`/ItemAcervo/BuscarTodos`);
        const data = response.data;
        const filteredData = data.filter((item) =>
          item.nomeItem.toLowerCase().includes(PalavraChave.toLowerCase())
        );
        setLista(filteredData.slice(0, 6));
        if (PalavraChave == "") {
          setBuscaPorFiltroIsOn(false);
        } else {
          setBuscaPorFiltroIsOn(true);
        }
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      let result;
      TipoBusca
        ? (result = await BuscarTodos())
        : (result = await BuscarTodos(PaginaAtual));
      setLista(result); // se desejar atualizar o estado com o resultado
      setAtualizarBusca(false);
    }
    fetchData();
  }, [atualizarBusca]);

  return (
    <div className="Pesquisar">
      <input
        style={
          ModoEscuro
            ? { color: "var(--corFundoBranco)" }
            : { color: "var(--corFundoPreto)" }
        }
        className="InputBarraDePesquisa"
        placeholder="Pesquisar Item"
        type="text"
        onChange={(e) => {
          SetPalavraChave(e.target.value);
        }}
      />
      <button className="submitbtnSearch" onClick={HandleSearch}>
        <i
          class="bx bx-search-alt"
          style={{ color: "var(--corFundoBranco)" }}
        ></i>
      </button>
    </div>
  );
}

export default BarraDePesquisa;
