import Path from 'node:path';

export function getPath(baseDir: string, fileName: string) {
    return Path.join(baseDir, fileName)
}