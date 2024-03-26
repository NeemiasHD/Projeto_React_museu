import React, { useContext, useEffect, useState } from "react";
import "./PopUp.css";
import itemFetch from "../../axios/api";
import { Rating } from "@mui/material";
import FecharPopUpBtn from "./FecharPopUpBtn";
import CincoEstrelaClassificacao from "../Avaliacao/CincoEstrelaClassificacao";
import LikeEdeslikeClassificacaoBtn from "../Avaliacao/LikeEdeslikeClassificacaoBtn";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import ModoEscuroBTN from "../ModoEscuro/ModoEscuroBTN";
import { useCookies } from "react-cookie";
import { UserContext } from "../../context/UserContext";

function PopUp({
  tipo,
  id,
  PopUpAtivo,
  SetPopUp,
  setAtualizarBusca,
  AtualizarBusca,
}) {
  const [cookies, setCookies] = useCookies(["cookieConsent", "logged"]); //logged verifica se ja logou antes pra poder entrar automaticamente na conta com os cooks
  const [Objeto, SetObjeto] = useState(null);
  const { User, setUser, userIsLoggin, setTypeUser } = useContext(UserContext);
  const [editarSobreMim, setEditarSobreMim] = useState(false);
  const [UserDatabase, setUserDatabase] = useState([]); //Informacoes do usuario do banco de dados local

  useEffect(() => {}, [UserDatabase]);

  useEffect(() => {
    async function fetchData() {
      let Objt = await itemFetch.get(`/ItemAcervo/BuscarUm?id=${id}`);
      SetObjeto(Objt.data);
    }
    fetchData();
  }, [id, AtualizarBusca]);

  useEffect(() => {
    if (PopUpAtivo) {
      document.querySelector(
        tipo == 1 ? ".PopUpBackground.Acervo" : ".PopUpBackground.Login"
      ).style.transform = "scale(1)";
      document.querySelector(
        tipo == 1 ? ".PopUpContainer.Acervo" : ".PopUpContainer.Login"
      ).style.opacity = "1";
      document.querySelector(
        tipo == 1 ? ".PopUpContainer.Acervo" : ".PopUpContainer.Login"
      ).style.pointerEvents = "all";
    } else {
      document.querySelector(
        tipo == 1 ? ".PopUpBackground.Acervo" : ".PopUpBackground.Login"
      ).style.transform = "scale(0)";
      document.querySelector(
        tipo == 1 ? ".PopUpContainer.Acervo" : ".PopUpContainer.Login"
      ).style.opacity = "0";
      document.querySelector(
        tipo == 1 ? ".PopUpContainer.Acervo" : ".PopUpContainer.Login"
      ).style.pointerEvents = "none";
    }
  }, [PopUpAtivo]);

  //funcoes paa o suceso de login
  const HandleSucessLogin = async (response) => {
    console.log(response);
    const user = response.profileObj;
    const Response = await itemFetch.get(
      `/Usuario/BuscarUm?id=${user.googleId}`
    );
    const data = Response.data;

    if (data.error) {
      console.log("Usuario sendo criado");

      const UsuarioGoogleID = user.googleId;
      const usuario = {
        usuarioGoogleID: UsuarioGoogleID,
        tipoUsuario: 1,
      };
      console.log(usuario);
      let response = await itemFetch.post(`/Usuario/Gravar`, usuario);
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        setUser(user);
      }
    } else {
      setUser(user);
      console.log(user);
    }
    setUserDatabase(data);
    setTypeUser(data.tipoUsuario);
  };
  const HandleErrorLogin = () => {
    console.log("nao foi possivel conectar a sua conta");
  };

  //corrigindo erro de nao retornar usuario
  const clientId =
    "630274174934-lf2mag8oh42gfrdq05dm7s7bto33m05o.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);
  const handleGoogleLogout = () => {
    // Chamada manual para logout do Google
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setTypeUser(0);
      console.log("User signed out from Google.");
    });
  };
  return (
    <>
      <div
        className={tipo == 1 ? "PopUpContainer Acervo" : "PopUpContainer Login"}
      >
        <div
          className={
            tipo == 1 ? "PopUpBackground Acervo" : "PopUpBackground Login"
          }
        >
          {tipo == 1 ? <FecharPopUpBtn SetPopUp={SetPopUp} /> : ""}
          {tipo == 1 ? (
            <>
              {Objeto ? (
                <>
                  <div className="Container1PopUp">
                    <div className="PopUpImgContainer">
                      <img src={Objeto.imagem1Item} alt="Item Image" />
                    </div>
                    <div className="ContainerClassificationPopUp">
                      {Objeto && Objeto.like && (
                        <CincoEstrelaClassificacao
                          like={Objeto.like.length}
                          deslike={Objeto.deslike.length}
                        />
                      )}

                      <LikeEdeslikeClassificacaoBtn
                        ItemAcervo={Objeto}
                        setAtualizarBusca={setAtualizarBusca}
                      />
                    </div>
                  </div>
                  <div className="PopUp_name_And_Description_Container">
                    <p
                      className="TituloPopUp"
                      style={{ color: "var(--corFundoBranco)" }}
                    >
                      {Objeto.nomeItem}
                    </p>
                    <p
                      className="DescricaoPopUp"
                      style={{ color: "var(--corFundoBranco)" }}
                    >
                      {Objeto.descricaoItem}
                    </p>
                    <div className="VisiteSite">Visite Site</div>
                  </div>
                </>
              ) : (
                <span class="loader eae"></span>
              )}
            </>
          ) : tipo == 2 ? (
            <>
              {userIsLoggin() ? (
                <>
                  <div className="PopUpUser">
                    <div className="userContentMain">
                      <div className="PopUpUserContent">
                        <div className="UserPopUpContainer">
                          <div className="user">
                            <FecharPopUpBtn SetPopUp={SetPopUp} />
                            <div style={{position:"absolute", left:"9px",top:"9px"}}><ModoEscuroBTN /></div>

                            <p className="MinhaContaP">Minha Conta</p>
                            <img
                              src={User.imageUrl}
                              className="Foto Perfil PopUp"
                            />
                            <p className="UserInfo">{User.name}</p>
                            <p className="UserInfo">{User.email}</p>
                          </div>
                          <div className="user InfoContainer">
                            <p className="LabelPopUpUser">Sobre Mim</p>
                            {editarSobreMim ? (
                              <>
                                <textarea
                                  className="TextAreaUser"
                                  maxLength={100}
                                  placeholder="digite sua descriacao"
                                  id="SobreMimInput"
                                  defaultValue={UserDatabase.sobreMim}
                                ></textarea>
                                <i
                                  class="bx bx-save"
                                  onClick={async () => {
                                    const usuario = {
                                      id: UserDatabase.id,
                                      usuarioGoogleID:
                                        UserDatabase.usuarioGoogleID,
                                      tipoUsuario: UserDatabase.tipoUsuario,
                                      sobreMim:
                                        document.getElementById("SobreMimInput")
                                          .value,
                                      user_insta_link:
                                        document.getElementById(
                                          "user_insta_link"
                                        ).value,
                                      user_twitter_link:
                                        document.getElementById(
                                          "user_twitter_link"
                                        ).value,
                                      user_github_link:
                                        document.getElementById(
                                          "user_github_link"
                                        ).value,
                                    };

                                    let response = await itemFetch.post(
                                      `/Usuario/Alterar?id=${UserDatabase.id}`,
                                      usuario
                                    );
                                    if (response.data.error) {
                                      console.log(response.data.error);
                                    } else {
                                      const Response = await itemFetch.get(
                                        `/Usuario/BuscarUm?id=${UserDatabase.usuarioGoogleID}`
                                      );
                                      const data = await Response.data;

                                      setUserDatabase(data);
                                    }

                                    setEditarSobreMim(false);
                                  }}
                                ></i>
                              </>
                            ) : (
                              <>
                                <p className="SobreMimUser">
                                  {UserDatabase.sobreMim}
                                </p>
                                <i
                                  className="bx bxs-edit"
                                  onClick={() => {
                                    setEditarSobreMim(true);
                                  }}
                                ></i>
                              </>
                            )}
                          </div>
                          <div className="UserSocialMedia">
                            
                            <i
                              class="bx bxl-instagram"
                              onClick={() => {
                                document.querySelector(".LinkInsta").click();
                              }}
                            >
                              <a
                                target="_blank"
                                className="LinkInsta"
                                href={UserDatabase.user_insta_link}
                              ></a>
                            </i>
                            <i
                              class="bx bxl-github"
                              onClick={() => {
                                document.querySelector(".LinkGit").click();
                              }}
                            >
                              <a
                                target="_blank"
                                className="LinkGit"
                                href={UserDatabase.user_github_link}
                              ></a>
                            </i>
                            <i
                              class="bx bxl-twitter"
                              onClick={() => {
                                document.querySelector(".LinkTwitter").click();
                              }}
                            >
                              <a
                                className="LinkTwitter"
                                target="_blank"
                                href={UserDatabase.user_twitter_link}
                              ></a>
                            </i>
                          </div>
                          <a
                            className="SairContaBtn"
                            onClick={() => {
                              setUser([]);
                              handleGoogleLogout();
                            }}
                          >
                            Sair
                          </a>
                        </div>
                      </div>
                      {editarSobreMim ? (
                        <div className="PopUpUserContent c2">
                          <div className="UserSocialMedia c2">
                            <div className="InputSocialMedia">
                              <i class="bx bxl-instagram"></i>
                              <input
                                type="text"
                                placeholder="Link para o Instagram"
                                defaultValue={UserDatabase.user_insta_link}
                                id="user_insta_link"
                              />
                            </div>
                            <div className="InputSocialMedia">
                              <i class="bx bxl-twitter"></i>
                              <input
                                id="user_twitter_link"
                                type="text"
                                placeholder="Link para o Twitter"
                                defaultValue={UserDatabase.user_twitter_link}
                              />
                            </div>
                            <div className="InputSocialMedia">
                              <i class="bx bxl-github"></i>
                              <input
                                id="user_github_link"
                                type="text"
                                placeholder="Link para o Github"
                                defaultValue={UserDatabase.user_github_link}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="PopUpUserContent c2">
                  <FecharPopUpBtn SetPopUp={SetPopUp} />
                  <div className="LoginWithGoogle">
                    <i class="bx bxs-user-circle"></i>
                    <div
                      className="BtnGoogleContent"
                      onClick={() => {
                        if (cookies.cookieConsent == 1) {
                          setCookies("logged", true, { path: "/" });
                        }
                      }}
                    >
                      <GoogleLogin
                        clientId={clientId}
                        buttonText="Entrar com Google"
                        onSuccess={HandleSucessLogin}
                        onFailure={HandleErrorLogin}
                        isSignedIn={cookies.logged == true && true}
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default PopUp;
