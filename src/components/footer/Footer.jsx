import React, { useContext } from "react";
import "./Footer.css";
import ModoEscuroBTN from "../ModoEscuro/ModoEscuroBTN";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import BtnDoacao from "../navbar/BtnDoacao";
import BtnNoticiaNav from "../navbar/BtnNoticiaNav";

function Footer({ SetAtivarPopUpUsuario }) {
  const { User } = useContext(UserContext);
  return (
    <div className="FooterContainer">
      <div className="RedesSociaisFooter">
        <h1>
          {" "}
          <span>INFORMAÇÕES</span> SOBRE O PROJETO
        </h1>
        <p>
          Nosso projeto busca explorar a evolução da tecnologia que moldou o
          nosso mundo atual, aqui é possivel observar maquinas bem antigas que
          deram inicio a toda nossa tecnologia avançada, a doação é uma parte
          importante pois com ela conseguimos manter o nosso prorio acervo com
          itens espetaculares, fazendo assim uma apresentação ao publico do
          legado da computação. aproveite o museu e se possivel nos ajude a
          mante-lo de pé. ;){" "}
        </p>
      </div>
      <div className="NavBarFooter">
        <h1>NAVEGAÇÃO</h1>
        <ul>
          <li>
            <Link
              to={"/"}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                });
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <BtnNoticiaNav />
          </li>
          <li>
            <Link
              to={"/Acervo"}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                });
              }}
            >
              Acervo
            </Link>
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
            <a onClick={() => SetAtivarPopUpUsuario(true)}>
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
      <div className="RedesSociaisFooter">
        <h1>REDES SOCIAIS</h1>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/museudacomputacao_ufj/"
              target="_blank"
            >
              <i class="bx bxl-instagram-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/museucomputaufj" target="_blank">
              <i class="bx bxl-twitter"></i>{" "}
            </a>
          </li>
          <li>
            <a href="https://github.com/NeemiasHD" target="_blank">
              <i class="bx bxl-github"></i>{" "}
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@cienciadacomputacao-ufj7790" target="_blank">
              <i class="bx bxl-youtube"></i>
            </a>
          </li>
          <li>
            <a href="mailto:neemias.farias@discente.ufj.edu.br?subject=Museu da Computação&body=Ol%C3%A1%2C%20venho%20falar%20sobre%20o%20projeto%20museu%20da%20computa%C3%A7%C3%A3o" target="_blank">
              <i class="bx bxl-gmail"></i>{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
