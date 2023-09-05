import { Link } from 'react-router-dom';
import './EstiloBells.css'
import backgroundImage1 from './img2/fondo_estiloBell.png';


const EstiloBell = () =>{
    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImage1})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      };


return<>
<div className="container-fluid " id="estiloBell" style={backgroundImageStyle}>
<div className=" textoEstilo   ">
    <span className=" EstiloBellH fw-bold display-4">#EstiloBell </span> 
    <br></br>
    <span className=" Regala fw-bold display-5">Regala cariño</span>
    <p className=" Conoce display-5">Conoce Bell, tejidos con amor</p>
    <p className="Buscas">En Bell te ayudamos a expresar tu identidad, única y fantástica, tus colores y tu energía. <br />Por esto nuestro lema es tejer tu sueños, funcionando el cariño, tus ideas y nuestra creatividad,<br /> ya sea para tejer vestimenta, accesorios o regalos exclusivos. <br />Cada hilo es tejido con amor, convirtiendo nuestro producto final en una verdadera obra de arte.
</p>
<br />
<Link to="/tienda" className="boton-tienda">Conoce más</Link>

</div>

</div>
</>
}

export default EstiloBell;