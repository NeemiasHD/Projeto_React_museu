import React, { useContext, useEffect, useState } from "react";
import "./Noticias.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swipper.css";
import CadastroDeItem from "../CadastroDeItem/CadastroDeItem";
import itemFetch from "../../axios/api";
import InputImagem from "../InputImagem/InputImagem";
import AdmTools from "../RenderItens/FeramentaADM/AdmTools";
import { UserContext } from "../../context/UserContext";

async function BuscarTodosNoticias() {
  const response = await itemFetch.get("/Noticias/BuscarTodos");
  const data = await response.data;
  return data;
}
function Noticias() {
  const { ModoEscuro, TypeUser } = useContext(UserContext);
  const [ListaNoticia, setListaNoticias] = useState([]);
  const [atualizarNoticias, setAtualizarNoticias] = useState(false); //atualiza noticias automaticamente apos alguma mudanca
  const [ModoEdicao, SetModoEdicao] = useState();
  const [ImagemEdicao, SetImagemEdicao] = useState();
  useEffect(() => {
    async function fetchDataNoticia() {
      const result = await BuscarTodosNoticias();
      setListaNoticias(result); // se desejar atualizar o estado com o resultado
      setAtualizarNoticias(false);
    }
    fetchDataNoticia();
  }, [atualizarNoticias]);

  return ListaNoticia.length ? (
    <>
      <div className="noticiasContainer">
        <main className="NoticiasMain">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {ListaNoticia.map((Noticias) => (
              <SwiperSlide>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p className="noticiaDiaTXT">
                    <h1 className="tituloNoticia">
                      <div className="TipoNoticia">{Noticias.tagNoticia}</div>
                      {Noticias.tituloNoticia}
                    </h1>
                    {Noticias.descricaoNoticia}
                  </p>
                  <p className="SaibaMaisNoticia">Saiba Mais</p>
                </div>
                <div className="ImagemNoticia">
                  <img src={Noticias.imagem1Item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      </div>
      <div className="NoticiasPequenas">
        {TypeUser == 2 && (
          <CadastroDeItem
            type={1}
            id={"NoticiaImgADD"}
            atualizarAcervo={setAtualizarNoticias}
          />
        )}
        {ListaNoticia.slice(0, 3).map((Noticias) => (
          <>
            <p
              className="noticiaPequenaDiaTXT"
              id={`noticiaDiaTXT${Noticias.id}`}
              key={Noticias.id}
            >
              <div className="ImagemNoticiaPequena">
                {ModoEdicao == Noticias.id ? (
                  <InputImagem
                    Background={Noticias.imagem1Item}
                    ColocarImputImagem={SetImagemEdicao}
                    type={4}
                  />
                ) : (
                  <img src={Noticias.imagem1Item} />
                )}
              </div>
              {ModoEdicao == Noticias.id ? (
                <input
                  type="text"
                  className="inputTituloNoticiaPequena"
                  id={`inputTituloNoticiaPequena${Noticias.id}`}
                  placeholder="Titulo Noticia"
                  defaultValue={Noticias.tituloNoticia}
                />
              ) : (
                <h1
                  className="tituloNoticiaPequena"
                  id={`tituloNoticiaPequena${Noticias.id}`}
                >
                  {Noticias.tituloNoticia}
                </h1>
              )}
              {ModoEdicao == Noticias.id ? (
                <input
                  type="text"
                  className="inputTituloNoticiaPequena"
                  id={`inputTagNoticia${Noticias.id}`}
                  defaultValue={Noticias.tagNoticia}
                  placeholder="Tag Noticia"
                />
              ) : (
                ""
              )}
              {ModoEdicao == Noticias.id ? (
                <textarea
                  className="InputDescricaoNoticiaP"
                  id={`InputDescricaoNoticiaP${Noticias.id}`}
                  defaultValue={Noticias.descricaoNoticia}
                  placeholder="Descricao Noticia"
                ></textarea>
              ) : (
                <p
                  className="DescricaoNoticiaP"
                  id={`DescricaoNoticiaP${Noticias.id}`}
                  style={
                    ModoEscuro
                      ? { color: "var(--corFundoBranco)" }
                      : { color: "var(--corFundoPreto)" }
                  }
                >
                  {Noticias.descricaoNoticia}
                </p>
              )}
              {TypeUser == 2 && (
                <AdmTools
                  ItemAcervo={Noticias}
                  SetModoEdicao={SetModoEdicao}
                  ImagemEdicao={ImagemEdicao}
                  SetImagemEdicao={SetImagemEdicao}
                  setAtualizarBusca={setAtualizarNoticias}
                  ModoEdicao={ModoEdicao}
                  type={2}
                />
              )}
            </p>
          </>
        ))}
      </div>
    </>
  ) : (
    <>
      {TypeUser == 2 ? (
        <>
          <div className="noticiasContainer">
            <div className="containerLOADER">
              <span class="loader"></span>
            </div>
          </div>
          <div className="cadastro_noticia_vazio">
            <CadastroDeItem
              type={1}
              id={"NoticiaImgADD"}
              atualizarAcervo={setAtualizarNoticias}
            />
          </div>
        </>
      ) : (
        <>
          <div className="noticiasContainer">
            <div
              
              style={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              <span class="loader eae"></span>
            </div>
          </div>
          <div style={{height:"300px", display: "flex", alignItems: "center",justifyContent:"center" }}>
          <span class="loader eae"></span>
          </div>
        </>
      )}
    </>
  );
}

export default Noticias;
