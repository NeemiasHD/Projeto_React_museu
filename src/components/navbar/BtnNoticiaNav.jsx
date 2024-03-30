import React from "react";
import { Link, useLocation } from "react-router-dom";

function BtnNoticiaNav() {
  const location = useLocation();
  return (
    <Link
      to={"/"}
      onClick={() => {
        if (location.pathname != "/") {
          setTimeout(() => {
            window.scrollTo({
              top: 400,
              behavior: "smooth",
            });
          }, 700);
        } else {
          window.scrollTo({
            top: 400,
            behavior: "smooth",
          });
        }
      }}
    >
      Notícias
    </Link>
  );
}

export default BtnNoticiaNav;
