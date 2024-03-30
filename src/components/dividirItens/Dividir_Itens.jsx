import React, { useContext } from "react";
import "./DividirItens.css";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

function Dividir_Itens({ dividir, PrimeiroItem, BtnPlus }) {
  const { ModoEscuro } = useContext(UserContext);
  return (
    <div className="dividirItensContainer">
      <div
        className="dividirItens"
        style={{
          backgroundColor: PrimeiroItem
            ? "var(--cinzaPrincipal)"
            : "var(--CorCinza)",
        }}
      >
        <p
          className="DividirItensTitulo"
          style={{
            color: PrimeiroItem
              ? "white"
              : ModoEscuro
              ? "var(--corFundoBranco)"
              : "var(--corFundoPreto)",
          }}
        >
          {dividir}
        </p>
        <Link
          to={dividir == "ACERVO" ? "/Acervo" : dividir == "NOTÍCIAS" ? "https://www.bbc.com/portuguese/topics/cg7267q3qv9t" : ""}
          target={dividir === "NOTÍCIAS" ? "_blank" : ""}
          onClick={() => {
            window.scrollTo({
              top: 0,
            });
          }}
          className="MaisSobre"
          style={{
            color: PrimeiroItem
              ? "white"
              : ModoEscuro
              ? "var(--corFundoBranco)"
              : "var(--corFundoPreto)",
          }}
        >
          {BtnPlus} {dividir}
        </Link>
      </div>
    </div>
  );
}

export default Dividir_Itens;
