import Axios, { AxiosInstance } from 'axios';
import Helpers from './Helpers';

export default new class Wallpapers {

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

    /**
     * Fetch single image.
     */
    public async single() {
        const imageRequest = await this.api.get('/photos', {
            params: {
                order_by: 'latest',
                page: Helpers.random(1, 100),
                per_page: 10,
                share_key: await this.shareKey,
            }
        });

        return Helpers.sample(imageRequest.data);
    }
}