import * as OperatingSystem from 'os';
import * as Path from 'path';
import * as Filesystem from 'fs';
import { Stream } from 'stream';

export default new class Storage {

    /**
     * Storage path.
     */
    protected get storagePath() {
        const path = Path.join(OperatingSystem.homedir(), 'desktop-spotlight');

        if (!Filesystem.existsSync(path)) {
            Filesystem.mkdirSync(path);
        }

        return path;
    }

    /**
     * Build file path to the given destination.
     *
     * @param to
     */
    public path(to: string) {
        return Path.join(this.storagePath, to);
    }

    /**
     * Store a file stream.
     *
     * @param file
     */
    public storeStream(file: { name: string, stream: Stream }) {
        file.stream.pipe(Filesystem.createWriteStream(this.path(file.name)));

        return new Promise((resolve, reject) => {
            file.stream.on('end', resolve);
            file.stream.on('error', reject);
        });
    }

}