import {Image} from '../types'
import constants from '../utils/constants'

export const emptyImage = {
    id: 0,
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: ''
}


class Picsum {

    page: number = 0
    limit: number = 0
    static isFetching: boolean = false
    images: Image[] = []

    constructor(page: number, limit: number) {
        this.page = page
        this.limit = limit
    }

    static calcRelatedHeight = (width: number, image: Image): number => Math.round((width * image.height) / image.width)

    static calcRelatedWidth = (height: number, image: Image): number => Math.round((height * image.width) / image.height)

    static imageUrl = (image: Image, width: number | undefined) => {
        if(width) return `${constants.picsum.IMAGE_URL_PREFIX}/${image.id}/${width}/${Picsum.calcRelatedHeight(width, image)}`
        return `${constants.picsum.IMAGE_URL_PREFIX}/${image.id}/${image.width}/${image.height}`
    }

    static imageInfoURL= (id: number): string => `https://picsum.photos/id/${id}/info`

    static async getOne(id: number): Promise<any>  {

        if(Picsum.isFetching) return emptyImage

        Picsum.isFetching = true
        return await fetch(Picsum.imageInfoURL(id)).then(res => {
            Picsum.isFetching = false
            return res.json()
        }).catch(console.error)

    }

    listUrl = (): string => `https://picsum.photos/v2/list?page=${this.page}&limit=${this.limit}`

    get = async (): Promise<Image[]> => {

        if(Picsum.isFetching) return []

        Picsum.isFetching = true
        return this.images = [...this.images, ...await fetch(this.listUrl()).then(res => {
            this.page ++
            Picsum.isFetching = false
            return res.json()
        }).catch(console.error)]

    }

}

export default Picsum
