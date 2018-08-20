function dwarfRollCall(dwarves) {
  let numberedDwarves = []
  for (let i=0; i < dwarves.length; i++){
    numberedDwarves.push(`${i+1}. ${dwarves[i]} `)
  }
  return numberedDwarves.join(``)
}

function summonCaptainPlanet(planeteerCalls){
  let shoutPlaneteer = []
  for (let i=0; i<planeteerCalls.length; i++){
    shoutPlaneteer.push(`${planeteerCalls[i].toUpperCase}!`)
  }
  return shoutPlaneteer
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true
    } else return false
  }
}



function findTheCheese (foods) {
  function cheeseTest(food){
    return food === `cheddar` || food === `gouda` || food === `camembert`
  }
  if (foods.findIndex(cheeseTest) < 0 ){
    return `no cheese!`
  } if (foods.findIndex(cheeseTest) >= 0 )
  return `${foods[foods.findIndex(cheeseTest)]}`
}
