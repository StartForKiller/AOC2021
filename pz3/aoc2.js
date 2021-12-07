const readFileSync = require('fs').readFileSync

function determineCommon(list, index, ) {
    let numbersOfOnes = 0
    let numbersOfZeros = 0
    for(let j = 0; j < list.length; j++) {
        if(list[j].length != 12) continue
        if(list[j][index] == '1') numbersOfOnes++
        else numbersOfZeros++
    }
    if(numbersOfOnes > numbersOfZeros) return 1
    else if(numbersOfOnes < numbersOfZeros) return 0
    return -1
}

async function main() {
    const input = readFileSync('input.txt', 'utf8')
    var inputArray = input.split('\n')

    var oxygenArray = inputArray.map((x) => x);
    var co2Array = inputArray.map((x) => x);
    for(let i = 0; i < 12; i++) {
        if(oxygenArray.length > 1) {
            let common = determineCommon(oxygenArray, i);
            for(let j = 0; j < oxygenArray.length; j++) {
                if(oxygenArray[j].length != 12) continue
                let inputValue = oxygenArray[j][i]
                switch(common) {
                    case 0:
                        if(inputValue == '1') oxygenArray[j] = '';
                        break
                    case 1:
                    default:
                        if(inputValue == '0') oxygenArray[j] = '';
                        break
                }
            }
            oxygenArray = oxygenArray.filter(v => v.length == 12)
        }
        if(co2Array.length > 1) {
            let common = determineCommon(co2Array, i);
            for(let j = 0; j < co2Array.length; j++) {
                if(co2Array[j].length != 12) continue
                let inputValue = co2Array[j][i]
                switch(common) {
                    case 0:
                        if(inputValue == '0') co2Array[j] = '';
                        break
                    case 1:
                    default:
                        if(inputValue == '1') co2Array[j] = '';
                        break
                }
            }
            co2Array = co2Array.filter(v => v.length == 12)
        }
    }

    console.log(`The result is ${parseInt(oxygenArray[0], 2) * parseInt(co2Array[0], 2)}`)
}

main();