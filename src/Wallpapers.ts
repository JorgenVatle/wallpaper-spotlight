import Axios, { AxiosInstance } from 'axios';

export default class Wallpapers {

    /**
     * Axios REST instance
     */
    protected api: AxiosInstance;

    /**
     * Wallpapers constructor
     */
    public constructor() {
        this.api = Axios.create({
            baseURL: 'https://unsplash.com/napi/collections/1065976',
        });
    }

    /**
     * Fetch share key from collection API.
     */
    protected get shareKey() {
        return new Promise(async (resolve, reject) => {
            const api = await this.api.get('/');

            resolve(api.data.share_key);
        });
    }

}