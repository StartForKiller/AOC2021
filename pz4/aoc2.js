import { readFileSync } from 'fs'

function checkWin(board) {
    for(let y = 0; y < 5; y++) {
        let hit = true
        for(let x = 0; x < 5; x++) {
            if(!board[y][x].marked) {
                hit = false
                break
            }
        }
        if(hit) return true
    }

    for(let x = 0; x < 5; x++) {
        let hit = true
        for(let y = 0; y < 5; y++) {
            if(!board[y][x].marked) {
                hit = false
                break
            }
        }
        if(hit) return true
    }

    return false
}

async function main() {
    const input = readFileSync('input.txt', 'utf8')
    var inputArray = input.split('\n') //In lines

    var randomNumbers = inputArray[0].split(',').map(v => parseInt(v))
    var numbersOfBoards = (inputArray.filter(v => v != '').length - 1) / 5
    
    var numbers = inputArray.slice(2).join(' ').split(' ').filter(v => v != '')
    
    var boards = []
    for(var i = 0; i < numbersOfBoards; i++) {
        boards.push([])
        for(let y = 0; y < 5; y++) {
            boards[i].push([])
            for(let x = 0; x < 5; x++) {
                boards[i][y].push({n: parseInt(numbers[(i * 25) + (y * 5) + x]), marked: false})
            }
        }
    }

    var boardsThatWon = []
    var lastWonRndValue = 0
    for(let i = 0; i < randomNumbers.length; i++) {
        for(let b = 0; b < boards.length; b++) {
            if(boardsThatWon.indexOf(b) > -1) continue
            for(let y = 0; y < 5; y++) {
                for(let x = 0; x < 5; x++) {
                    if(boards[b][y][x].n == randomNumbers[i]) boards[b][y][x].marked = true
                }
            }
        }

        for(let b = 0; b < boards.length; b++) {
            if(boardsThatWon.indexOf(b) > -1) continue
            
            let win = checkWin(boards[b])
            if(win) {
                boardsThatWon.push(b);
                lastWonRndValue = randomNumbers[i]
            }
        }
    }

    let halfScore = 0
    let boardIdx = boardsThatWon[boardsThatWon.length - 1]
    for(let y = 0; y < 5; y++) {
        for(let x = 0; x < 5; x++) {
            if(!boards[boardIdx][y][x].marked) halfScore += boards[boardIdx][y][x].n
        }
    }
    console.log(`Last win with score ${halfScore * lastWonRndValue}`)
}

main();