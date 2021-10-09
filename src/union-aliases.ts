type Combinable = number | string // store types in an alias
type ConversionDescriptor = 'as-number' | 'as-string' // store types in an alias

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
       result = +input1 + +input2  
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
    // if(resultConversion === 'as-number') {
    //     return +result
    // }else{
    //     return result.toString()
    // }
    
}

const combinedAges = combine(1,34, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine('1','34', 'as-number')
console.log(combinedStringAges)

const combinedNames = combine('Anna', 'Peter', 'as-string')
console.log(combinedNames)