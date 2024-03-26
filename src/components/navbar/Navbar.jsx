import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import ModoEscuroBTN from "../ModoEscuro/ModoEscuroBTN";
import PopUp from "../PopUp/PopUp";
import { UserContext } from "../../context/UserContext";

function Navbar() {
  const [AtivarPopUpTipo, SetAtivarPopUpTipo] = useState(false);
  const { User, ModoEscuro, TypeUser } = useContext(UserContext);

  return (
    <>
      <PopUp
        PopUpAtivo={AtivarPopUpTipo}
        SetPopUp={SetAtivarPopUpTipo}
        tipo={2}
      />
      <div className="navegacao1">
        <img src="src/img/logomuseu.png" width={"40px"} />
        {TypeUser == 2 && (
          <h1
            style={
              ModoEscuro
                ? {
                    color: "var(--corFundoBranco)",
                    marginLeft: "150px",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }
                : {
                    color: "var(--corFundoPreto)",
                    marginLeft: "150px",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }
            }
          >
            ADM
            <i
              class="bx bx-menu"
              style={
                ModoEscuro
                  ? { color: "var(--corFundoBranco)", marginLeft: "10px" }
                  : { color: "var(--corFundoPreto)", marginLeft: "10px" }
              }
            ></i>
          </h1>
        )}
        <div className="iconesNav">
          <i
            className="bx bxl-youtube"
            style={
              ModoEscuro
                ? { color: "var(--corFundoBranco)" }
                : { color: "var(--corFundoPreto)" }
            }
          ></i>
          <i
            className="bx bxl-instagram"
            style={
              ModoEscuro
                ? { color: "var(--corFundoBranco)" }
                : { color: "var(--corFundoPreto)" }
            }
          ></i>
          <i
            className="bx bxl-twitter"
            style={
              ModoEscuro
                ? { color: "var(--corFundoBranco)" }
                : { color: "var(--corFundoPreto)" }
            }
          ></i>
          <i
            className="bx bxl-github"
            style={
              ModoEscuro
                ? { color: "var(--corFundoBranco)" }
                : { color: "var(--corFundoPreto)" }
            }
          ></i>
        </div>
      </div>
      <div className="navegacao2">
        <ul>
          <li>
            <a>Notícias</a>
          </li>
          <li>
            <a>Acervo</a>
          </li>
          <li>
            <a>Doação</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
          <li>
            <a onClick={() => SetAtivarPopUpTipo(true)}>
              {User.imageUrl ? (
                <img className="Foto Perfil NavBar" src={User.imageUrl} />
              ) : (
                "Login"
              )}
            </a>
          </li>

          <li>
            <ModoEscuroBTN />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
