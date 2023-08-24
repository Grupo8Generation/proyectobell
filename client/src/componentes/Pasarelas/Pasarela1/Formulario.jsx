import Breadcrumb from './Breadcrumb'
import './Formularios.scss'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import DatosTransferencia from './DatosTransferencia';
import { Link } from 'react-router-dom';

function Formulario() {
    const [contactNumber, setContactNumber] = useState(Math.random() * 100000 | 0);

    // Estados para los campos
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [comuna, setComuna] = useState("");
    const [telefono, setTelefono] = useState("");
    const [codigo, setCodigo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        try {
            await emailjs.sendForm('service_ketjmio', 'template_qc0fnse', form);
            console.log('SUCCESS!');
        } catch (error) {
            console.log('FAILED...', error);
        }
    };

    return (
        <>
            <br />
            <Breadcrumb />
            <p className='h2 px-4'>Contacto</p>
            <div className='container-fluid form-container'>
               
                <form onSubmit={handleSubmit}> 
                <div className='container-fluid formSoloDatos' >
                    <input type="hidden" name="contact_number" value={contactNumber} />

                    <div className="row" style={{ marginLeft: '0px' }}>
                        <div className="col-md-4 p-2">
                            <p className="h4">Nombre {!nombre && <span style={{ color: 'red' }}>*</span>}</p>
                            <input name="nombre" className="form-control" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="col-md-4 p-2">
                            <p className="h4">Apellido {!apellido && <span style={{ color: 'red' }}>*</span>}</p>
                            <input name="apellido" className="form-control" type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-8 p-2">
                        <p className="h4">Email {!email && <span style={{ color: 'red' }}>*</span>}</p>
                        <input name="email" className="form-control" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="col-md-8 p-2">
                        <p className="h4">Direccion {!direccion && <span style={{ color: 'red' }}>*</span>}</p>
                        <input name="direccion" className="form-control" type="text" placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                    </div>

                    <div className="col-md-4 p-2 form-element">
                        <p className="h4">Comuna {!comuna && <span style={{ color: 'red' }}>*</span>}</p>
                        <select defaultValue="opcion2" name="comuna" className="form-select" value={comuna} onChange={(e) => setComuna(e.target.value)}>
                            <option value="0" >Open this select menu</option>
                            <option value="1">Estacion Central </option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="col-md-6 p-2 form-element">
                        <p className="h4">Codigo Postal {!codigo && <span style={{ color: 'red' }}>*</span>}</p>
                        <input name="codigo" className="form-control" type="text" placeholder="Codigo postal" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    </div>

                    <div className="col-md-6 p-2 telefonoForm">
                        <p className="h4">Telefono {!telefono && <span style={{ color: 'red' }}>*</span>}</p>
                        <input name="telefono" className="form-control" type="text" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="col-12 btn-cont">
                        <input type="submit" value="Send" disabled={true} style={{ display: 'none' }} />
                        </div>
                         <div className='container-fluid contenedorDatos'>
                            <DatosTransferencia></DatosTransferencia>
                            </div>
                           
                        <br />
                            <br />
                       <div className='contenedorBotonForm '> 
                        <button
                            className="btn botonFormulario"
                            type="submit"
                            disabled={!nombre || !apellido || !email || !direccion || !comuna || !telefono || !codigo}
                        >
                            Confirmar
                        </button>
<Link to="/Pasarela2">Link</Link>
                      <br />
                        
                        </div>
                          
                    </div>
                </form>
             
            </div>
        </>
    );
}

emailjs.init('4DVUPcUC5t1aVoqbv');
export default Formulario;