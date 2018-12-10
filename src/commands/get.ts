import { Command } from '@oclif/command';
import Spotlight from '../Spotlight';

export default class Get extends Command {

    /**
     * Command description
     */
    static description = 'Fetch a random wallpaper';

    /**
     * Fetch wallpaper.
     */
    async run() {
        const wallpaper = await Spotlight.wallpaper;
        await Spotlight.storeImage(wallpaper.data);
    }
}