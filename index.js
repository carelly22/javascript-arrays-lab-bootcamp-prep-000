//define an array kittens with the cats "Milo", "Otis", "Garfield"
var kittens = ["Milo", "Otis", "Garfield"];

//define a function which destructively appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

//define a function that destructively prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
