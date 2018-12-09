import Axios from 'axios';

export default class Spotlight {

    protected api;

    constructor() {
        this.api = Axios.create({
            baseURL: 'https://api.unsplash.com/'
        });
    }

}