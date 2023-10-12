// create array //
const characters = ["Legolas", "Aragorn", "Gimli", "Frodo", "Merry", "Sam", "Pippin"];

// create objects //
const smeagol = {
  name: "Smeagol",
  charType: "antagonist",
  age: 589,
  survived: false
}

const gandalf = {
  name: "Gandalf",
  charType: "protagonist",
  age: 2019,
  survived: true  
}

const saruman = {
  name: "Saruman",
  charType: "antagonist",
  age: 2019,
  survived: false  
}

const boromir = {
  name: "Boromir",
  charType: "protagonist",
  age: 40,
  survived: false 
}

// create array of these objects //
const objectsArray = [];
objectsArray.push(smeagol, gandalf, saruman, boromir);

// declare variables //
let target;
let render;

//******** array methods ********//

// select element to render in //
target = document.getElementById("array-push");
// modify with push //
render = characters.push(saruman);
// render the methods return value //
target.innerHTML = render;

// select element to render in //
target = document.getElementById("array-unshift");
// modify with unshift //
render = characters.unshift(smeagol);
// render the methods return value //
target.innerHTML = render;


// select element to render in //
target = document.getElementById("array-pop");
// modify with pop //
render = characters.pop();
// render the methods return value.name//
target.innerHTML = render.name;

// select element to render in //
target = document.getElementById("array-shift");
// modify with shift //
render = characters.shift();
// render the methods return value.name//
target.innerHTML = render.name;

// select element to render in //
target = document.getElementById("array-concat");
// modify with concat //
render = characters.concat(objectsArray);
// render the methods return value.length to show new array length//
target.innerHTML = render.length;

// select element to render in //
target = document.getElementById("array-slice");
// modify with slice //
render = characters.slice(3);
// render the methods return value //
target.innerHTML = render;


// select element to render in //
target = document.getElementById("array-splice");
// modify with splice //
render = characters.splice(2, 1);
// render the methods return value //
target.innerHTML = render;

// select element to render in //
target = document.getElementById("array-filter");
// search with filter, filtering by data type//
render = characters.filter( (type) => typeof type === "string");
// render the methods return value //
target.innerHTML = render;

// select element to render in //
target = document.getElementById("array-find");
// search with find, search for first string with length > 5 //
render = characters.find( (item) => item.length > 5 );
// render the methods return value //
target.innerHTML = render;

// select element to render in //
target = document.getElementById("array-includes");
// search with includes //
render = characters.includes("orc");
// render the methods return value //
target.innerHTML = render;

// select element to render in //
target = document.getElementById("array-every");
// search with every //
render = characters.every( (item) => item.length > 3 );
// render the methods return value //
target.innerHTML = render;

// select element to render in //
target = document.getElementById("array-some");
// search with some //
render = characters.some( (item) => typeof item === "object");
// render the methods return value //
target.innerHTML = render;

//******** Object Methods ********//







