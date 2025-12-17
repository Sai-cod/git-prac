const arr1 = []

arr1.push(34)
arr1.push(23)
arr1.push(1)
arr1.push(2)
arr1.push(2)

// normal iteration using for of loop
console.log("Iteration using for of : ")
for(const el of arr1)
    console.log(el)

// iteration using foreach  method 
// Note: foreach only used for validation 
// foreach not used for value processing
console.log("Iteration using foreach method: ")
arr1.forEach((val)=>console.log(val))

