import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MasonryTemplate from '../templates/MasonryTemplate'
import Picsum from '../../../api/Picsum'
import constants from '../../../utils/constants'
import ImageItem from '../atoms/ImageItem'
import ActionButton from '../atoms/ActionButton'
import {Image} from '../../../types'


const picsum = new Picsum(1, constants.picsum.IMAGES_PAGE_SIZE)

const HomePage = () => {

    const navigate = useNavigate()

    const [count, setCount] = useState<number>(0)

    const [images, setImages] = useState<Image[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const showMoreImages = () => picsum.get().then(images => setImages(images))

    useEffect(() => {
        if(isLoading) {
            setIsLoading(false)
            showMoreImages()
        }
    }, [isLoading])

    return (
        <div style={{padding: '40px'}}>
            <MasonryTemplate>
                {images.map((image: Image) => {
                    return (
                        <div style={{cursor: 'pointer'}} key={`image-${image.id}`} onClick={() => navigate(`image/${image.id}`)}>
                                <ImageItem animated={true} image={image} width={600} />
                        </div>
                    )
                })}
            </MasonryTemplate>
            <ActionButton content="Show More Images" onClick={showMoreImages} />
        </div>
    )
}

export default HomePage