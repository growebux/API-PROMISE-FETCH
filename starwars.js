const API_URL = "https://starwars.egghead.training/";
//information to display before the data arrives.
output.innerText = "Loading...";

//get content from the API_URL + the section films"
fetch(API_URL + "films")
//if the reponse is negative, throw a Error to display on the console.
  .then((response) => {
    if (!response.ok) {
      throw Error("Unsuccessful reponse");
    }

    // return the response.jason with the section films and show the content of getFilmTitles(films) with innerText.
    return response.json().then((films) => {
      output.innerText = getFilmTitles(films);
    });
  })

  // identify the error from the console 
  .catch((error) => {
    console.warn(error);
    output.innerText = ": (";
  });

  //return the film .sort by order, map with ep and title, and join everthing together with .join.
function getFilmTitles(films) {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `${film.episode_id}. ${film.title}`)
    .join("\n");
}
