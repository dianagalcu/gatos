import Menu from "./Menu"
import Video from "./Video"
import "./menu.css"

const SeccionMenu = () => {
    const items = {
        item1: "Juguetes",
        item2: "Concentrados",
        item3: "Snacks",
        item4: "Accesorios"
    }
    return (
        <section className="seccionMenu">
            <Menu items={items} />
            <Video />
        </section>
    )
}

export default SeccionMenu