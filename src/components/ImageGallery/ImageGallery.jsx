import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = ({ data, onClick }) => {
    return (
        <ul className={s.list}>
            {data.map(({ id, urls, description}) => {
                return <li key={id} onClick={() => onClick(urls.regular)}>
                    <ImageCard data={urls} description={description} />
                </li>
            })}
        </ul>
    )
}

export default ImageGallery