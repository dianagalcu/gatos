import video from "../../imagenes/Video.mp4"

const Video = () => {
    return (
        <section className="video">
            <video controls src={video}></video>
        </section>
    )
}
export default Video