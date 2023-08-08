import './Cards.css';


export const Card = ({imagen, titulo, precio}) => {

const [added, setAdded] = useState(false);

return(

<div className="tarjeta" >
<img src={imagen} alt={titulo} className='tarjeta-imagen' />
<div className='tarjeta-contenido'>
    <h3 className='tarjeta-titulo'>{titulo}</h3>
    <p className='tarjeta-precio'></p>
</div>

{added
? <button type="button" className='boton-quitar'>
Quitar del carrito
</button>
: <button type='button' className='boton-agregar'>
    Agregar al carrito
</button>

}


</div>


)


}