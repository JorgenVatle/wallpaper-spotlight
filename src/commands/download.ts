import { Command } from '@oclif/command';
import * as Notifier from 'node-notifier';
import CLI from 'cli-ux';
import Wallpapers from '../Wallpapers';
import Storage from '../Storage';

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
        const savePath = Storage.shortenPath(await wallpaper.store());
        CLI.action.stop(wallpaper.image.description || undefined);

        const title = `Downloaded photo by ${wallpaper.image.user.name}`;
        const message = `You can find this image in ${savePath}`;

        this.log('\n' + title);
        this.log(wallpaper.portfolio);
        this.log('\n' + message);

        // @ts-ignore
        Notifier.notify({ title, message, timeout: 15, });
    }
}