export default function genericsAdvancedSample() {
    type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]
    const mapStringsToNumbers: Map<string, number> = (array, fn) => {
        const result = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            result[i] = fn(item)
        }
        return result
    }

    const numbers = mapStringsToNumbers(['123', '456'], (item) => Number(item))
    console.log(numbers)

    const mapNumbersToNumbers: Map<number, string> = (array, fn) => {
        const result = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            result[i] = fn(item)
        }
        return result
    }

    const strings = mapNumbersToNumbers([123, 456], (item) => String(item))
    console.log(strings)
}
