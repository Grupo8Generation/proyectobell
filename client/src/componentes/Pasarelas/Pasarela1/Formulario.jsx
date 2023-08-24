
import Breadcrumb from './Breadcrumb'
import './Formularios.scss'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ContenidoDeCarrito } from '../../../pages/Carrito/ContenidoDeCarrito';
import "./Formularios.css"
import DatosTransferencia from './DatosTransferencia';


function Formulario() {
    const [contactNumber, setContactNumber] = useState(Math.random() * 100000 | 0);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        try {
            await emailjs.sendForm('service_ketjmio', 'template_qc0fnse', form);
            console.log('SUCCESS!');
        } catch (error) {
            console.log('FAILED...', error);


        }
    }
    return <>

        <br />
        <Breadcrumb />
        <p className='h2 px-4'>Contacto</p>
        <div className='container-fluid form-container'>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="contact_number" value={contactNumber} />
                <div className=" form-element p-2">
                    <p className="h4">Nombre </p>
                    <input name="nombre" className="form-control" type="text" placeholder="Nombre" aria-label="default input example"></input>
                </div>
                <div className="form-element p-2 ">
                    <p className="h4">Apellido </p>
                    <input name="apellido" className="form-control" type="text" placeholder="Apellido" aria-label="default input example"></input>
                </div>
                <div className=" p-2">
                    <label htmlFor="exampleInputEmail1" className="form-label h5">Email</label>
                    <input name="email" type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                </div>
                <div className=" p-2">
                    <p className="h4">Direccion </p>
                    <input name="direccion" className="form-control" type="text" placeholder="Dirección" aria-label="default input example"></input>
                </div>

                <div className="form-element  p-2 ">
                    <p className="h5">Dpto </p>
                    <input name="apartamento" className="form-control" type="text" placeholder="Opcional" aria-label="default input example"></input>
                </div>
                <div className="form-element  p-2">
                    <p className="h4">Comuna </p>
                    <select defaultValue="opcion2" name="comuna" className="form-select">
                        <option value="0" >Open this select menu</option>
                        <option value="1">Estacion Central </option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className=" p-2">
                    <p className="h4">Telefono</p>
                    <input name="telefono" className="form-control" type="text" placeholder="Telefono" id="numberInput" ></input>
                </div>
             <DatosTransferencia></DatosTransferencia>
                <div className=" btn-cont">
                    <input className="btn" type="submit" value="Confirmar" />
            
                </div>
            </form>
        </div>


    </>
}

emailjs.init('4DVUPcUC5t1aVoqbv');
export default Formulario;
