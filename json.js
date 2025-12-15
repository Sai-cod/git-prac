//                                          JSON
// Method 1
const s1 = {}
console.log(s1)
console.log(`Type of s1 : ${typeof(s1)}`)

s1.name = "Anil"
s1.age = 34
s1['last name'] = "Jadhav"

console.log(s1)
console.log(`Type of s1 : ${typeof(s1)}`)

// Method 2

const s2 = new Object()

s2.name = "Suraj"
s2["Last Name"] = "Yadav"

console.log(s2)
console.log(`Type of s2 : ${typeof(s1)}`)

