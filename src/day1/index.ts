import { getInput, writeAnswer } from "../helpers";

export async function day1() {
    const input = await getInput(__dirname)

    const lines = input.split('\r\n')

    const twoDigitNumbers: number[] = lines.map((line) => {
        const chars = line.split('')
        const numericChars = chars.filter((char) => {
            const numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            return numerals.includes(char)
        })

        const firstNumber = numericChars.at(0) as string
        const lastNumber = numericChars.at(-1) as string

        const twoDigitNumberAsString = firstNumber.concat(lastNumber)

        const twoDigitNumber = +twoDigitNumberAsString

        return twoDigitNumber
    })

    let sum = 0

    twoDigitNumbers.forEach((twoDigitNumber) => sum += twoDigitNumber) 

    const answer = sum.toString()

    await writeAnswer(__dirname, answer)
}

// 1 problema será lançado diariamente, começando hoje e indo até o Natal.
// Sinta-se livre para pedir ajuda, só não vale copiar respostas ou usar o chat LGBTQIA+.
// Boa sorte, bons estudos e se divirta :)
// No final vai ter praticado inglês, typescript e lógica de programação!