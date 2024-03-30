import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Pmsgcookie({ msg }) {
  const { ModoEscuro } = useContext(UserContext);
  return (
    <p
      className="TextoSecondaryCookie"
      style={
        ModoEscuro
          ? { color: "var(--corFundoBranco)" }
          : { color: "var(--corFundoPreto)" }
      }
    >
      {msg}
    </p>
  );
}

export default Pmsgcookie;
