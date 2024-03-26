import React, { useContext, useEffect, useState } from "react";
import itemFetch from "../../axios/api";
import { UserContext } from "../../context/UserContext";
import "./ClassificationBtn.css";
function LikeEdeslikeClassificacaoBtn({ ItemAcervo, setAtualizarBusca }) {
  const [usuarioAvaliouLike, setUsuarioAvaliouLike] = useState(false);
  const [usuarioAvaliouDeslike, setUsuarioAvaliouDeslike] = useState(false);
  const { User, setUser, userIsLoggin, ModoEscuro } = useContext(UserContext);

  //verficando se existe like ou deslike no item acervo do User atual
  const RaterExist = async (id, userId, type) => {
    const response = await itemFetch.get(
      type == 2
        ? `/ItemAcervo/UsuarioAvaliouDeslike?itemId=${id}&userId=${userId}`
        : `/ItemAcervo/UsuarioAvaliouLike?itemId=${id}&userId=${userId}`
    );
    if (response.data.usuarioAvaliouLike === true) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    async function checkAvaliacao() {
      if (User.googleId) {
        const avaliouLike = await RaterExist(ItemAcervo.id, User.googleId);
        const avaliouDeslike = await RaterExist(
          ItemAcervo.id,
          User.googleId,
          2
        );
        setUsuarioAvaliouLike(avaliouLike);
        setUsuarioAvaliouDeslike(avaliouDeslike);
      } else {
        setUsuarioAvaliouLike(false);
        setUsuarioAvaliouDeslike(false);
      }
    }
    checkAvaliacao();
  }, [User.googleId, ItemAcervo.id]);

  const addAvaliation = async (like) => {
    if (userIsLoggin()) {
      if (
        (like && (await RaterExist(ItemAcervo.id, User.googleId))) ||
        (!like && (await RaterExist(ItemAcervo.id, User.googleId, 2)))
      ) {
        return;
      }
      if (await RaterExist(ItemAcervo.id, User.googleId)) {
        await itemFetch.post(
          `/ItemAcervo/RemoverLikeDoItem?id=${ItemAcervo.id}&IdUser=${User.googleId}`
        );
        setUsuarioAvaliouLike(false);
      }
      if (await RaterExist(ItemAcervo.id, User.googleId, 2)) {
        await itemFetch.post(
          `/ItemAcervo/RemoverDeslikeDoItem?id=${ItemAcervo.id}&IdUser=${User.googleId}`
        );
        setUsuarioAvaliouDeslike(false);
      }
      const NovaNota = {
        id: ItemAcervo.id,
        NomeItem: ItemAcervo.nomeItem,
        DescricaoItem: ItemAcervo.descricaoItem,
        Imagem1Item: ItemAcervo.imagem1Item,
      };

      let response = await itemFetch.post(
        `/ItemAcervo/Alterar?id=${ItemAcervo.id}`,
        NovaNota
      );

      if (response.data.error) {
        console.log(response.data.error);
      } else {
        console.log(response.data);
      }
      //gravando no item do acervo
      const Avalicao = {
        idUser: User.googleId,
      };

      response = await itemFetch.post(
        like
          ? `/ItemAcervo/AdicionarLikeAoItem?id=${ItemAcervo.id}`
          : `/ItemAcervo/AdicionarDesLikeAoItem?id=${ItemAcervo.id}`,
        Avalicao
      );

      if (response.data.error) {
        console.log(response.data.error);
      } else {
        console.log(response.data);
      }
      if (like) {
        setUsuarioAvaliouLike(true);
      } else {
        setUsuarioAvaliouDeslike(true);
      }
      setAtualizarBusca(true);
    } else {
      alert("faca o login para avaliar");
    }
  };
  return (
    <div className="Classificacaobtn">
      <i
        class="bx bxs-like"
        onClick={() => {
          addAvaliation(true);
        }}
        style={
          usuarioAvaliouLike
            ? { color: "#faaf00" }
            : ModoEscuro
            ? { color: "var(--corFundoBranco)" }
            : { color: "var(--corFundoPreto)" }
        }
      ></i>
      <i
        class="bx bxs-dislike"
        onClick={() => {
          addAvaliation();
        }}
        style={
          usuarioAvaliouDeslike
            ? { color: "red" }
            : ModoEscuro
            ? { color: "var(--corFundoBranco)" }
            : { color: "var(--corFundoPreto)" }
        }
      ></i>
    </div>
  );
}

export default LikeEdeslikeClassificacaoBtn;
