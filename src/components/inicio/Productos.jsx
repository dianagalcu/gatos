import ImgProducto from "../../imagenes/productos.jpg"
import SeccionNav from "../../components/navegador/SeccionNav"

const Productos = () => {
  return (
    <div>
        <SeccionNav/>
        <img src={ImgProducto}/>
        <p>Lorem ipsum</p>
    </div>
  )
}

export default Productos