import React, { useState } from "react";
import InputImagem from "../InputImagem/InputImagem";
import "./CadastroDeItem.css";
import itemFetch from "../../axios/api";
import { Cookies } from "react-cookie";
function CadastroDeItem({ type, id, atualizarAcervo }) {
  const [imagem, setImagem] = useState();
  const [LimparImputImagem, SetLimparImputImagem] = useState(false);
  return (
    <div className="ADICAODEPRODUTOS">
      <div className={type ? "CorpoNoticia" : "CorpoItem"}>
        <div
          className={type ? "IMGContainerInputNoticia" : "IMGContainerInput"}
        >
          <InputImagem
            setlimparImagem={SetLimparImputImagem}
            limparImagem={LimparImputImagem}
            ColocarImputImagem={setImagem}
            id={id}
            type={type}
          />
        </div>
        <div className="TituloDescricaoEBotaoItem">
          <input
            type="text"
            className={type ? "input Titulo" : "input Nome"}
            placeholder={type ? "Título" : "Nome"}
          />
          {type ? (
            <input
              type="text"
              className={"input Titulo TagNotica"}
              placeholder={"Tag Noticia"}
              maxLength={10}
            />
          ) : (
            <input
              type="text"
              className={"input Nome descricaoCurta"}
              placeholder={"Descricao Curta"}
              maxLength={90}
            />
          )}

          <textarea
            type="text"
            className={type ? "input DescricaoNoticia" : "input Descricao"}
            placeholder={type ? "Descrição Noticia" : "Descrição Produto"}
            maxLength={type ? 150 : 400}
          />
          <div
            className={
              type ? "salvarItemContainer Noti" : "salvarItemContainer"
            }
          >
            <a
              className={type ? "SaibaMais salvar Noti" : "SaibaMais salvar"}
              onClick={async () => {
                let NomeItem, TituloNoticia;
                type
                  ? (TituloNoticia =
                      document.querySelector(".input.Titulo").value)
                  : (NomeItem = document.querySelector(".input.Nome").value);

                let DescricaoItem, DescricaoNoticia;
                type
                  ? (DescricaoNoticia = document.querySelector(
                      ".input.DescricaoNoticia"
                    ).value)
                  : (DescricaoItem =
                      document.querySelector(".input.Descricao").value);
                let tagNoticia, descricaoCurta;

                type
                  ? (tagNoticia = document.querySelector(
                      ".input.Titulo.TagNotica"
                    ).value)
                  : (descricaoCurta = document.querySelector(
                      ".input.Nome.descricaoCurta"
                    ).value);
                let Imagem1Item = imagem;
                let ItemAcervo;
                let Noticias;
                type
                  ? (Noticias = {
                      TituloNoticia,
                      DescricaoNoticia,
                      tagNoticia,
                      Imagem1Item,
                    })
                  : (ItemAcervo = {
                      NomeItem,
                      DescricaoItem,
                      Imagem1Item,
                    });

                let response = await itemFetch.post(
                  type ? `/Noticias/Gravar` : `/ItemAcervo/Gravar`,
                  type ? Noticias : ItemAcervo
                );
                if (response.data.error) {
                  console.log(response.data.error);
                } else {
                  console.log(response.data);
                }

                atualizarAcervo(true);
              }}
            >
              Salvar
            </a>
            <i
              class="bx bx-trash"
              id="LimparInput"
              onClick={() => {
                document.querySelector(
                  type ? ".input.Titulo" : ".input.Nome"
                ).value = ``;
                document.querySelector(
                  type ? ".input.DescricaoNoticia" : ".input.Descricao"
                ).value = ``;
                SetLimparImputImagem(true);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroDeItem;
