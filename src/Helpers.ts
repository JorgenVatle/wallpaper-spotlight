const packageJson = require('../package.json');

export default new class Helpers {

    /**
     * Create a random integer within the given range.
     *
     * @param min
     * @param max
     */
    random(min: number, max: number) {
        return Math.floor(Math.random() * ( max - min + 1 ) + min);
    }

    /**
     * Sample a random entry from the given array.
     * @param array
     */
    sample(array: Array<any>) {
        return array[this.random(1, array.length) - 1];
    }

    /**
     * Package User-Agent.
     */
    get userAgent() {
        return `${packageJson.name} v${packageJson.version} [${packageJson.homepage}]`
    }
}