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
                    <p></p></div>
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