import OperatingSystem from 'os';
import Path from 'path';
import Filesystem from 'fs';

export default class Storage {

    /**
     * Storage path.
     */
    protected storagePath: string;

    /**
     * Storage constructor.
     */
    public constructor() {
        this.storagePath = Path.join(OperatingSystem.homedir(), 'desktop-spotlight');
    }

    /**
     * Store file.
     *
     * @param file
     */
    public store(file: { name: string, blob: Blob }) {
        Filesystem.writeFile(Path.join(this.storagePath, file.name), file.blob, (err: any) => {
            if (err) console.log({ err });
        });
    }

}