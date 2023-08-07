

import EstiloBell from "./componentes/EstiloBell"
import Footer from "./componentes/Footer"
import Hashtag from "./componentes/Hashtag"
import Head from "./componentes/Head"
import Invierno from "./componentes/Invierno"
import MasVendido from "./componentes/MasVendido"
import Nosotros from "./componentes/Nosotros"
import Testimoniales from "./componentes/Testimoniales"
import Testimoniocar from "./componentes/Testimonio-carrusel"



const Home = () => {
  return <div id="homeId">
   <Head></Head>
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

