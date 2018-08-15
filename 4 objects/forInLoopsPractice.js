var drink = {
    color: 'orange',
    taste: 'orange',
    carbonated: true,
    brand: 'sunkisser'
}

//Loop over drink
//if the value is 'orange' change it to 'cherry'

for (var key in drink) {
    key 
    if (key === "taste") {
    }
    let value = drink[key]
    value
}
let myVar = "color"
let value = drink[myVar]
value



//Write a function, called 'checkValid', that takes in an object like drink 
//loop over the object and check if values are falsy
//return false if any values are falsy
//return true if all values are truthy