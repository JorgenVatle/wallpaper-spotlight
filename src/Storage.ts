import * as OperatingSystem from 'os';
import * as Path from 'path';
import * as Filesystem from 'fs';

export default new class Storage {

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
    public store(file: { name: string, buffer: Buffer }) {
        Filesystem.writeFile(Path.join(this.storagePath, file.name), file.buffer, (err: any) => {
            if (err) console.log({ err });
        });
    }

}