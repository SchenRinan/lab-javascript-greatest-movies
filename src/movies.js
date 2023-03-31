// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(directorSearch => directorSearch.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter(spielberArray => spielberArray.director === 'Steven Spielberg' && spielberArray.genre.includes('Drama'));
    return spielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){return 0;}
    const averageScore = moviesArray.reduce(function (sum, current) {
        if(typeof current.score !== "number"){return sum + 0;};
        if(typeof current.score === "number"){return sum + current.score}} , 0);
    return Math.round((averageScore / moviesArray.length) * 100) / 100 ;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
        const dramaArray = moviesArray.filter(dramaArray =>  dramaArray.genre.includes('Drama'));
        if(dramaArray.length === 0){return 0;}
        const averageScore = dramaArray.reduce(function (sum, current) {return sum + current.score} , 0);
        return Math.round((averageScore / dramaArray.length) * 100) / 100 ;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyArray = [];
    for(i=0;i<moviesArray.length;i++){copyArray.push(moviesArray[i])};
    const ascendingAlphabetical = copyArray.sort((a, b) => (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0);
    const ascendingYear = ascendingAlphabetical.sort((a,b) => a.year - b.year);
        return ascendingYear;        
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copiedArray = [];
    for(i=0;i<moviesArray.length;i++){copiedArray.push(moviesArray[i])};
    const ascendingAlphabetical = copiedArray.sort((a, b) => a.title.localeCompare(b.title));
const arrayNameOnly = [];
for(i=0;i<moviesArray.length && i<20 ;i++){arrayNameOnly.push(ascendingAlphabetical[i].title)};
return arrayNameOnly;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const clonedArray = [];
    for(i=0;i<moviesArray.length;i++){clonedArray.push(moviesArray[i])};
    let removeSpace = [];
    let removeH = [];
  let removeMin = [];
    for(i=0;i<clonedArray.length;i++){
    if(clonedArray[i].duration.includes(" ")){
        removeSpace = clonedArray[i].duration.split(" ");
        removeH = removeSpace[0].replace("h","");
        removeMin = removeSpace[1].replace("min","");
        clonedArray[i].duration = +removeH*60 + +removeMin;
    }
    else if(clonedArray[i].duration.includes("h")){
        removeH = clonedArray[i].duration.replace("h","");
        clonedArray[i].duration = +removeH*60;
    }
    else if(clonedArray[i].duration.includes("min")){
        removeMin = clonedArray[i].duration.replace("min","");
        clonedArray[i].duration = +removeMin;
    }
    }
    return clonedArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
