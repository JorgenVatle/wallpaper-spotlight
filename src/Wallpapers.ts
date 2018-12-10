import Axios, { AxiosInstance } from 'axios';

export default class Wallpapers {

    /**
     * Axios REST instance
     */
    protected api: AxiosInstance;

    /**
     * Wallpapers constructor
     */
    constructor() {
        this.api = Axios.create({
            baseURL: 'https://unsplash.com/napi/collections/1065976',
        });
    }

}