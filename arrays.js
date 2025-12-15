//Arrays

const arr1 = []
console.log(arr1)

console.log(`Type of arr1 : ${typeof(arr1)}`)

arr1.push(23)
arr1.push(31)
arr1.push(45)

for(const num of arr1) {
    console.log(num)
}


// Arrays of string
const arr2 = ['rahul', 'rajesh', 'suresh']
console.log(`arr2 : `+ arr2) 

// Arrays of Objects

const arr3 = [
    {name: 'Sharma', age: 23},
    {name: 'Snehal', age: 24},
    {name: 'Kumbar', age: 42},
    {name: 'Shourya', age: 42, number : 124456655}
]

for(const i of arr3) 
    console.log(i) 

// Array of anything
const arr4 = [21, 'sairaj', (a,b)=>a+b]

for (const elem of arr4)
    console.log(elem)

//Array of functions

arr5 = [(a,b)=>a-b, function(a,b){return a*b}, (a,b)=>{return a/b}]
console.log(arr5),

console.log(`function 1 (sub) :`+arr5[0](5,5))
console.log(`function 2 (mul) :`+arr5[1](5,5))
console.log(`function 3 (div) :`+arr5[2](5,5))

// Functions of array
// at function: used to access a element at specific index
console.log(`arr[0] using at ` + arr1.at(0))

//

