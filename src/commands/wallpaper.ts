import { Command } from '@oclif/command';
import CLI from 'cli-ux';
import * as Notifier from 'node-notifier';
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

        Notifier.notify({
            title: `Photograph by ${wallpaper.image.user.name}`,
            message: 'You can view their portfolio on Unsplash!',

            // @ts-ignore
            timeout: 20,
        })
    }
}