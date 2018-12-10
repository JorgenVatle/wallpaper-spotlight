import { Command } from '@oclif/command';
import CLI from 'cli-ux';
import Spotlight from '../Spotlight';
import Wallpapers from '../Wallpapers';

export default class Get extends Command {

    /**
     * Command description
     */
    static description = 'Fetch a random wallpaper';

    /**
     * Fetch wallpaper.
     */
    async run() {
        CLI.action.start('Locating wallpaper');
        const wallpaper = await Wallpapers.single();
        CLI.action.stop();

        CLI.action.start('Downloading wallpaper');
        await Spotlight.storeImage(wallpaper);
        CLI.action.stop(wallpaper.description);
    }
}