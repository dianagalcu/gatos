import Imagenes from "./Imagenes"
import imagen1 from "../../imagenes/cliente.jpg"
import imagen2 from "../../imagenes/productos.jpg"
import imagen3 from "../../Imagenes/proveedores.jpg"
import "./noticias.css"

const SeccionNoticias = () => {
    const imagenes = [
        {
            nombre: "Clientes",
            img: imagen1,
            descripcion: "lorem ipsum"
        },

        {
            nombre: "Productos",
            img: imagen2,
            descripcion: "Lorem ipsum"
        },

        {
            nombre: "Proveedores",
            img: imagen3,
            descripcion: "Lorem ipsum"
        },

    ]

    return <Imagenes imagenes={imagenes} />

}

export default SeccionNoticias