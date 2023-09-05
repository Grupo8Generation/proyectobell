import Footer from "../Footer";
import NavBar from "../NavBar";
import "./AspectosLegaless.css"






const AspectosLegales = () => {

    return <>

        <NavBar />
        <div className="container-fluid">
            <p className="h1 text-center aspLegTit">Aspectos Legales</p>
            <div className="row p-3 rowAsp">
                <div className="col-6">
                    <p className="h2 text-center inTit">Términos y <br />
                        Condiciones del Servicio</p>
                    <p>
                        Aceptación de los términos: Al acceder y utilizar nuestro sitio web, usted acepta cumplir con los siguientes términos y condiciones de servicio. Si no está de acuerdo con alguno de estos términos, le recomendamos que no utilice nuestros servicios. <br />
                        Uso del sitio web: Nuestro sitio web y su contenido son propiedad de Bell - Tejidos con Amor. Está permitido utilizar el contenido con fines personales y no comerciales. Queda estrictamente prohibida la reproducción, distribución, modificación o venta del contenido sin nuestro consentimiento previo por escrito.<br />
                        Precios y pagos: Todos los precios de nuestros productos están en la moneda especificada y no incluyen impuestos ni gastos de envío, a menos que se indique lo contrario. Nos reservamos el derecho de modificar los precios en cualquier momento. Los pagos se realizan a través de los métodos de pago disponibles en nuestro sitio web y están sujetos a sus términos y condiciones.<br />
                        Envío y entrega: Nos esforzamos por enviar nuestros productos dentro del plazo establecido. Sin embargo, no nos hacemos responsables de los retrasos o daños causados durante el transporte. El cliente es responsable de proporcionar la dirección de entrega correcta y de estar disponible para recibir el paquete en el momento de la entrega.<br />
                        Política de devoluciones: Aceptamos devoluciones dentro de un período de [X] días a partir de la recepción del producto, siempre y cuando el producto esté en su estado original y no haya sido utilizado. Los gastos de envío para la devolución corren por cuenta del cliente, a menos que el producto presente defectos de fabricación.<br />
                        Privacidad y protección de datos: Respetamos su privacidad y nos comprometemos a proteger sus datos personales. Para obtener más información sobre cómo recopilamos, utilizamos y protegemos sus datos, consulte nuestra Política de Privacidad.</p></div>
                
                <div className="col-6">
                    <p className="h2 text-center inTit ">Política de Privacidad <br />de Datos</p>
                    <p className="text-center"></p>
                </div>
            </div>




        </div>
        <Footer />








    </>



}


export default AspectosLegales; 