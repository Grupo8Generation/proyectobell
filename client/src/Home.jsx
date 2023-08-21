import NavBar from "./componentes/NavBar";
import EstiloBell from "./componentes/Home/EstiloBell"
import Nosotros from "./componentes/Home/Nosotros";
import Invierno from "./componentes/Home/Invierno"
import Head from "./componentes/Home/Head"
import MasVendido from "./componentes/Home/MasVendido";
import Hashtag from "./componentes/Home/Hashtag"
import Testimoniales from "./componentes/Home/Testimoniales"
import Testimoniocar from "./componentes/Home/Testimoniocar"
import Footer from "./componentes/Footer";




const Home = () => {
  return <div id="homeId">
<Head></Head>
   <NavBar></NavBar>
   <EstiloBell></EstiloBell>
    <Nosotros/>
    <Invierno />
    <MasVendido />
    <Hashtag />
    <Testimoniales />
    <Testimoniocar/>
    <Footer></Footer>
  </div>
}

export default Home; 

