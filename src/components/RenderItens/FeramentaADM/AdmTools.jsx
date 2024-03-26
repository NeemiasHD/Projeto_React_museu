import React, { useContext } from "react";
import itemFetch from "../../../axios/api";
import { UserContext } from "../../../context/UserContext";
function AdmTools({
  ItemAcervo,
  SetModoEdicao,
  ImagemEdicao,
  SetImagemEdicao,
  setAtualizarBusca,//atualiza o acervo para as novas configuracoes
  ModoEdicao,//usado pra verificar se ha um item em edicao no moment
  type,
}) {
  const { User,ModoEscuro } = useContext(UserContext);
  
  return (
    <>
      <div className="FerramentasDEV" style={{ cursor: "pointer" }}>
        <i
          className="bx bxs-edit"
          id={
            type == 2
              ? `BotaoEditarNoticia${ItemAcervo.id}`
              : `BotaoEditar${ItemAcervo.id}`
          }
          style={
            type == 2
              ? {
                  
                  fontSize: "20px",
                  marginTop: "10px",
                  opacity: 1,
                  color: ModoEscuro?"var(--corFundoBranco)":"var(--corFundoPreto)"
                }
              : {
                color: ModoEscuro?"var(--corFundoBranco)":"var(--corFundoPreto)",
                  fontSize: "20px",
                  position: "absolute",
                  right: "3px",
                  bottom: "0px",
                  opacity: 1,
                }
          }
          onClick={async () => {
            if(ModoEdicao){
              alert("nao e possivel editar mais de 1 item por vez");
              return;
            }
            
            const BotaoEditar = document.getElementById(
              type == 2
                ? `BotaoEditarNoticia${ItemAcervo.id}`
                : `BotaoEditar${ItemAcervo.id}`
            );
            const BotoesDeEdicao = document.getElementById(
              type == 2
                ? `BotoesParaEdicaoNoticias${ItemAcervo.id}`
                : `BotoesParaEdicaoItemAcervo${ItemAcervo.id}`
            );

            BotaoEditar.style.opacity = 0;
            BotoesDeEdicao.style.display = "flex";
            //Parte A Ser EDITADA: IMAGEM DESCRICAO E TEXTO...
            SetModoEdicao(ItemAcervo.id);

            const Titulo = document.getElementById(
              type == 2
                ? `tituloNoticiaPequena${ItemAcervo.id}`
                : `TituloItem${ItemAcervo.id}`
            );
            const descricao = document.getElementById(
              type == 2
                ? `DescricaoNoticiaP${ItemAcervo.id}`
                : `descricaoProduto${ItemAcervo.id}`
            );
            Titulo.innerHTML = ItemAcervo.nomeItem;
            Titulo.style.border = "2px dotted black";
            descricao.innerHTML = ItemAcervo.descricaoItem;
            descricao.style.border = "2px dotted black";
            Titulo.classList.add(`SemLinhaAfter`);
          }}
        ></i>
      </div>
      <div
        id={
          type == 2
            ? `BotoesParaEdicaoNoticias${ItemAcervo.id}`
            : `BotoesParaEdicaoItemAcervo${ItemAcervo.id}`
        }
        style={
          type
            ? {
                fontSize: "25px",
                position: "relative",
                right: "-250px",
                display: "none",
              }
            : {
                fontSize: "25px",
                position: "absolute",
                right: "0px",
                bottom: "-3px",
                display: "none",
              }
        }
      >
        <i
          className="bx bx-x"
          id={
            type == 2
              ? `BotaoXNoticia${ItemAcervo.id}`
              : `BotaoX${ItemAcervo.id}`
          }
          style={
            type == 2
              ? {
                  position: "relative",
                  right: "-20px",
                  top: "0px",
                  color: ModoEscuro?"var(--corFundoBranco)":"var(--corFundoPreto)"
                  
                  
                }
              : {
                  fontSize: "25px",
                  position: "absolute",
                  right: "0px",
                  bottom: "0",
                  cursor: "pointer",
                  color: ModoEscuro?"var(--corFundoBranco)":"var(--corFundoPreto)"
                }
          }
         
          onClick={async () => {
            const BotaoEditar = document.getElementById(
              type == 2
                ? `BotaoEditarNoticia${ItemAcervo.id}`
                : `BotaoEditar${ItemAcervo.id}`
            );
            const BotoesDeEdicao = document.getElementById(
              type == 2
                ? `BotoesParaEdicaoNoticias${ItemAcervo.id}`
                : `BotoesParaEdicaoItemAcervo${ItemAcervo.id}`
            );
            BotaoEditar.style.opacity = 1;
            BotoesDeEdicao.style.display = "none";

            SetModoEdicao();

            const Titulo = document.getElementById(
              `TituloItem${ItemAcervo.id}`
            );
            const descricao = document.getElementById(
              `descricaoProduto${ItemAcervo.id}`
            );
            Titulo.innerHTML = ItemAcervo.nomeItem;
            Titulo.style.border = "0";
            descricao.innerHTML = ItemAcervo.descricaoItem;
            descricao.style.border = "0";
            Titulo.classList.remove(`SemLinhaAfter`);
          }}
        ></i>
        <i
          class="bx bx-trash"
          style={{
            fontSize: "20px",
            position: "absolute",
            right: "0px",
            left: "-25px",
            color: ModoEscuro?"var(--corFundoBranco)":"var(--corFundoPreto)",
            cursor: "pointer",
            backgroundColor: "red",
            width: 0,
          }}
          onClick={async () => {
            if (window.confirm(`Item ${ItemAcervo.id} será deletado!!`)) {
              if (type == 2) {
              } else {
                if (ItemAcervo.like.length > 0|| ItemAcervo.deslike.length>0) {
                  // Se houver likes, exclua-os
                  await Promise.all(
                    ItemAcervo.like.map(async (like) => {
                      await itemFetch.post(
                        `/AvaliacaoLike/Deletar?id=${like.id}`
                      );
                    })
                  );
                  await Promise.all(
                    ItemAcervo.deslike.map(async (deslike) => {
                      await itemFetch.post(
                        `/avaliacaoDeslike/Deletar?id=${deslike.id}`
                      );
                    })
                  );
                }
              }
              await itemFetch.post(
                type == 2
                  ? `/Noticias/Deletar?id=${ItemAcervo.id}`
                  : `/ItemAcervo/Deletar?id=${ItemAcervo.id}`
              );
              setAtualizarBusca(true);
            }
          }}
        ></i>
        <i
          class="bx bx-save"
          style={
            type
              ? {
                  position: "absolute",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: ModoEscuro?"var(--corFundoBranco)":"var(--corFundoPreto)"
                }
              : {
                  fontSize: "20px",
                  marginRight: "26px",
                  marginBottom: "4px",
                  cursor: "pointer",
                  color: ModoEscuro?"var(--corFundoBranco)":"var(--corFundoPreto)"
                }
          }
          onClick={async () => {
            let nomeItem = document.getElementById(
              type == 2
                ? `inputTituloNoticiaPequena${ItemAcervo.id}`
                : `EditTi${ItemAcervo.id}`
            ).value;
            let descricaoItem = document.getElementById(
              type == 2
                ? `InputDescricaoNoticiaP${ItemAcervo.id}`
                : `EditDes${ItemAcervo.id}`
            ).value;
            let tagNoticia_descricaoCurtaItem = document.getElementById(
              type == 2
                ? `inputTagNoticia${ItemAcervo.id}`
                : `DescricaoCurtaInputEdit${ItemAcervo.id}`
            ).value;
            
            
            
            let Objeto;
            if (type == 2) {
              let imagem1Item = ImagemEdicao
                ? ImagemEdicao
                : ItemAcervo.imagem1Item;
              Objeto = {
                id: ItemAcervo.id,
                tituloNoticia: nomeItem,
                descricaoNoticia: descricaoItem,
                imagem1Item: imagem1Item,
                tagNoticia: tagNoticia_descricaoCurtaItem,
              };
            } else {
              let imagem1Item = ImagemEdicao
                ? ImagemEdicao
                : ItemAcervo.imagem1Item;
              let id = ItemAcervo.id;
              Objeto = {
                id,
                nomeItem,
                descricaoItem,
                imagem1Item,
                descricaoCurtaItem: tagNoticia_descricaoCurtaItem

              };
              console.log(Objeto);
            }

            const response = await itemFetch.post(
              type == 2
                ? `/Noticias/Alterar?id=${ItemAcervo.id}`
                : `/ItemAcervo/Alterar?id=${ItemAcervo.id}`,
              Objeto
            );
            if (response.data.error) {
              alert("erro Ao Atualizar");
            } else {
              setAtualizarBusca(true);
              setTimeout(() => {
                SetImagemEdicao(null);
                setAtualizarBusca(true);
                document
                  .getElementById(
                    type == 2
                      ? `BotaoXNoticia${ItemAcervo.id}`
                      : `BotaoX${ItemAcervo.id}`
                  )
                  .click();
              }, 100);
            }
          }}
        ></i>
      </div>
    </>
  );
}

export default AdmTools;
