import Footer from "./Footer"
import NavBar from "./NavBar"
import './PreguntasFrecuentess.css'
import React from 'react';

const PreguntasFrecuentes = () =>{

    return <div>
    <NavBar></NavBar>
    <div className="container-fluid preguntasFrecuentes">
      <div className="fondo-preguntas">
        <div className=" container-fluid tituloPF h1 text-center">Preguntas frecuentes </div>

        <div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item text-center">
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      ¿Si encuentro un modelo que me gusta en internet podría realizarlo?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laboriosam, quisquam, facilis quo porro veritatis ut tempore reiciendis recusandae suscipit laudantium et nemo, a ad ullam praesentium dicta atque. Provident?</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        ¿Dónde están ubicados? / ¿Realizan envios a regiones?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nihil corporis libero nesciunt pariatur sint. Officiis, aut illo minima iusto quasi aspernatur fugiat delectus? Voluptate incidunt cupiditate doloribus in sequi?</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      ¿Qué materiales utilizan para los tejidos?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti facilis, iste quos quod autem, corporis maiores eos, placeat repudiandae fuga. Ad quo eius voluptate quisquam? Repellat nam veritatis consequatur.</div>
    </div>
  </div>
</div>
    </div>
    </div>
    <Footer></Footer>
    
    </div>
    </div>
}

export default PreguntasFrecuentes; 