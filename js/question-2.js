const keyURL =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c0df2dfdfec944839c0adc50e065f7c6";

const container = document.querySelector(".container");

async function getRawg() {
  const response = await fetch(keyURL);
  const list = await response.json();
  const games = list.results;
  

  

    for (let i = 0; i < games.length; i++) {
      console.log(games[i].rating + " " + games[i].name);
      container.innerHTML += `${games[i].rating + " " + games[i].name}`
    }
      
  //  if (i === 8) {
  //    break;
  // }

  //
  // }
}

getRawg();

// API Key :  c0df2dfdfec944839c0adc50e065f7c6

//GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
//GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
