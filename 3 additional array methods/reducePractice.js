var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum
let sum = roundScores.reduce(function(total, elemet){
  return total + elemet
})
sum 

//Use the sum to get an average
let average = sum/roundScores.length
average
//Handicap is 4
//Use a map to reduce all scores by 4
//Use a reduce to get a sum
//Use the sum to get an average

var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]

//Use reduce to go through the lyricWords and concatenate them together

let words = lyricWords.reduce(function(total, element) {
  return total + element
})

words