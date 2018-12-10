import Axios, { AxiosInstance } from 'axios';
import * as Config from 'config';
import * as Mime from 'mime';
import Storage from './Storage';

interface UnsplashImage {
    id: string,
    urls: {
        raw: string,
        full: string,
    },
}

export default new class Spotlight {

    /**
     * REST API Axios instance.
     */
    protected api: AxiosInstance;

    /**
     * Spotlight constructor
     */
    public constructor() {
        this.api = Axios.create({
            baseURL: 'https://api.unsplash.com/',
            headers: {
                Authorization: `Client-ID ${Config.get('unsplash.access')}`
            }
        });
    }

    /**
     * Fetch images
     */
    public images() {
        return this.api.get('/photos');
    }

    /**
     * Fetch a random wallpaper.
     */
    public get wallpaper() {
        return this.api.get('/photos/random', {
            data: {
                orientation: 'landscape',
                query: 'wallpaper'
            }
        })
    }

    /**
     * Store Unsplash image.
     *
     * @param image
     */
    public async storeImage(image: UnsplashImage) {
        const request = await Axios.get(image.urls.full, {
            responseType: 'stream',
        });

        await Storage.storeStream({
            name: `${image.id}.${Mime.getExtension(request.headers['content-type'])}`,
            stream: request.data,
        });
    }
}