function dwarfRollCall(dwarves) {
  let numberedDwarves = []
  for (let i=0; i < dwarves.length; i++){
    numberedDwarves.push(`${i+1}. ${dwarves[i]} `) //
  }
  return numberedDwarves.join(``)
}

function summonCaptainPlanet(planeteerCalls){
  let shoutPlaneteer = []
  for (let i=0; i<planeteerCalls.length; i++){
    shoutPlaneteer.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return shoutPlaneteer
}

function longPlaneteerCalls(words) {
  let longCounter = 0                       // Counter to keep register long words
  for (let i = 0; i < words.length; i++){   // Loop through the elements, check if a word is longer than 4 char, add 1 to the counter
   if (words[i].length > 4){
    longCounter++
    }
  }
    if (longCounter > 0){                   // End of loop, check if counter has registered any long words
    return true
    } else return false
}



function findTheCheese (foods) {
  function cheeseTest(x){                                                       // Testing (callback) function to be used by the findIndex method
    return x === `cheddar` || x === `gouda` || x === `camembert`
  let cheeseIndex = foods.findIndex(cheeseTest)
  }
    if (cheeseIndex < 0 ) {
    return `no cheese!`
  } if (cheeseIndex >= 0 )
  return `${foods[cheeseIndex]}` // foods[foods.findIndex(cheeseTest)]
}
