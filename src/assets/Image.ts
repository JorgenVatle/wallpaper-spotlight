import Axios from 'axios';
import * as Mime from 'mime';
import * as Wallpaper from 'wallpaper';
import Storage from '../Storage';

export default class Image {

    /**
     * Image
     */
    public readonly image: UnsplashImageData;

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
     * Whether or not the current image is in landscape mode.
     */
    get isLandscape() {
        return this.image.height < this.image.width;
    }

    /**
     * Photographer portfolio URL
     */
    get portfolio() {
        return this.image.user.portfolio_url || this.image.user.links.html;
    }

    /**
     * Store current image.
     */
    async store() {
        const { headers, data } = await this.streamRequest;

        return await Storage.storeStream({
            name: `${this.image.id}.${Mime.getExtension(headers['content-type'])}`,
            stream: data,
        });
    }

    /**
     * Set the current image as a wallpaper.
     */
    async setAsWallpaper() {
        const imagePath = await this.store();
        await Wallpaper.set(imagePath);
    }

}