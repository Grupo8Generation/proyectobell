import './Footers.css';

const Footer = ()=>{
    return <div className="bottom-bar d-flex justify-content-between  align-items-center">
    <div className="bottom-bar-section">
     
      <img src="src/img/Frame_15-removebg-preview.png" alt="Logo" width="158" height="158" className='px-1 py-1'></img>
    </div>
    <div className="bottom-bar-section">
      <ul className="list-unstyled mb-0">
        <li><a href="#" className="bottom-bar-link"><b>Nosotros</b></a></li>
        <li><a href="#" className="bottom-bar-link"><b>Pedidos</b></a></li>
        <li><a href="#" className="bottom-bar-link">Envios</a></li>
        
      </ul>
    </div>
    <div className="bottom-bar-section">
      <ul className="list-unstyled mb-0">
        <li><a href="#" className="bottom-bar-link"><b>Preguntas frecuentes</b></a></li>
        <li><a href="#" className="bottom-bar-link"><b>Legal</b></a></li>
      </ul>
    </div>
    <div className="bottom-bar-section">
      <ul className="list-unstyled mb-0">
        <li><a href="#" className="bottom-bar-link"><b>Instagram</b></a></li>
        <li><a href="#" className="bottom-bar-link"><b>Tienda</b></a></li>
      </ul>
    </div>
    <div className="bottom-bar-section">
      <ul className="list-unstyled mb-0">
        <li><b>Consultas:</b></li>
        <li><a href="#" className="bottom-bar-link">bell.tejidosdeamor@gmail.com</a></li>
        <br />
        <li><b>Whatsapp:</b></li>
        <li><a href="#" className="bottom-bar-link">+56 9 3788 2427</a></li>
      </ul>
    </div>
  </div>
}

export default Footer;