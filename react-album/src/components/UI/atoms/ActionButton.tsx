interface IProps {
    onClick: Function
    content: string
}

const ImageItem = ({content, onClick}: IProps) => {
    return (
        <button onClick={() => onClick()} className="action-button">
            {content}
        </button>
    )
}

export default ImageItem