import React from "react";
import "./Footer.css";
import ModoEscuroBTN from "../ModoEscuro/ModoEscuroBTN";

function Footer() {
  return (
    <div className="FooterContainer">
        <div className="RedesSociaisFooter">
        <h1> <span>INFORMAÇÕES</span> SOBRE O PROJETO</h1>
        <p>Nosso projeto busca explorar a evolução da tecnologia que moldou o nosso mundo atual, aqui é possivel observar maquinas bem antigas que deram inicio a toda nossa tecnologia avançada, a doação é uma parte importante pois com ela conseguimos manter o nosso prorio acervo com itens espetaculares, fazendo assim uma apresentação ao publico do legado da computação. aproveite o museu e se possivel nos ajude a mante-lo de pé. ;) </p>
      </div>
      <div className="NavBarFooter">
        <h1>NAVEGAÇÃO</h1>
        <ul>
          <li>
            <a href="">Notícias</a>
          </li>
          <li>
            <a href="">Acervo</a>
          </li>
          <li>
            <a href="">Doação</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <ModoEscuroBTN/>
          </li>
        </ul>
      </div>
      <div className="RedesSociaisFooter">
        <h1>REDES SOCIAIS</h1>
        <ul>
          <li>
            <a href=""><i class='bx bxl-instagram-alt'></i></a>
          </li>
          <li>
            <a href=""><i class='bx bxl-twitter' ></i>  </a>
          </li>
          <li>
            <a href=""><i class='bx bxl-github' ></i>  </a>
          </li>
          <li>
            <a href=""><i class='bx bxl-youtube' ></i></a>
          </li>
          <li>
            <a href=""><i class='bx bxl-whatsapp' ></i>  </a>
          </li>
          
        </ul>
      </div>
      
    </div>
  );
}

export default Footer;
