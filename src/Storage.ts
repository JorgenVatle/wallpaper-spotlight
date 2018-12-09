import OperatingSystem from 'os';
import Path from 'path';
import Filesystem from 'fs';

export default class Storage {

    protected storagePath: string;

    public constructor() {
        this.storagePath = Path.join(OperatingSystem.homedir(), 'desktop-spotlight');
    }

    public store(file: { name: string, blob: Blob }) {
        Filesystem.writeFile(Path.join(this.storagePath, file.name), file.blob, (err: any) => {
            if (err) console.log({ err });
        });
    }

}