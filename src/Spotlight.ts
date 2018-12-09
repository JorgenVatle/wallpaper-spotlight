import Axios, { AxiosInstance } from 'axios';
import Config from 'config';

export default class Spotlight {

    protected api: AxiosInstance;

    public constructor() {
        this.api = Axios.create({
            baseURL: 'https://api.unsplash.com/',
            headers: {
                Authorization: Config.get('unsplash.access')
            }
        });
    }

    /**
     * Fetch images
     */
    public images() {
        return this.api.get('/photos');
    }
}