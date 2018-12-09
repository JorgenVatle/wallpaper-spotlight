import OperatingSystem from 'os';
import Path from 'path';

export default class Storage {

    protected storagePath: string;

    public constructor() {
        this.storagePath = Path.join(OperatingSystem.homedir(), 'desktop-spotlight');
    }

}