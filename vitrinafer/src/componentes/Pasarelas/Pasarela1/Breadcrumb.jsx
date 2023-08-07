import './Breadcrumbs.css'


const Breadcrumb = () =>{
    return<nav className='breadcrumbsForm' aria-label="breadcrumb ">
                        <ol className="breadcrumb px-3">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Tienda</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Datos de contacto</li>
                        </ol>
                    </nav>
    
}

export default Breadcrumb; 