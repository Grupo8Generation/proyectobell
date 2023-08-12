
import EstiloBell from "./componentes/EstiloBell"
import Footer from "./componentes/Footer"
import Hashtag from "./componentes/Hashtag"
import Head from "./componentes/Head"
import Invierno from "./componentes/Invierno"
import MasVendido from "./componentes/MasVendido"
import NavBar from "./componentes/NavBar"
import Nosotros from "./componentes/Nosotros"
import Testimoniales from "./componentes/Testimoniales"
import Testimoniocar from "./componentes/Testimoniocar"



const Home = () => {
  return <div id="homeId">
   <Head></Head>
   <NavBar></NavBar>
    <EstiloBell />
    <Nosotros />
    <Invierno />
    <MasVendido />
    <Hashtag />
    <Testimoniales />
    <Testimoniocar />
    <Footer />
  </div>
}

export default Home; 

