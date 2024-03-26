import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import itemFetch from "../axios/api";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [cookies,setCookies] = useCookies(["DarkMode"]);

  const [User, setUser] = useState([]);
  const[TypeUser,setTypeUser] = useState()
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
      value={{ User, setUser, userIsLoggin,TypeUser,setTypeUser, HandleToggleDarkMode, ModoEscuro }}
    >
      {children}
    </UserContext.Provider>
  );
};
