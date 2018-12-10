import Axios, { AxiosInstance } from 'axios';
import Helpers from './Helpers';
import Image from './assets/Image';

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
            headers: {
                'User-Agent': Helpers.userAgent,
            }
        });
    }

    /**
     * Fetch share key from collection API.
     */
    protected get shareKey(): Promise<string> {
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
    public async single(): Promise<Image> {
        const imageRequest = await this.api.get('/photos', {
            params: {
                order_by: 'latest',
                page: Helpers.random(1, 100),
                per_page: 10,
                share_key: await this.shareKey,
            }
        });

        return new Image(Helpers.sample(imageRequest.data));
    }
}