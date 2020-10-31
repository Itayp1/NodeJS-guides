

const combineFumc = (value, currentFunc) => currentFunc(value)

const coompose = (functionList) => (val) => functionList.reduce(combineFumc, val)


                            const doubleit = (a) => a * a
                            const addit = (a) => a + a
const additTwiceAndDoubleif = coompose([addit, addit, doubleit, doubleit])

// console.log(additTwiceAndDoubleif(2))
// console.log(coompose([doubleit, addit], 2))


var numbers = [1, 2, 3, 4];
const sum2Numbers = (accumulator, currentNum) => currentNum + accumulator

console.log(numbers.reduce(sum2Numbers, 0))