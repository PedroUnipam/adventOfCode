import { day1 } from './day1'


const fns: Record<number, Function> = {
    1: day1,
}

let dayAsNumber: number | null = null

try {
    const dayAsString = process.argv.at(-1)!

    dayAsNumber = parseInt(dayAsString)

} catch (err) {
    console.error("Invalid Day")
}

if (!dayAsNumber || dayAsNumber < 1 || dayAsNumber > 25) {
    throw new Error("Please input a valid day")
}

(() => {
    const fn = fns[dayAsNumber]

    if (!fn) {
        console.error("Day not created")
        process.exit(1)
    }

    fn()
})()

