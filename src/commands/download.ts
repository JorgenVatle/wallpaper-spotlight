import { Command } from '@oclif/command';
import * as Notifier from 'node-notifier';
import CLI from 'cli-ux';
import Wallpapers from '../Wallpapers';

export default class Download extends Command {

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
        await wallpaper.store();
        CLI.action.stop(wallpaper.image.description || undefined);

        Notifier.notify({
            title: `Downloaded photo from ${wallpaper.image.user.name}`,
            message: `You can find this image in ~/desktop-spotlight`,

            // @ts-ignore
            timeout: 15,
        })
    }
}