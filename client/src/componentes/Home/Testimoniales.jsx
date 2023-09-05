import './Testimonialess.css'
import fondo_testimonios from "./img2/fondo_testimoniales.svg"

const Testimoniales= () =>{
    const backgroundImageStyle = {
        backgroundImage: `url(${fondo_testimonios})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      };
    return <div className=" testimonio container-fluid p-0 m-0" style={backgroundImageStyle}>
    <section  className="content-test container-fluid">
        <p className=" h4 ">Conoce la experiencia de quienes nos prefieren</p>
        <p className=" display-2">Testimoniales</p>

    </section>
</div>
}

export default Testimoniales;
