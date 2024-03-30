import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";


export const UserContext = createContext();
export const UserProvider = ({ children }) => {

  const[BuscaPorFiltroIsOn,setBuscaPorFiltroIsOn] = useState(false)//serve pra definr a busca por filtro na pagina principal, para nao renderizar tudo na home
  const [cookies,setCookies] = useCookies(["DarkMode"]);

  const [User, setUser] = useState([]);
  const[TypeUser,setTypeUser] = useState()//define o tipo de usuario
  const [ModoEscuro, SetModoEscuro] = useState(cookies.DarkMode === true);
  const HandleToggleDarkMode = () => {
    SetModoEscuro(!ModoEscuro);
  };
  const userIsLoggin = () => {
    if (User.name) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{ User, setUser, userIsLoggin,TypeUser,setTypeUser, HandleToggleDarkMode, ModoEscuro,BuscaPorFiltroIsOn,setBuscaPorFiltroIsOn }}
    >
      {children}
    </UserContext.Provider>
  );
};
