function square(num: number) {
  // num.toUpperCase() won't work because num must be a number
  return num * num;
}

function greet(person: string) {
  // person * person is not gonna work becuase TS knows person is a string
  return `Hi there, ${person}`;
}

// square("string") won't work because the argument must be a number
// greet(4) won't work because the argument must be string

const doSomething = (person: string, age: number, isFunny: boolean) => {
  //you can create multiple parameters with different types of argument at a spesific order
};

//--------------------------------------------------------------------------------------//

//adding default parameters
function hello(person: string = "default param") {
  //now this function can either get no parameters or a string
  // hello()
  // greet("tony")
}

//--------------------------------------------------------------------------------------//

//add return types to a function
function add(num: number): number {
  return num + num;
}

// if there are multiple types the function can return
function rando(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString(); //return a string
  }
  return num; //return a number
}

//--------------------------------------------------------------------------------------//

//anonymos functions
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  //TS will now that 'color' is a string by infering from the context
});

//--------------------------------------------------------------------------------------//

//Void type is for a function that is not returning any value
function printTwice(message: string): void {
  console.log(message);
  console.log(message);
}

//--------------------------------------------------------------------------------------//

//Never type - while Void returns undefined or null, Never means Never return anything.

//example 1: when a funcion throw error
function makeError(msg: string): never {
  throw new Error(msg);
}

//example 2: when there is a loop
function gameLoop(): never {
  while (true) {
    //do something
  }
}
