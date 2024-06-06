import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(__dirname, '../../.env') });

interface Env {
    BASE_URL: string;
    API_KEY: string;
}

function getEnvVar(name: string): string {
    const value: string| undefined = process.env[name];
    if (value === undefined) {
        throw new Error(`Environment variable ${name} is not set!`);
    }
    return value;
}

export const env: Env = {
    BASE_URL: getEnvVar('BASE_URL'),
    API_KEY: getEnvVar('API_KEY'),
};
