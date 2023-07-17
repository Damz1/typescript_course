//decalre variable with their type
var movieTitle = "Amadeus";
movieTitle = "arrival";
// movieTitle = 9; won't let you update a string variable to a number
var numCatLives = 9;
// numCatLives = "zero"; won't update number to string
var gameOver = false;
gameOver = true;
// gameOver = "true"; won't update boolean to string
//----------------------------------------------------------------------------------------------------//
//type inference (will automatically assign the type)
var tvShow = "olive Kitteridge";
tvShow = "the other two";
// tvShow = false; will not update string type to boolean
var isFunny = false;
isFunny = true;
// isFunny = "joke"; will not update boolean type to string
//----------------------------------------------------------------------------------------------------//
//type of "any"
var thing = "something";
thing = 9;
thing = false;
thing = "string agian";
//variable decrlaretion without assignment will be in type of "any"
var numbers = ["1", "2", "3", "4", "5"];
var foundNumber; // wil have the type of any
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number === "3") {
        foundNumber = "3";
    }
}
foundNumber; //will have type of any also after assining string to it
//way to avoid type of any - would be to declare it with the type:
//let foundNumber: string;
