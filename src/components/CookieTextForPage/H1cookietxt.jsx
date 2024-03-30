import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function H1cookietxt({ msg }) {
  const { ModoEscuro } = useContext(UserContext);
  return (
    <h1
      className="TitleForCookie"
      style={
        ModoEscuro
          ? { color: "var(--corFundoBranco)" }
          : { color: "var(--corFundoPreto)" }
      }
    >
      {msg}
    </h1>
  );
}

export default H1cookietxt;
