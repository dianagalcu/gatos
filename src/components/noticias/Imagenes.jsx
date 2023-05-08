const Imagenes = ({ imagenes }) => {
    return (
        <section className="seccionTarjeta">
            {
                imagenes.map((imagen, index) => (
                    <div key={index} className={`tarjeta tarjeta-${index+1}`}>
                        <img src={imagen.img} />
                        <h3>{imagen.nombre}</h3>
                        <p>{imagen.descripcion}</p>
                    </div>
                ))
            }
        </section>
    )
}
export default Imagenes