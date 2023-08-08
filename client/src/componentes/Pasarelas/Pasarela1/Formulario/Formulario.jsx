import Breadcrumb from '../Breadcrumb'
import './Formularios.css'

export const Formulario = () => {
    return <>
    
    <br />
    <Breadcrumb/>
    <p className='h2 px-4'>Contacto</p>
    <form action="https://formsubmit.co/amandafranciscaruizz@gmail.com" method="POST" class="row needs-validation px-5 " novalidate>

        <div className="col-md-5 p-2">
            <p className="h4">Nombre </p>
            <input name="nombre" class="form-control" type="text" placeholder="Nombre" aria-label="default input example"></input>
        </div>
        <div className="col-md-5 p-2">
            <p className="h4">Apellido </p>
            <input name="apellido"class="form-control" type="text" placeholder="Apellido" aria-label="default input example"></input>
        </div>
        <div className="col-md-10 p-2">
            <label for="exampleInputEmail1" className="form-label h5">Email</label>
            <input name="email"type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

        </div>
        <div className="col-md-10 p-2">
            <p className="h4">Direccion </p>
            <input name="direccion" class="form-control" type="text" placeholder="Dirección" aria-label="default input example"></input>
        </div>

        <div className="col-md-6 p-2 ">
            <p className="h5">Apartamento/Local/etc. </p>
            <input name="apartamento" class="form-control" type="text" placeholder="Opcional" aria-label="default input example"></input>
        </div>
        <div className="col-md-4 p-2">
            <p className="h4">Comuna </p>
            <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">Estacion Central </option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
            </div>
        <div className="col-md-6 p-2">
            <p className="h4">Codigo Postal </p>
            <input name="codigo"class="form-control" type="text" placeholder="Codigo postal" aria-label="default input example"></input>
        </div>

        <div className="col-md-6 p-2">
            <p className="h4">Telefono</p>
            <input name="telefono" class="form-control" type="text" placeholder="Telefono" id="numberInput" ></input>
        </div> 
        
        <div class="col-12 btn-cont">
            <button class="btn boton-form" type="submit">Confirmar</button>
        </div>
    </form>


</>
}
