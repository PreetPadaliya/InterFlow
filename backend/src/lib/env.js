import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);

dotenv.config({ path: path.resolve(currentDir, '../../.env') });

export const ENV = {
    PORT: Number(process.env.PORT) || 3000,
    DB_URL: process.env.DB_URL,
};

export default ENV;