import './MasVendidos.css'
import CardFija1 from "../pages/Carrito/CardsFijas/CardFija1"
import CardFija2 from "../pages/Carrito/CardsFijas/CardFija2"
import CardFija3 from "../pages/Carrito/CardsFijas/CardFija3"
const MasVendido = () => {
    return<div className='container-fluid LosMas'>
        <h1 className="text-center">Los más vendidos</h1>
       
        <h3 className="text-center"><a href="https://www.ejemplo.com">Ver todo</a></h3>
<div className='container d-flex cardMAsVendidas'>
 <CardFija1></CardFija1>
 <CardFija2></CardFija2>
 <CardFija3></CardFija3>
</div>
        </div>

}

export default MasVendido;

