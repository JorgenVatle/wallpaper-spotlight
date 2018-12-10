import Axios, { AxiosInstance } from 'axios';
import Config from 'config';

export default class Spotlight {

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
}