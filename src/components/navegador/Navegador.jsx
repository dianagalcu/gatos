import {Link} from "react-router-dom"


const navegador =()=> {
    return (
        <div className="seccionLinks">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/clientes"}>Clientes</Link>
                <Link to={"/productos"}>Productos</Link>
                <Link to={"/proveedores"}>Proveedores</Link>
        </div>
    )
}

export default navegador