function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number) {
    console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num:number) => void) {
    const result = n1 + n2
    cb(result)
}

printResult(add(5, 12))

// let combinedValues: Function
let combinedValues: (a: number, b: number) => number //should accept any function that takes two parameters
combinedValues = add // satisfies above
// combinedValues = printResult // doesn't satisfy above as only takes one parametre
console.log(combinedValues(4,2))

addAndHandle(3, 11, (result) => {console.log(result)})