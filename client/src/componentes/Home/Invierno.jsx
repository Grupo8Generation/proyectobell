import "./Inviernos.css"
import invierno_img from "./img2/fondo_invierno.svg"


const Invierno = () =>{

    const backgroundImageStyle = {
        backgroundImage: `url(${invierno_img})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      };
    return <>
     <div className="invierno-cont container-fluid p-0" style={backgroundImageStyle}>
        <article className="invierno-text container-fluid">
            <p className="conoce-p text-light h5 ">Conoce nuestra nueva colección</p>
            <p className=" invierno-p text-light display-3">Invierno 2023</p>


        </article>

    </div>
    
    
    </>
}


export default Invierno; 