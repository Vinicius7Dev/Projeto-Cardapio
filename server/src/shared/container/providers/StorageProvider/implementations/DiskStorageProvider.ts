/**
 * Disk Storage Provider
 */

import fs from 'fs';
import path from 'path';

import uploadConfig from '../../../../../config/uploadConfig';

import IStorageProvider from '../models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
    // Saving file in disk storage (uploads folder)
    public async saveFile(fileName: string): Promise<string> {
        await fs.promises.rename(
            path.resolve(uploadConfig.tempFolder, fileName),
            path.resolve(uploadConfig.uploadsFolder, fileName),
        );

        return fileName;
    }

    // Deleting file from the uploads folder
    public async deleteFile(fileName: string): Promise<void> {
        const fileDir = path.resolve(uploadConfig.uploadsFolder, fileName);

        try {
            await fs.promises.stat(fileDir);
            await fs.promises.unlink(fileDir);
        } catch (error) {
            console.log(error);
        }
    }

    // Deleting file from the temp folder
    public async deleteFileFromTemp(fileName: string): Promise<void> {
        const fileDir = path.resolve(uploadConfig.tempFolder, fileName);

        try {
            await fs.promises.stat(fileDir);
            await fs.promises.unlink(fileDir);
        } catch (error) {
            console.log(error);
        }
    }
}

export default DiskStorageProvider;
