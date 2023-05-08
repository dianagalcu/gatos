import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SeccionNav from "./components/navegador/SeccionNav"
import Clientes from "./components/inicio/Clientes"
import Productos from "./components/inicio/Productos"
import Proveedores from "./components/inicio/Proveedores"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SeccionNav />
  },

  {
    path: "/clientes",
    element: <Clientes/>
  },

  {
    path: "/productos",
    element: <Productos/>
  },

  {
    path: "/proveedores",
    element: <Proveedores/>
  },

])

function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
