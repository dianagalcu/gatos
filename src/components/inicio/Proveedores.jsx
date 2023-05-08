import ImgProveedores from "../../imagenes/proveedores.jpg"
import SeccionNav from "../../components/navegador/SeccionNav"

const Proveedores = () => {
  return (
    <div>
        <SeccionNav/>
        <img src={ImgProveedores}/>
        <p>Lorem ipsum</p>
    </div>
  )
}

export default Proveedores