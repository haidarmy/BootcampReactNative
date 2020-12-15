// 1.Mengubah fungsi menjadi fungsi arrow
console.log("================ 1. Mengubah fungsi menjadi fungsi arrow ================")

const golden = goldenFunction = () => {
    console.log("this is golden!")
}
golden()

// 2. Sederhanakan menjadi Object literal di ES6
console.log("\n================ 2. Sederhanakan menjadi Object literal di ES6 ================")

const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
newFunction("William", "Imoh").fullName() 

// 3. Destructuring
console.log("\n================ 3. Destructuring ================")

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
const {firstName, lastName, destination, occupation, spell} = newObject
console.log(firstName, lastName, destination, occupation)

// 4. Array Spreading
console.log("\n================ 4. Array Spreading ================")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

console.log(combined)

// 5. Template Literals
console.log("\n================ 5. Template Literals ================")

const planet = "earth"
const view = "glass"
var before = 'Lorem ' + view + 'dolor sit amet, ' +  
    'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +
    'incididunt ut labore et dolore magna aliqua. Ut enim' +
    ' ad minim veniam'
console.log(before + '\n')

var before = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam `

console.log(before)