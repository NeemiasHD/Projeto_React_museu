import React, { useContext } from "react";
import "./DividirItens.css";
import { UserContext } from "../../context/UserContext";

function Dividir_Itens({ dividir, PrimeiroItem }) {
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
        <p
          className="MaisSobre"
          style={{
            color: PrimeiroItem
              ? "white"
              : ModoEscuro
              ? "var(--corFundoBranco)"
              : "var(--corFundoPreto)",
          }}
        >
          MAIS SOBRE {dividir}
        </p>
      </div>
    </div>
  );
}

export default Dividir_Itens;
