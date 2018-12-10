import Axios from 'axios';
import Storage from '../Storage';
import * as Mime from 'mime';

export default class Image {

    /**
     * Image
     */
    protected image: UnsplashImageData;

    /**
     * Image constructor.
     *
     * @param image
     */
    public constructor(image: UnsplashImageData) {
        this.image = image;
    }

    /**
     * Raw image stream.
     */
    get streamRequest() {
        return Axios.get(this.image.urls.raw, {
            responseType: 'stream',
        });
    }

    /**
     * Store current image.
     */
    async store() {
        const { headers, data } = await this.streamRequest;

        await Storage.storeStream({
            name: `${this.image.id}.${Mime.getExtension(headers['content-type'])}`,
            stream: data,
        });
    }

}