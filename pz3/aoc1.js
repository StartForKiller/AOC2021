import { readFileSync } from 'fs'

async function main() {
    const input = readFileSync('input.txt', 'utf8')
    var inputArray = input.split('\n')

    var gammaRate = 0
    for(let i = 0; i < 12; i++) {
        gammaRate <<= 1
        let numbersOfOnes = 0
        for(let j = 0; j < inputArray.length; j++) {
            if(inputArray[j].length != 12) continue
            if(inputArray[j][i] == '1') numbersOfOnes++
        }
        if(numbersOfOnes > (inputArray.length / 2)) gammaRate++
    }

    console.log(`The result is ${gammaRate * (gammaRate ^ 0xFFF)}`)
}

main();