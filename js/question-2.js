const keyURL =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c0df2dfdfec944839c0adc50e065f7c6";

const container = document.querySelector(".container");
const loader = document.querySelector(".loader")

async function getRawg() {
  const response = await fetch(keyURL);
  const list = await response.json();
  const games = list.results;
  
  loader.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    console.log(
      games[i].name + " " + games[i].rating + " " + games[i].tags.length
    );

    if (i === 7) {
      break;
    }

    container.innerHTML += `<div class="container"> ${
      games[i].name + " " + games[i].rating + " " + games[i].tags.length
    }</div>`;
  }
}

const error = document.querySelector(".error");

try {
  getRawg();
  console.log("Yeey");
} catch (error) {
  console.log("Oh no! An error occurred", error);
  result.innerHTML = "Oh no! An error occurred";
}

// API Key :  c0df2dfdfec944839c0adc50e065f7c6
