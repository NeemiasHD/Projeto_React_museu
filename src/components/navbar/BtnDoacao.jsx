import React from "react";
import { Link, useLocation } from "react-router-dom";

function BtnDoacao() {
  const location = useLocation();
  return (
    <Link
      to={"/"}
      onClick={() => {
        if (location.pathname != "/") {
          setTimeout(() => {
            const altura = document
              .querySelector(".ItensAcervo")
              .getBoundingClientRect().height;
            window.scrollTo({
              top: 2500 - (900 - altura),
              behavior: "smooth",
            });
          }, 1300);
        } else {
          const altura = document
            .querySelector(".ItensAcervo")
            .getBoundingClientRect().height;
          window.scrollTo({
            top: 2500 - (900 - altura),
            behavior: "smooth",
          });
        }
      }}
    >
      Doação
    </Link>
  );
}

export default BtnDoacao;
