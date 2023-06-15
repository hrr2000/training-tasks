interface IProps {
    authorName: string
}

const AuthorBadge = ({authorName}: IProps) => {
    return (
        <div>
            <span>Author: </span>
            <span>{authorName}</span>
        </div>
    )
}

export default AuthorBadge