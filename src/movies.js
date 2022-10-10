// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsOnly = moviesArray.map((movie) => {
        return movie.director
    });

    let directorsOnlyDeduped = directorsOnly.filter((director, index) => {
        return directorsOnly.indexOf(director) === index;
    });

    return directorsOnlyDeduped;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenSpielberg = moviesArray.filter((movie) => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return movie
        }
    });

    return stevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let summedScore = moviesArray.reduce((sumOfMovie, movie) => {
        if ("score" in movie) {
            return sumOfMovie + movie.score;
        }
        else {
            return sumOfMovie;
        }
    }, 0);

    if (moviesArray.length === 0) {
        return 0;
    }

    else {
        return +(summedScore / moviesArray.length).toFixed(2);
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaOnly = moviesArray.filter((movie) => {
        if (movie.genre.includes("Drama")) {
            return movie;
        }
    });

    let averageDramaScore = scoresAverage(dramaOnly);

    return parseFloat(averageDramaScore);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = [...moviesArray];

    moviesArrayCopy.sort((movie1, movie2) => {
        if (movie1.year > movie2.year) {
            return 1;
        }
        else if (movie2.year > movie1.year) {
            return -1;
        }

        else if (movie1.year === movie2.year && movie1.title > movie2.title) {
            return 1;
        }

        else if (movie1.year === movie2.year && movie2.title > movie1.title) {
            return -1;
        }

    });
    return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = [...moviesArray];

    const movieStringsOnly = moviesArrayCopy.map((movie) => {
        return movie.title;
    });

    movieStringsOnly.sort();

    if (movieStringsOnly.length < 20) {
        return movieStringsOnly
    }
    else if (movieStringsOnly.length > 20) {
        return movieStringsOnly.slice(0, 20)
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
