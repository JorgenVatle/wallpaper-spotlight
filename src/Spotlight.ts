import Axios, { AxiosInstance } from 'axios';

export default class Spotlight {

    protected api: AxiosInstance;

    constructor() {
        this.api = Axios.create({
            baseURL: 'https://api.unsplash.com/'
        });
    }

}