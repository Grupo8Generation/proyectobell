import './EstiloBells.css'
import { Link } from 'react-router-dom';


const EstiloBell = () =>{
return<>
<div className="container-fluid " id="estiloBell">
<div className=" text-start container-fluid ">
    <span className=" EstiloBellH fw-bold display-4">#EstiloBell </span> 
    <br></br>
    <span className=" Regala fw-bold display-5">Regala cariño</span>
    <p className=" Conoce display-5">Conoce Bell, tejidos con amor</p>
    <p className="Buscas">En Bell te ayudamos a expresar tu identidad, única y fantástica, <br /> tus colores y tu energía. Por esto nuestro lema es tejer tu sueños, <br /> funcionando el cariño, tus ideas y nuestra creatividad,<br /> ya sea para tejer vestimenta, accesorios o regalos exclusivos. <br />Cada hilo es tejido con amor, convirtiendo nuestro producto final en una verdadera obra de arte.
</p>
<br />
<Link to="/tienda" className="boton-tienda">Conoce más</Link>

</div>

</div>
</>
}

export default EstiloBell;