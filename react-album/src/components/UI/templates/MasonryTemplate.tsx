import Masonry from 'react-masonry-css'

interface IProps {
    children?: React.ReactNode;
}

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const MasonryTemplate = ({children}: IProps) => {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column">
            {children}
        </Masonry>
    )
}

export default MasonryTemplate