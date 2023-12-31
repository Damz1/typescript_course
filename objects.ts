function printName(person: { first: string; last: string }): void {
  // must have an object with the keys first and last and both are strings
}

// printName({first: "Michael", last:"Jackson", isAlive: false})
//it won't let me add extra properties unless inside a variable:
const singer = { first: "Michael", last: "Jackson", isAlive: false };
printName(singer); // this is working despite the extra isAlive property;

//assign multiple types to the keys of an object variable
let coordinate: { x: number; y: number } = { x: 34, y: 32 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: { x: number; y: number }): {
  x: number;
  y: number;
} {
  //this is a function that will accept an object with x and y as numbers and return an object with the same pattern
  //the patternt can be exctracted with a type keyword
  return { x: 134, y: 43 };
}

// use type
type Point = {
  x: number;
  y: number;
};

function doublePoint2(point: Point): Point {
  //this is a function that will accept an object with x and y as numbers and return an object with the same pattern
  //the patternt can be exctracted with a type keyword
  return { x: 134, y: 43 };
}

//nested objects

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.003;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "melody",
  artist: "brothers",
  numStreams: 123000,
  credits: {
    producer: "phill spector",
    writer: "alex north",
  },
};

calculatePayout(mySong);

//optional properties
type Point2 = {
  x: number;
  y: number;
  z?: number; // add ? to make a property optional
};
const myPoint: Point = { x: 1, y: 3 };

//read only

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 128323,
  username: "abc",
};
// user.id = 34 ; won't update becuase it is read only

//---------------------------------------------------------------------------//

// intersection Types
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat & Dog & { age: number }; //will create a combination of cat, dog and a new property of age
