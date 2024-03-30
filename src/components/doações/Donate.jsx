import React, { useContext } from "react";
import "./Donate.css";
import { UserContext } from "../../context/UserContext";

function Donate() {
  const { ModoEscuro } = useContext(UserContext);
  return (
  
      <div className="donateContainer" style={
        ModoEscuro
          ? {
              
              backgroundColor: "var(--corFundoPreto)",
            }
          : { backgroundColor: "var(--corFundoBranco)" }
      }>
        <p
          className="DoeText"
          style={
            ModoEscuro
              ? {
                  color: "var(--corFundoBranco)",
                  backgroundColor: "var(--CorCinza)",
                }
              : { color: "var(--corFundoPreto)" }
          }
        >
          <img src="https://raw.githubusercontent.com/NeemiasHD/Projeto_React_museu/main/src/img/logomuseu.png" width={"250px"} />
          Você pode fazer a diferença na preservação da história da computação!
          O Museu da Computação é um tesouro de inovação e conhecimento, mas
          precisa de sua ajuda para continuar inspirando as gerações futuras.
          Por favor, considere fazer uma doação hoje para garantir que esse
          legado vital seja preservado. Clique no botão abaixo para fazer sua
          doação agora❤️❤️
          <a className="BtnFazerDonate">Fazer Doação</a>
        </p>
        <div className="ItensDoacao">
          <p>
            <img src="https://www.intersaberes.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-28-at-17.30.31-1024x679.png" />
            Livros & Revistas
          </p>

          <p>
            <img src="https://http2.mlstatic.com/D_NQ_NP_694650-MLB44598172319_012021-O.webp" />
            Manutais
          </p>
          <p>
            <img
              src="https://img.freepik.com/fotos-premium/hardware-de-computador-antigo-em-um-fundo-de-madeira_136961-321.jpg"
              alt=""
            />
            Hardwares & Acessorios
          </p>
          <p>
            <img src="https://images.freeimages.com/clg/istock/previews/8283/82830259-donate-money-vector-icon.jpg" />
            Doaçao financeira e Outros...
          </p>
        </div>
      </div>
    
  );
}

export default Donate;
