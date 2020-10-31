const arr = [{ name: "itay", age: 10 }, { name: "sam", age: 55 }, { name: "jett", age: 30 }, { name: "bob", age: 40 }]



//filter  the obkect with age under 10
const filtering = ({ age }) => age > 10
filterdArr = arr.filter(filtering)

// abount the sorting - if the function return negetive value then a will be befora b
//and if the funtion  return positive number then b will be before a 
const sorting = (a, b) => a.age - b.age
sortedArr = filterdArr.sort(sorting)

//refactor the object , changed age to myAge
const mapping = ({ name, age }) => ({ name, myAge: age })
mapedArr = sortedArr.map(mapping)


console.log(
    arr.filter(filtering)
        .sort(sorting)
        .map(mapping))




