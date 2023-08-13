
import Breadcrumb from './Breadcrumb'
import './Formularios.css'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';


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
        <div className='container form-container'>
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="contact_number" value={contactNumber} />
            <div className="col-md-5 p-2">
                <p className="h4">Nombre </p>
                <input name="nombre" className="form-control" type="text" placeholder="Nombre" aria-label="default input example"></input>
            </div>
            <div className="col-md-5 p-2">
                <p className="h4">Apellido </p>
                <input name="apellido" className="form-control" type="text" placeholder="Apellido" aria-label="default input example"></input>
            </div>
            <div className="col-md-10 p-2">
                <label for="exampleInputEmail1" className="form-label h5">Email</label>
                <input name="email" type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

            </div>
            <div className="col-md-10 p-2">
                <p className="h4">Direccion </p>
                <input name="direccion" className="form-control" type="text" placeholder="Dirección" aria-label="default input example"></input>
            </div>

            <div className="col-md-6 p-2 ">
                <p className="h5">Apartamento/Local/etc. </p>
                <input name="apartamento" className="form-control" type="text" placeholder="Opcional" aria-label="default input example"></input>
            </div>
            <div className="col-md-4 p-2">
                <p className="h4">Comuna </p>
                <select defaultValue="opcion2" name="comuna" className="form-select">
                    <option selected>Open this select menu</option>
                    <option value="1">Estacion Central </option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="col-md-6 p-2">
                <p className="h4">Codigo Postal </p>
                <input name="codigo" className="form-control" type="text" placeholder="Codigo postal" aria-label="default input example"></input>
            </div>

            <div className="col-md-6 p-2">
                <p className="h4">Telefono</p>
                <input name="telefono" className="form-control" type="text" placeholder="Telefono" id="numberInput" ></input>
            </div>

            <div className="col-12 btn-cont">
            <input type="submit" value="Send" />
                <button className="btn boton-form" type="submit">Confirmar</button>
            </div>
        </form>
        </div>


    </>
}

emailjs.init('4DVUPcUC5t1aVoqbv');
export default Formulario;
