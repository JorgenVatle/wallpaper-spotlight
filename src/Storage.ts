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
    protected path(to: string) {
        return Path.join(this.storagePath, to);
    }

    /**
     * Store file.
     *
     * @param file
     */
    public store(file: { name: string, blob: Blob }) {
        Filesystem.writeFile(this.path(file.name), file.blob, 'binary', (err: any) => {
            if (err) console.log({ err });
        });
    }

    /**
     * Store a file stream.
     *
     * @param file
     */
    public storeStream(file: { name: string, stream: Stream }) {
        return file.stream.pipe(Filesystem.createWriteStream(this.path(file.name)));
    }

}