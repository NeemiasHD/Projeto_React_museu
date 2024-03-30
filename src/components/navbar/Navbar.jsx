import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import ModoEscuroBTN from "../ModoEscuro/ModoEscuroBTN";
import PopUp from "../PopUp/PopUp";
import { UserContext } from "../../context/UserContext";
import { Link, useLocation } from "react-router-dom";
import itemFetch from "../../axios/api";
import BtnDoacao from "./BtnDoacao";
import BtnNoticiaNav from "./BtnNoticiaNav";

function Navbar({ SetAtivarPopUpUsuario }) {
  const { User, ModoEscuro, TypeUser } = useContext(UserContext);
  const location = useLocation(); //Serve pra saber em qual path a pagina esta renderizado
  return (
    <>
      <div
        className="navegacao1"
        style={
          ModoEscuro
            ? {
                backgroundColor: "var(--corFundoPreto)",
              }
            : { backgroundColor: "var(--corFundoBranco)" }
        }
      >
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
            <i
              class="bx bxs-crown"
              style={{ color: "#ffd000", marginRight: "10px" }}
            ></i>
            ADM
            <i
              class="bx bxs-crown"
              style={{ color: "#ffd000", marginLeft: "10px" }}
            ></i>
          </h1>
        )}
        <div className="iconesNav">
          <a
            href="https://www.youtube.com/@cienciadacomputacao-ufj7790"
            target="_blank"
          >
            <i
              className="bx bxl-youtube"
              style={
                ModoEscuro
                  ? { color: "var(--corFundoBranco)" }
                  : { color: "var(--corFundoPreto)" }
              }
            ></i>
          </a>
          <a
            href="https://www.instagram.com/museudacomputacao_ufj/"
            target="_blank"
          >
            <i
              class="bx bxl-instagram-alt"
              style={
                ModoEscuro
                  ? { color: "var(--corFundoBranco)" }
                  : { color: "var(--corFundoPreto)" }
              }
            ></i>
          </a>
          <a href="https://twitter.com/museucomputaufj" target="_blank">
            <i
              className="bx bxl-twitter"
              style={
                ModoEscuro
                  ? { color: "var(--corFundoBranco)" }
                  : { color: "var(--corFundoPreto)" }
              }
            ></i>
          </a>
          <a href="https://github.com/NeemiasHD" target="_blank">
            <i
              className="bx bxl-github"
              style={
                ModoEscuro
                  ? { color: "var(--corFundoBranco)" }
                  : { color: "var(--corFundoPreto)" }
              }
            ></i>
          </a>
        </div>
      </div>
      <div className="navegacao2">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <BtnNoticiaNav />
          </li>
          <li>
            <Link to={"/Acervo"}>Acervo</Link>
          </li>
          <li>
            <BtnDoacao />
          </li>
          <li>
            <a href="https://wa.me/5562985091523" target="_blank">
              Contato
            </a>
          </li>
          <li>
            <a className="BtnLogin" onClick={() => SetAtivarPopUpUsuario(true)}>
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
