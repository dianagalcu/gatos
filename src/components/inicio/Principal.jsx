import Clientes from "../inicio/Clientes"
import Productos from "../inicio/Productos"
import Provedores from "../inicio/Proveedores"
import SeccionMenu from "../menu/SeccionMenu"
import Noticias from "../noticias/Noticias"

const Principal = () => {
  return (
    <div>
      <Clientes />
      <Productos />
      <Provedores />
      <SeccionMenu />
      <Noticias />
    </div>
  )
}

export default Principal