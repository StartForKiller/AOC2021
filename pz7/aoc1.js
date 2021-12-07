const readFileSync = require('fs').readFileSync

async function main() {
    const input = readFileSync('./pz7/input.txt', 'utf8')
    var inputArray = input.split('\n')[0].split(',')

    var positions = []
    var max = 0
    for(let i = 0; i < inputArray.length; i++) {
        let value = parseInt(inputArray[i])
        positions.push(value)
        if(value > max) max = value
    }

    let minFuel = (positions.length * max * (max + 1)) / 2
    for(let i = 0; i <= max; i++) {
        let fuel = 0
        for(let j = 0; j < positions.length; j++) {
            let moves = Math.abs(positions[j] - i)
            if(moves != 0) {
                fuel += ((moves + 1) * moves) / 2
            }
        }

        if(fuel < minFuel) {
            minFuel = fuel
        }
    }

    console.log(`El resultado es: ${minFuel}`)
}

main();