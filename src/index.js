// let uniqueRandomArray

// (async function(){
//   var lib = await import("unique-random-array")
//   uniqueRandomArray = lib.default()
//   console.log(uniqueRandomArray(['a', 'b']))
// })()

var uniqueRandomArray = require('unique-random-array')

var starWarsNames = require('./starwars-names.json')


module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
}
