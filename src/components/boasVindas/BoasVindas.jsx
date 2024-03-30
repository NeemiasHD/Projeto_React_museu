import React, { useEffect, useState } from "react";
import "./BoasVindas.css";

function BoasVindas({ type,Imagem,Title }) {
  const [Blur, SetBlur] = useState(0);
  window.addEventListener("scroll", () => {
    if (window.scrollY < 300) {
      SetBlur(window.scrollY / 50);
    } else {
      if (Blur != 300 / 50) SetBlur(300 / 50);
    }
  });
  useEffect(() => {}, [Blur]);
  return (
    <>
      <div className="ContainerBemVindo">
        {type ? (
          <img className="IMGbemvindoPNG" src={"https://raw.githubusercontent.com/NeemiasHD/Projeto_React_museu/main/src/img/bemvindoPNG.png"} />
        ) : (
          <div className="TitleSecondaryPage">
            <h1>{Title}</h1>
          </div>
        )}

        <main className="BoasVindasMain" style={{ top: `-${Blur * 2}px` }}>
          <div className="BackgroundImagembemVindo">
            <img
              style={{ filter: `blur(${Blur}px)` }}
              className="backgroundbemvindo"
              src={type?"https://raw.githubusercontent.com/NeemiasHD/Projeto_React_museu/main/src/img/backgroundbemvindo.jpg":Imagem}
            />
          </div>
        </main>
        <div style={{ marginTop: "450px" }}></div>
      </div>
    </>
  );
}

export default BoasVindas;
