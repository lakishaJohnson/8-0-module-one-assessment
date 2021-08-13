/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let allMovies = [];

  //MOVIE REPRESENTS EACH MOVIE INSIDE ARRAY OF MOVIES
  for (const movie of movies) {
    //PUSHED THE TITLE OF ALL MOVIES INTO NEW ARRAY
    allMovies.push(movie.title);
  }
  return allMovies;
}

//console.log(getAllMovieTitles(exampleMovies))

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  //IF ARRAY IS EMPTY
  if (movies.length === 0) {
    return 0;
  }
  //CREATED VARIABLE FOR MOVIE AND EVERY INDEX/FOR EVERY ITERATION THRU ARRAY
  let currentScore = movies[0];

  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];

    //IF THE MOVIE METASCORE IS GREATER THAN MY CURRENT MOVIE METASCORE
    if (movie.metascore > currentScore.metascore) {
      //MY CURRENT MOVIE IS NOW HIGHEST AND REPLACES PREVIOUS INDEX
      currentScore = movie;
    }
  }
  //TO CHANGE A STRING INTO A NUMBER, MULTIPLY BY ONE
  return currentScore.metascore * 1;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let averageRate = 0;

  for (const movie of movies) {
    //0 = 0 + MOVIE.imdbRATING TIMES 1 TO CHANGE STRING INTO NUMBER
    averageRate += movie.imdbRating * 1;
  }
  //TO GET AVERAGE DIVIDE AVERAGE RATE BY THE AMOUNT OF MOVIES IN ARRAY
  return averageRate / movies.length;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  //RETURN {PG:7}
  //SET DEFAULT VARIABLE
  let ratedMovie = {};

  //LOOP THRU MOVIES ARRAY
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];

    //IF THE MOVIE.RATED IS EQUAL TO ANOTHER MOVIE.RATED, 1 IS ADDED TO THAT RATING
    if ((ratedMovie[movie.rated] = ratedMovie[movie.rated])) {
      ratedMovie[movie.rated] = ratedMovie[movie.rated] + 1;
    } else {
      //IF MOVIE.RATED IS UNDEFINED/EMPTY, ASSIGN 1 AS ITS VALUE
      ratedMovie[movie.rated] === undefined;
      ratedMovie[movie.rated] = 1;
    }
  }
  //RETURN DEFAULT VARIABLE
  return ratedMovie;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  for (i = 0; i < movies.length; i++) {
    let movie = movies[i];

    //IF MOVIE AT THE imdbID MATCHES THE GIVEN ID
    if (movie.imdbID === id) {
      //RETURN THE NAME OF THAT MOVIE
      return movie;
    }
  } //If ID is empty or the ID does not match any movie, return NULL.
  return null;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let genreFilter = [];

  for (let movie of movies) {
    //IF THE MOVE.GENRE INCLUDES GIVEN GENRE
    //CASE-INSENSITIVE: NEEDED .toLowerCase
    if (movie.genre.toLowerCase().includes(genre.toLowerCase())) {
      //PUSHED THAT MOVIE INTO NEW ARRAY
      genreFilter.push(movie);
    }
  }
  return genreFilter;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let releasedMovie = [];

  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    //MULTIPLY STRING BY ONE TO CHANGE IT INTO A NUMBER
    //THEN USE .SPLIT TO SPLIT DATE TO JUST THE YEAR
    //IF MOVIE YEAR OF RELEASE IS LESS THAN OR EQUAL GIVEN YEAR
    if (1 * movie.released.split(" ")[2] <= year) {
      releasedMovie.push(movie);
    }
  }
  return releasedMovie;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
 if (movies.length === 0){
  return null;
}

let biggestMovie = 0

for (let movie of movies){
  
  let moneyMade = 1 * (movie.boxOffice.slice(1).split(',').join(''))
  //MULTIPLY STRING BY ONE TO CHANGE IT INTO A NUMBER
  //.SLICE USED TO REMOVE $ SIGN
  //.SPLIT USED TO REMOVE COMMA'S
  //.JOIN USED TO REMOVE SPACES LEFT BY COMMA'S
  if (moneyMade > biggestMovie){
    biggestMovie = moneyMade
    
    smashHit = movie.title
  }
}
return smashHit 
}


// function getBiggestBoxOfficeMovie(movies) {
//   if (movies.length === 0) {
//     return null;
//   }
//   let biggestMovie = 1 * movies[0];
//   let smashHit = " "

//   for (let i = 0; i < movies.length; i++) {
//     let movie = movies[i];

//     if (movie.boxOffice * 1 > biggestMovie.boxOffice) {
//       biggestMovie = movie;
//     }
//     return smashHit;
//   }
// }

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
