const readFileSync = require('fs').readFileSync
const writeFileSync = require('fs').writeFileSync
const bigInt = require('big-integer')

async function main() {
    var date = Date.now()

    const input = readFileSync('input.txt', 'utf8')
    var inputArray = input.split('\n')[0].split(',')

    var stateCount = [bigInt(0), bigInt(0), bigInt(0), bigInt(0), bigInt(0), bigInt(0), bigInt(0), bigInt(0), bigInt(0)]
    for(let i = 0; i < inputArray.length; i++) {
        let value = parseInt(inputArray[i])
        stateCount[value] = stateCount[value].add(1)
    }

    for(let i = 0; i < (256) ; i++) {
        let numberOfEightAndSix = bigInt(stateCount[0])
        for(let j = 1; j < 9; j++) {
            stateCount[j - 1] = stateCount[j]
        }
        stateCount[6] = stateCount[6].add(numberOfEightAndSix)
        stateCount[8] = numberOfEightAndSix
    }

    var count = bigInt(0)
    for(let i = 0; i < 9; i++) {
        count = count.add(stateCount[i])
    }

    console.log(Date.now() - date)

    writeFileSync('output.txt', count.toString())
}

main();