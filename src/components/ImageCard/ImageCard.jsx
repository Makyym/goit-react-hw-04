import s from "./ImageCard.module.css"

const ImageCard = ({ data, description }) => {
    const { regular, small } = data;
    return (
        <div className={s.div}>
            <img src={small} alt={description} />
        </div>
    )
}

export default ImageCard