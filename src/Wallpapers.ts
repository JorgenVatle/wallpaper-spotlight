import Axios, { AxiosInstance } from 'axios';

export default class Wallpapers {

    /**
     * Axios REST instance
     */
    protected api: AxiosInstance;

    /**
     * API cache.
     */
    private cache = {
        share_key: null,
    };

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
            if (this.cache.share_key) {
                return this.cache.share_key;
            }

            const api = await this.api.get('/');

            resolve(this.cache.share_key = api.data.share_key);
        });
    }

}