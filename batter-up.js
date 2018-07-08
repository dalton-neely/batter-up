const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numAtBats = 0
let officalAtBats = 0
let totalBases = 0

const parseInput = input => {
    const str = input.split(' ')
    for(let i = 0; i < numAtBats; i++){
        let currentBases = parseInt(str[i],10)
        if(currentBases >= 0){
            officalAtBats++
            totalBases += currentBases
        }
    }
}

const calcSlugging = () => {
    return totalBases / officalAtBats
}

rl.on('line', input => {
    if(numAtBats === 0)
        numAtBats = parseInt(input,10)
    else{
        parseInput(input)
        console.log(calcSlugging())
        rl.close()
    }
})