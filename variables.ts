//decalre variable with their type
let movieTitle: string = "Amadeus";
movieTitle = "arrival";
// movieTitle = 9; won't let you update a string variable to a number

let numCatLives: number = 9;
// numCatLives = "zero"; won't update number to string

let gameOver: boolean = false;
gameOver = true;
// gameOver = "true"; won't update boolean to string

//----------------------------------------------------------------------------------------------------//

//type inference (will automatically assign the type)
let tvShow = "olive Kitteridge";
tvShow = "the other two";
// tvShow = false; will not update string type to boolean

let isFunny = false;
isFunny = true;
// isFunny = "joke"; will not update boolean type to string

//----------------------------------------------------------------------------------------------------//

//type of "any"
let thing: any = "something";
thing = 9;
thing = false;
thing = "string agian";

//variable decrlaretion without assignment will be in type of "any"
const numbers = ["1", "2", "3", "4", "5"];
let foundNumber; // wil have the type of any

for (let number of numbers) {
  if (number === "3") {
    foundNumber = "3";
  }
}
foundNumber; //will have type of any also after assining string to it

//way to avoid type of any - would be to declare it with the type:
//let foundNumber: string;
