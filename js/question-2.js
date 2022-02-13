const keyURL =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c0df2dfdfec944839c0adc50e065f7c6";

const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

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

    container.innerHTML += `<div class="container"><ul><li> ${games[i].name}</li><li>Rating: ${games[i].rating}</li><li>Number of tags: ${games[i].tags.length}</li>
    </ul></div>`;
  }
}

const errorMsg = document.querySelector(".error");

try {
  getRawg();
  console.log("Yeey");
} catch (error) {
  console.log("Oh no! An error occurred", error);
  errorMsg.innerHTML = "Oh no! An error occurred";
}



// API Key :  c0df2dfdfec944839c0adc50e065f7c6
