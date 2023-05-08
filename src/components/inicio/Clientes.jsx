import ImgCliente from "../../imagenes/cliente.jpg"
import SeccionNav from "../../components/navegador/SeccionNav"

const Clientes = () => {
  return (
    <div>
        <SeccionNav/>
        <img src={ImgCliente}/>
        <p>Lorem ipsum</p>
    </div>
  )
}

export default Clientes