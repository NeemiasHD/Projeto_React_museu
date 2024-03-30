import React, { useContext } from "react";
import "./TextCookie.css";
import { UserContext } from "../../context/UserContext";
import H1cookietxt from "./H1cookietxt";
import Pmsgcookie from "./Pmsgcookie";

function TextCookie() {
  const { ModoEscuro } = useContext(UserContext);
  return (
    <div
      className="ContainerTextoCookies"
      style={
        ModoEscuro
          ? { backgroundColor: "var(--corFundoPreto)" }
          : { backgroundColor: "var(--corFundoBranco)" }
      }
    >
      <div className="TextContainerCookiesPolicy">
        <H1cookietxt msg={"Política de Cookies"} />

        <Pmsgcookie
          msg={
            "Bem-vindo à nossa página de Política de Cookies. Aqui, explicamos como usamos cookies em nosso site para melhorar sua experiência como usuário. Ao continuar a navegar em nosso site, você concorda com o uso de cookies conforme descrito nesta política."
          }
        />

        <H1cookietxt msg={"O que são cookies?"} />
        <Pmsgcookie
          msg={
            "Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem de maneira mais eficiente e fornecer informações aos proprietários do site."
          }
        />

        <H1cookietxt msg={"Como usamos cookies?"} />

        <p
          className="TextoSecondaryCookie"
          style={
            ModoEscuro
              ? { color: "var(--corFundoBranco)" }
              : { color: "var(--corFundoPreto)" }
          }
        >
          Nós usamos cookies por várias razões. Principalmente, os utilizamos
          para lembrar suas preferências e melhorar sua experiência de
          navegação. Alguns dos principais usos de cookies em nosso site
          incluem:
          <ul className="ListaDeUsosCookies">
            <li
              style={
                ModoEscuro
                  ? { color: "var(--corFundoBranco)" }
                  : { color: "var(--corFundoPreto)" }
              }
            >
              <span
                className="NegritoCookie"
                style={
                  ModoEscuro
                    ? { color: "var(--corFundoBranco)" }
                    : { color: "var(--corFundoPreto)" }
                }
              >
                Autenticação:
              </span>
              Utilizamos cookies para lembrar se você está logado em nosso site,
              para que você não precise inserir suas informações de login sempre
              que visitar uma nova página.
            </li>

            <li
              style={
                ModoEscuro
                  ? { color: "var(--corFundoBranco)" }
                  : { color: "var(--corFundoPreto)" }
              }
            >
              <span
                className="NegritoCookie"
                style={
                  ModoEscuro
                    ? { color: "var(--corFundoBranco)" }
                    : { color: "var(--corFundoPreto)" }
                }
              >
                Modo Noturno:
              </span>
              Oferecemos a opção de modo noturno em nosso site, e utilizamos
              cookies para lembrar se você preferiu ou não esse modo para
              futuras visitas. Oferecemos a opção de modo noturno em nosso site,
              e utilizamos cookies para lembrar se você preferiu ou não esse
              modo para futuras visitas.
            </li>
            <li
              style={
                ModoEscuro
                  ? { color: "var(--corFundoBranco)" }
                  : { color: "var(--corFundoPreto)" }
              }
            >
              <span
                className="NegritoCookie"
                style={
                  ModoEscuro
                    ? { color: "var(--corFundoBranco)" }
                    : { color: "var(--corFundoPreto)" }
                }
              >
                {" "}
                Análise de desempenho:
              </span>
              Utilizamos cookies para coletar informações sobre como os
              visitantes usam nosso site, a fim de entender e melhorar a
              experiência do usuário.
            </li>
          </ul>
        </p>
        <H1cookietxt msg={"Seus controles de cookies"} />
        <Pmsgcookie
          msg={
            "Você tem o controle sobre os cookies que são armazenados em seu dispositivo. Você pode ajustar suas configurações de cookies em seu navegador para bloquear ou limitar o uso de cookies. No entanto, observe que isso pode afetar a funcionalidade de nosso site."
          }
        />

        <H1cookietxt msg={"Alterações nesta política"} />
        <Pmsgcookie
          msg={
            " Esta política de cookies pode ser atualizada periodicamente para refletir mudanças em nossas práticas de cookies. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer atualizações."
          }
        />

        <H1cookietxt msg={"Contate-nos"} />
        <Pmsgcookie
          msg={
            "Se você tiver alguma dúvida ou preocupação sobre nossa política de cookies ou sobre como usamos cookies em nosso site, entre em contato conosco através dos meios disponíveis em nossa página de contato."
          }
        />
      </div>
    </div>
  );
}

export default TextCookie;
