import fs from 'node:fs/promises'
import { getPath } from './getPath'

export async function writeAnswer(baseDir: string, answer: string) {
    const path = getPath(baseDir, 'answer.txt')
    await fs.writeFile(path, answer)
}