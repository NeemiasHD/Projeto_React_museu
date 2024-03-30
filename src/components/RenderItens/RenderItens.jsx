import React, { useContext, useEffect, useState } from "react";
import "./RenderItens.css";
import InputImagem from "../InputImagem/InputImagem";
import Rating from "@mui/material/Rating";
import itemFetch from "../../axios/api";
import CadastroDeItem from "../CadastroDeItem/CadastroDeItem";
import Paginacao from "../pagination/Paginacao";
import CincoEstrelaClassificacao from "../Avaliacao/CincoEstrelaClassificacao";
import LikeEdeslikeClassificacaoBtn from "../Avaliacao/LikeEdeslikeClassificacaoBtn";
import AdmTools from "./FeramentaADM/AdmTools";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

function RenderItens({
  Lista,
  setAtualizarBusca,
  atualizarBusca,
  SetPaginaAtual,
  PaginaAtual,
  SetAtivarPopUp,
  SetIdPopUp,
  TipoBusca,
}) {
  const [ModoEdicao, SetModoEdicao] = useState();
  const { ModoEscuro, TypeUser, BuscaPorFiltroIsOn, setBuscaPorFiltroIsOn } =
    useContext(UserContext);
  const [ImagemEdicao, SetImagemEdicao] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await BuscarTodos(PaginaAtual);
  //     setLista(result); // se desejar atualizar o estado com o resultado
  //     setAtualizarBusca(false);
  //   }
  //   fetchData();
  // }, [atualizarBusca]);

  return Lista.length ? (
    <div className="containerRenderItens">
      <div className="ItensAcervo">
        {TypeUser == 2 && (
          <CadastroDeItem
            id={"AcervoImgADD"}
            atualizarAcervo={setAtualizarBusca}
          />
        )}
        {Lista.map((ItemAcervo) => (
          <div
            className="CorpoItem"
            key={ItemAcervo.id}
            style={
              ModoEscuro
                ? { backgroundColor: "var(--corFundoPreto)" }
                : { backgroundColor: "var(--corFundoBranco)" }
            }
          >
            <div className="IMGContainer" id={`IMGContainer${ItemAcervo.id}`}>
              {ModoEdicao == ItemAcervo.id ? (
                <InputImagem
                  Background={ItemAcervo.imagem1Item}
                  ColocarImputImagem={SetImagemEdicao}
                />
              ) : (
                <img
                  className="ImagemItem"
                  id={`ImagemItem${ItemAcervo.id}`}
                  src={ItemAcervo.imagem1Item}
                />
              )}
            </div>
            <div
              className="TituloDescricaoEBotaoItem"
              style={{ gap: ModoEdicao == ItemAcervo.id ? 10 : 0 }}
            >
              {ModoEdicao == ItemAcervo.id ? (
                <input
                  type="text"
                  maxLength={25}
                  className={`Edit tituloInput ${ItemAcervo.id}`}
                  id={`EditTi${ItemAcervo.id}`}
                  defaultValue={ItemAcervo.nomeItem}
                />
              ) : (
                <h1
                  className="TituloItem"
                  id={`TituloItem${ItemAcervo.id}`}
                  style={
                    ModoEscuro
                      ? { color: "var(--corFundoBranco)" }
                      : { color: "var(--corFundoPreto)" }
                  }
                >
                  {ItemAcervo.nomeItem}
                </h1>
              )}
              {ModoEdicao == ItemAcervo.id ? (
                <input
                  type="text"
                  className={`Edit DescricaoCurta `}
                  id={`DescricaoCurtaInputEdit${ItemAcervo.id}`}
                  placeholder="DescricaoCurta"
                  defaultValue={ItemAcervo.nomeItem}
                />
              ) : (
                ""
              )}

              {ModoEdicao == ItemAcervo.id ? (
                <textarea
                  placeholder="Descricao"
                  className={`Edit descricaoInput ${ItemAcervo.id}`}
                  id={`EditDes${ItemAcervo.id}`}
                  defaultValue={ItemAcervo.descricaoItem}
                />
              ) : (
                <h2
                  className="descricaoProduto"
                  id={`descricaoProduto${ItemAcervo.id}`}
                  style={
                    ModoEscuro
                      ? { color: "var(--corFundoBranco)" }
                      : { color: "var(--corFundoPreto)" }
                  }
                >
                  {ItemAcervo.descricaoCurtaItem}
                </h2>
              )}
              {ModoEdicao == ItemAcervo.id ? (
                <></>
              ) : (
                <div className="Classificacao">
                  <CincoEstrelaClassificacao
                    like={ItemAcervo.like.length}
                    deslike={ItemAcervo.deslike.length}
                  />
                  <a
                    className="SaibaMais"
                    onClick={() => {
                      SetIdPopUp(ItemAcervo.id);
                      SetAtivarPopUp(true);
                    }}
                  >
                    Saiba Mais
                  </a>

                  <LikeEdeslikeClassificacaoBtn
                    ItemAcervo={ItemAcervo}
                    setAtualizarBusca={setAtualizarBusca}
                  />
                </div>
              )}
            </div>
            {TypeUser == 2 && (
              <AdmTools
                ItemAcervo={ItemAcervo}
                SetModoEdicao={SetModoEdicao}
                ImagemEdicao={ImagemEdicao}
                SetImagemEdicao={SetImagemEdicao}
                setAtualizarBusca={setAtualizarBusca}
                ModoEdicao={ModoEdicao}
              />
            )}
          </div>
        ))}
      </div>
      {TipoBusca ? ( //Aqui estou verificando qual tipo de buscar esta sendo feito, se e por paginacao ou se e busca de todos
        ""
      ) : BuscaPorFiltroIsOn ? ( //se a buscar for feita por paginacao e tiver filtro, ele vai carregar so 6 e disponibilizar um link pra pagina completa
        <Link
          to={"/Acervo"}
          className="BotaoIrAcervoNoPagination"
          onClick={() => {
            window.scrollTo({
              top: 0,
            });
            setBuscaPorFiltroIsOn(false);
          }}
        >
          Ver mais...
        </Link>
      ) : (
        <Paginacao
          setPagina={SetPaginaAtual}
          PaginaAtual={PaginaAtual}
          AtualizarBusca={setAtualizarBusca}
          AtualizarSize={atualizarBusca}
        />
      )}
    </div>
  ) : (
    <>
      {TypeUser == 2 ? (
        <div className="containerEmptyAcervo">
          <CadastroDeItem
            id={"AcervoImgADD"}
            atualizarAcervo={setAtualizarBusca}
          />

          <p
            style={
              ModoEscuro
                ? { color: "var(--corFundoBranco)" }
                : { color: "var(--corFundoPreto)" }
            }
          >
            Nenhum Item Foi Encontrado!
            <span class="loader eae"></span>
          </p>
          {TipoBusca ? (
            ""
          ) : (
            <Paginacao
              setPagina={SetPaginaAtual}
              PaginaAtual={PaginaAtual}
              AtualizarBusca={setAtualizarBusca}
              AtualizarSize={atualizarBusca}
            />
          )}
        </div>
      ) : (
        <div className="loaderContainer" style={{height:"400px",gap:"20px"}}>
          <span class="loader eae"></span>
          <p
            style={
              ModoEscuro
                ? { color: "var(--corFundoBranco)" }
                : { color: "var(--corFundoPreto)" }
            }
          >
            Nenhum Item Foi Encontrado!
          </p>
        </div>
      )}
    </>
  );
}

export default RenderItens;
