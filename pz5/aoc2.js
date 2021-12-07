const readFileSync = require('fs').readFileSync

async function main() {
    const input = readFileSync('./advent/pz5/input.txt', 'utf8')
    var inputArray = input.split('\n')

    var lines = []
    for(let i = 0; i < inputArray.length; i++) {
        var elements = inputArray[i].replace(' ', '').split('->')
        var firstElement = elements[0].replace(' ', '').split(',')
        var secondElement = elements[1].replace(' ', '').split(',')
        lines.push({x0: parseInt(firstElement[0]), x1: parseInt(secondElement[0]), y0: parseInt(firstElement[1]), y1: parseInt(secondElement[1])})
    }

    var board = []
    for(let i = 0; i < 1000; i++) {
        board.push([])
        for(let j = 0; j < 1000; j++) {
            board[i].push(0)
        }
    }

    for(let l = 0; l < lines.length; l++) {
        let line = lines[l]
        let xDir = (line.x1 == line.x0) ? 0 : ((line.x1 - line.x0) / Math.abs(line.x1 - line.x0))
        let yDir = (line.y1 == line.y0) ? 0 : ((line.y1 - line.y0) / Math.abs(line.y1 - line.y0))

        let x = line.x0, y = line.y0
        board[y][x]++
        while(x != line.x1 || y != line.y1) {
            x += xDir
            y += yDir
            board[y][x]++
        }
    }

    var count = 0
    for(let y = 0; y < board.length; y++) {
        for(let x = 0; x < board[y].length; x++) {
            if(board[y][x] >= 2) count++
        }
    }

    console.log(`El resultado es ${count}`)
}

main();