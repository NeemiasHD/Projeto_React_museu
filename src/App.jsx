import Acervo from "./components/acervo/Acervo";
import Donate from "./components/doações/Donate";
import Navbar from "./components/navbar/Navbar";
import BoasVindas from "./components/boasVindas/BoasVindas";
import Noticias from "./components/noticias/Noticias";
import Dividir_Itens from "./components/dividirItens/Dividir_Itens";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTopBTN/ScrollToTop";
import CookieConcentiment from "./components/CookieConcentiment/CookieConcentiment";
import { useCookies } from "react-cookie";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
 
function App() {
  const [cookies] = useCookies(["cookieConsent"]);
  const AnimacaoCookiePopUp = () =>{
    setTimeout(()=>{
      document.querySelector(".Cookie").style.bottom="10px"
    },3000)

  }
  const { ModoEscuro } = useContext(UserContext);
  return (
    <>
      <div className="Body" style={ModoEscuro?{backgroundColor:"var(--corFundoPreto)"}:{backgroundColor:"var(--corFundoBranco)"}}>
        {cookies.cookieConsent != 1 && cookies.cookieConsent != 2 && (
          AnimacaoCookiePopUp(),
          <CookieConcentiment />
          
          
         
        )}

        <ScrollToTop />
        <Navbar />
        <BoasVindas />
        <Dividir_Itens dividir={"NOTÍCIAS"} PrimeiroItem={1} />
        <Noticias />
        <Dividir_Itens dividir={"ACERVO"} />
        <Acervo />
        <Dividir_Itens dividir={"DONATE"} />
        <Donate />
        <Footer />
      </div>
    </>
  );
}

export default App;
