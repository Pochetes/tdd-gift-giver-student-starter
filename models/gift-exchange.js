class GiftExchange {
    constructor() {
        this.super()
    }

    static shuffle(array) {
        let currentIndex = array.length, randomIndex

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
        }

        return array;
    }

    static pairs(names) {
        if (!names.length % 2) {
            throw new Error('the number of names is odd')
        }

        const shuffledPairs = this.shuffle(names)

        const newPairs = []

        for (let i = 0; i < shuffledPairs.length; i += 2) {
            const pair = [shuffledPairs[i], shuffledPairs[i + 1]]
            newPairs.push(pair)
        }

        return newPairs
    }

    static traditional(names) {
        const pairs = this.pairs(names)

        // const traditionalPairs = pairs.map(pair => {
        //     return `${pair[0]} is giving a gift to ${pair[1]}`
        // })

        const traditionalPairs = pairs.reduce((prev, item, index) => {
            if (index + 1 === pairs.length) {
                return [
                    ...prev,
                    `${item[0]} is giving a gift to ${item[1]}`
                    `${item[1]} is giving a gift to ${pairs[0][0]}`
                ]
            } else {
                return [
                    ...prev,
                    `${item[0]} is giving a gift to ${item[1]}`
                    `${item[1]} is giving a gift to ${pairs[index + 1][0]}`
                ]
            }
        }, [])
        return
    }
}

module.exports = GiftExchange
