const obj = { name: "itay", age: 28, isValid: null }

const upperCase = (({ name, ...other }) => ({ ...other, name: name.toUpperCase() }))
const setAge = (({ age, ...other }) => ({ ...other, age: (new Date().getFullYear() - age) }))
const validName = (({ isValid, name, ...other }) => ({ ...other, name, isValid: name.match(/^[A-Za-z]+$/) ? true : false }))
//old way
const func1res = upperCase(obj)
const func2res = setAge(func1res)
const func3res = validName(func2res)
// console.log(func3res)

// console.log(validName(setAge(upperCase(obj))))

const compose = (arr, val) => arr.reduce((updatedObj, currentFunc) => currentFunc(updatedObj), val)


console.log(compose([upperCase, setAge, validName], obj))


