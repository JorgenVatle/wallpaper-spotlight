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

}