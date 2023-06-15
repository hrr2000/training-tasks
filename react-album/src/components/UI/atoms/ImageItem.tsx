import {Image} from '../../../types'
import Picsum from '../../../api/Picsum'

interface IProps {
    image: Image
    animated: boolean
    width?: number
}


const ImageItem = ({image, animated, width}: IProps) => {
    return (
        <div>
            <img
                className={`image-item ${animated ? 'animated' : ''}`}
                src={Picsum.imageUrl(image, width)}
                // width={width || ""}
                // height={width ? Picsum.calcRelatedHeight(width, image) : ""}
                alt={image.author + " " + image.id} />
        </div>
    )
}

export default ImageItem