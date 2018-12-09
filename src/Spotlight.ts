import Axios, { AxiosInstance } from 'axios';

export default class Spotlight {

    protected api: AxiosInstance;

    public constructor() {
        this.api = Axios.create({
            baseURL: 'https://api.unsplash.com/'
        });
    }

    /**
     * Fetch images
     */
    public images() {
        return this.api.get('/images');
    }
}