import { Command } from '@oclif/command';
import CLI from 'cli-ux';
import Wallpapers from '../Wallpapers';

export default class Wallpaper extends Command {

    /**
     * Command description
     */
    static description = 'Set a random image as the desktop wallpaper.';

    /**
     * Fetch wallpaper.
     */
    async run() {
        CLI.action.start('Locating wallpaper');
        const wallpaper = await Wallpapers.single();
        CLI.action.stop();

        CLI.action.start('Downloading and applying wallpaper');
        await wallpaper.setAsWallpaper();
        CLI.action.stop(wallpaper.image.description || undefined);
    }
}