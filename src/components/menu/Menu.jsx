const Menu = ({ items }) => {
    return (
        <section className="items">
            <ul >
                <li className="Juguetes">{items.item1}</li>
                <li className="Concentrados">{items.item2}</li>
                <li className="snacks">{items.item3}</li>
                <li className="Accesorios">{items.item4}</li>
            </ul>
        </section>
    )
}

export default Menu