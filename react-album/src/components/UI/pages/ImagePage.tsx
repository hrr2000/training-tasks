import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ImageItem from '../atoms/ImageItem'
import AuthorBadge from '../atoms/AuthorBadge'
import Picsum, {emptyImage} from '../../../api/Picsum'
import ImageTemplate from '../templates/ImageTemplate'



const ImagePage = () => {

    const {id: idParam} = useParams()
    const [image, setImage] = useState(emptyImage)

    useEffect(() => {
        if(image.id) return
        console.log(idParam)
        Picsum.getOne(parseInt(idParam || '0')).then(image => {
            setImage(image)
            console.log(image)
        })
    }, [])

    return (
        <div style={{padding: '40px'}}>
            {
                image.id && (
                    <ImageTemplate
                        image={<ImageItem animated={false} image={image} />}
                        author={<AuthorBadge authorName={image.author} />}
                    />
                )
            }
        </div>
    )
}

export default ImagePage