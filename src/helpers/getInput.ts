import fs from 'node:fs/promises'
import { getPath } from './getPath'

export async function getInput(baseDir: string) {
    const path = getPath(baseDir, 'input.txt')
    const file = await fs.readFile(path)

    return file.toString()
}