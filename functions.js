//                            functions

//1] anonymous functions : no name but function name assigned to the variable name, so call by variable name

let add = function(a, b) {
    return a + b
}
console.log(add(5, 6))

//2] fat arrow function

add = (a,b)=>{
    console.log(a+b)
}
add(5,5)

// 3] default parameters

add = (a=5, b)=>{
    console.log(a+b)
}

add(7)