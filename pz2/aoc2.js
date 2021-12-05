import { readFileSync } from 'fs'

async function main() {
    const input = readFileSync('input.txt', 'utf8')
    var inputArray = input.split('\n')

    var hPos = 0
    var vPos = 0
    var aim = 0
    for(let i = 0; i < inputArray.length; i++) {
        let commandAndValue = inputArray[i].split(' ')
        if(commandAndValue.length != 2) continue

        switch(commandAndValue[0]) {
            case 'forward':
                let value = parseInt(commandAndValue[1])
                hPos += value
                vPos += value * aim
                break
            case 'down':
                aim += parseInt(commandAndValue[1])
                break
            case 'up':
                aim -= parseInt(commandAndValue[1])
                break
        }
    }

    console.log(`The result is: ${hPos * vPos}`)
}

main();