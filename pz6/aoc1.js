const readFileSync = require('fs').readFileSync

async function main() {
    const input = readFileSync('./pz6/input.txt', 'utf8')
    var inputArray = input.split('\n')[0].split(',')

    var states = []
    for(let i = 0; i < inputArray.length; i++) {
        states.push(parseInt(inputArray[i]))
    }

    for(let i = 0; i < 80; i++) {
        let length = states.length
        for(let idx = 0; idx < length; idx++) {
            if(states[idx] == 0) {
                states[idx] = 6
                states.push(8)
            } else states[idx]--
        }
    }

    console.log(`El resultado es: ${states.length}`)
}

main();