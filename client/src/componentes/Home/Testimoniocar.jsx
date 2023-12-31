import './Testimonio-cars.css';
import React from 'react';

import testimonioCar from "./img2/FONDO_cARRUSEL2.svg";
import testimonio1 from "./img2/testimonio1.jpg";
import testimonio2 from "./img2/testimonio2.jpg";
import testimonio3 from "./img2/testimonio3.jpg";
const Testimoniocar = ()=>{
   
    const backgroundImageStyle = {
        backgroundImage: `url(${testimonioCar})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      };


    return <div className="background-container container-fluid " id="bg-testimonios" style={backgroundImageStyle}>
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-center m-auto">
                
                <div id="myCarousel" className=" carousel slide" data-bs-ride="carousel">
                     <div className="carousel-inner">
                        <div className= "item carousel-item active" >
                            <div className="img-box"><img src={testimonio1}alt="Katherine"></img></div>
                            <p className="testimonial">Ya perdí la cuenta de los años que llevo confiando en los
                                productos y el profesionalismo de esta empresa. Feliz con los resultados.</p>
                            <p className="overview"><b>Katherine</b>, 25 Años</p>
                        </div>
                        <div className="item carousel-item" >
                            <div className="img-box"><img src={testimonio2} alt="Francisca"></img></div>
                            <p className="testimonial ">Se nota el cariño y el amor puesto en cada producto. Bueno,
                                bonito y barato! Recomendado al 1000%</p>
                            <p className="overview"><b>Francisca</b>, 32 Años</p>
                        </div>
                        <div className="item carousel-item">
                            <div className="img-box"><img src={testimonio3} alt="Luisa"></img></div>
                            <p className="testimonial ">Compre diferentes productos y la verdad, se nota el amor y
                                dedicación en cada trabajo. Agradecida de haber podido encontrar una página que
                                cumpla completamente mis expectativas!!</p>
                            <p className="overview"><b>Luisa</b>, 40 Años</p>
                        </div>
                    </div>
                    <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

}

export default Testimoniocar;