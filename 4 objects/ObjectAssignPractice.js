var person = {
    name: "Snarf",
    size: "Small",
    color: "redish"
}

var thundercat = {
    race: "thundercat",
    size: "medium",
    sound: "Thundercats Ho!"
}

var smurf = {
    race: "smurf",
    color: "blue"
}


// Make the person a thunder cat by assigning thundercat to person

let pt = Object.assign(person, thundercat)
pt;
person
// We've permanently modified person, but it's better to make a copy.  So copy person then thundercat into a new empty object

let pt2 = Object.assign({},person, thundercat)
pt2
person

// Make the a copy of a person that is a smurf

// Make a copy of a person that is a smurf then a thundercat

// Make a copy of a person that is a thundercat then a smurf