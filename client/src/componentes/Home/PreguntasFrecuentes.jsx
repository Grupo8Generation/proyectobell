import Footer from "../Footer";
import NavBar from "../NavBar";
import "./PreguntasFrecuentess.css"
import React from 'react';
import preguntasImg from "./img2/fondo_faq.svg"


const PreguntasFrecuentes = () =>{
  const backgroundImageStyle = {
    backgroundImage: `url(${preguntasImg})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  };
    return <div>
    <NavBar></NavBar>
    <div className="container-fluid preguntasFrecuentes" style={backgroundImageStyle}>
        <div className=" container-fluid tituloPF h1 text-center">Preguntas frecuentes </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item text-center">
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      ¿Si encuentro un modelo que me gusta en internet podría realizarlo?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Sí, en nuestra página contamos con un formulario de pedidos personalizados donde podrás describir detalles de tu producto y archivar fotos de referencia, posterior a eso será enviado un mail con la respuesta de factibilidad del pedido y de agenda disponibles para poder comenzar.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        ¿Dónde están ubicados? / ¿Realizan envios a regiones?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Somos una tienda online, sin tienda física, pero el taller está ubicado en la Región Metropolitana, comuna de Renca, y contamos con envíos dentro y fuera de la región por distintos tipos de servicios, los cuales podrás elegir al momento de realizar tu compra.
</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      ¿Qué materiales utilizan para los tejidos?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">En la amplia gama de productos que fabricamos encontrarás materias primas tales como lana acrílicas, lana natural de oveja, hilos acrílicos, hilos 100% algodón y en casos de pedidos especiales y personalizados puedes agregar en los requerimientos algún otro tipo de hilo o lana en específico.</div>
    </div>
  </div>
</div>
    </div>
    <Footer></Footer>
    </div>

}

export default PreguntasFrecuentes; 