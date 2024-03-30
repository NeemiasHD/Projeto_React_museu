import { useContext, useEffect } from "react";
import "./inputImagem.css";
import { UserContext } from "../../context/UserContext";

function reduzirResolucao(imagem, novaLargura) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  // Calcula a nova altura proporcionalmente à nova largura
  var proporcao = novaLargura / imagem.width;
  var novaAltura = imagem.height * proporcao;

  canvas.width = novaLargura;
  canvas.height = novaAltura;

  ctx.drawImage(imagem, 0, 0, novaLargura, novaAltura);

  var imagemReduzida = new Image();
  imagemReduzida.src = canvas.toDataURL("image/png");

  return imagemReduzida;
}

function InputImagem({
  ColocarImputImagem,
  Background,
  id,
  limparImagem,
  setlimparImagem,
  type,
}) {
  const { ModoEscuro } = useContext(UserContext);
  useEffect(() => {
    if (limparImagem) {
      document.getElementById(`ImagemPreview${id}`).src = "";
      document.getElementById(`btnAdd${id}`).style.display = "flex";
      document.getElementById(`ImagemInput${id}`).value = "";
      setlimparImagem(false);
    }
  }, [limparImagem]);

  return (
    <>
      <input
        type="file"
        id={`ImagemInput${id}`}
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
              const imagemOriginal = new Image();
              imagemOriginal.src = e.target.result;
              imagemOriginal.onload = function () {
                // Reduz a resolução da imagem para 400 pixels de largura
                let imagemReduzida = reduzirResolucao(
                  imagemOriginal,
                  type ? 1000 : 400
                ).src;
                document.getElementById(`ImagemPreview${id}`).src =
                  imagemReduzida;

                document.getElementById(`btnAdd${id}`).style.display = "none";
                document.getElementById(`ImagemPreview${id}`).style.filter =
                  "blur(0px)";
                ColocarImputImagem(imagemReduzida);
              };
            };
            reader.readAsDataURL(file);
          }
        }}
      />
      <label
        htmlFor={`ImagemInput${id}`}
        className={type ? "ImageImputNoticia" : "ImagemInput"}
      >
        <i
          className="bx bx-image-add"
          style={
            ModoEscuro
              ? { color: "var(--corFundoBranco)" }
              : { color: "var(--corFundoPreto)" }
          }
          id={`btnAdd${id}`}
        ></i>
        {Background ? (
          <img
            src={Background}
            className="ImagemPreview"
            id={`ImagemPreview${id}`}
            style={type ? {} : { width: "100%" }}
          />
        ) : (
          <img src="" style={type?{width:"100%"}:{height:"100%"}} className="ImagemPreview" id={`ImagemPreview${id}`} />
        )}
      </label>
    </>
  );
}

export default InputImagem;
