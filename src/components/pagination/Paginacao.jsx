import React, { useState, useEffect, useContext } from "react";
import "./Paginacao.css";
import itemFetch from "../../axios/api";
import { UserContext } from "../../context/UserContext";

function Paginacao({ setPagina, PaginaAtual, AtualizarBusca,AtualizarSize }) {
  const { ModoEscuro } = useContext(UserContext);

  async function BuscarTodos() {
    const response = await itemFetch.get("/ItemAcervo/BuscarTodos");
    const data = await response.data;
    return data;
  }
  const [totalDePaginas, SetTotalDePaginas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      SetTotalDePaginas(await BuscarTodos(PaginaAtual));
    }
    fetchData();
  }, [AtualizarSize]);

  const pagesArray = Array.from(
    //criando array pra poder usar o map pra criar o tanto certo de botões de paginação
    { length: Math.ceil(totalDePaginas.length / 6) },
    (_, index) => index + 1
  );
  return (
    <>
      <div className="btnPaginacao">

        {pagesArray.map((pageNumber) => (
          <a
          style={ModoEscuro?{color:"var(--corFundoBranco)"}:{color:"var(--corFundoPreto)"}}
            key={pageNumber}
            onClick={() => {
              setPagina(pageNumber);
              AtualizarBusca(true);
              window.scrollTo({
                top: 1300,
                behavior: "smooth",
              });
            }}
            className={
              pageNumber === PaginaAtual ? "Pagina_Atual" : "PaginasNormais"
            }
          >
            {pageNumber}
          </a>
        ))}
        
      </div>
    </>
  );
}

export default Paginacao;
