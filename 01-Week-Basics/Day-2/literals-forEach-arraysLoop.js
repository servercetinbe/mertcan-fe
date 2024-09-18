//Template literals
// const fullName = 'Mertcan';
// const city ="Sakarya"
// const yearOfBirth = 2002

// let val = "My name is "+fullName+" "+"My city is "+city+" "+"My year of birth is "+yearOfBirth;
//  val = `My name is ${fullName} My city is ${city} My year of birth is ${yearOfBirth} My age is ${2024-yearOfBirth}`;

// console.log(val)

//To assign different values to the same variable repeatedly
//object literals
// let Mustafa = ["Mustafa",25]


// let val ;
// let person = {
//     name: "Mertcan",
//     lastName: "Engin",
//     age: 22,
//     skills: ["Java","JS","Python"],
//     addres : {
//         city: "Sakarya",
//         country: "Turkey"
//     },
//     getBirthYear: function() {
//         return 2024-this.age    
//     }
//     }

// val = person
// val = person.name
// val = person.lastName
// val = person.skills
// val = person.skills[2]
// val= person.addres.city
// val = person.getBirthYear()
// console.log(val)
// console.log(typeof person)




//Looping through Array Objects
// let cars = ["BMW","Mercedes","Toyota"]
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
    
// }
// for (let i in cars) {
//     console.log(i,cars[i])
    
// }

// //forEach Loop
// cars.forEach(function(item){
//     console.log(item)
// })

let persons = [   
    {name: "Mertcan", age: 25},
    {name: "Gamze", age: 22},
    {name: "Ali", age: 30}
]
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].name)
    
}
console.log(typeof persons)


persons.forEach(function(item){
    console.log(item.name)
})
