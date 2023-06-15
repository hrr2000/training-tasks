
interface IProps {
    author: React.ReactNode,
    image: React.ReactNode
}

const ImageTemplate = ({author, image}: IProps) => {
    return (
        <div className="image-layout">
            <div className="author-fixed">
                {author}
            </div>
            <div className="image-show-box">
                {image}
            </div>
        </div>
    )
}

export default ImageTemplate