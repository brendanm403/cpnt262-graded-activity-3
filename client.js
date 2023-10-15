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
let targetElement;
let render;

//******** array methods ********//

// select element to render in //
targetElement = document.getElementById("array-push");
// modify with push //
render = characters.push(saruman);
// render the methods return value //
targetElement.innerHTML = render;

// select element to render in //
targetElement = document.getElementById("array-unshift");
// modify with unshift //
render = characters.unshift(smeagol);
// render the methods return value //
targetElement.innerHTML = render;


// select element to render in //
targetElement = document.getElementById("array-pop");
// modify with pop //
render = characters.pop();
// render the methods return value.name//
targetElement.innerHTML = render.name;

// select element to render in //
targetElement = document.getElementById("array-shift");
// modify with shift //
render = characters.shift();
// render the methods return value.name//
targetElement.innerHTML = render.name;

// select element to render in //
targetElement = document.getElementById("array-concat");
// modify with concat //
render = characters.concat(objectsArray);
// render the methods return value //
targetElement.innerHTML = render;

// select element to render in //
targetElement = document.getElementById("array-slice");
// modify with slice //
render = characters.slice(3);
// render the methods return value //
targetElement.innerHTML = render;


// select element to render in //
targetElement = document.getElementById("array-splice");
// modify with splice //
render = characters.splice(2, 1);
// render the methods return value //
targetElement.innerHTML = render;

// select element to render in //
targetElement = document.getElementById("array-filter");
// search with filter, filtering by data type//
render = characters.filter( (type) => typeof type === "string");
// render the methods return value //
targetElement.innerHTML = render;

// select element to render in //
targetElement = document.getElementById("array-find");
// search with find, search for first string with length > 5 //
render = characters.find( (item) => item.length > 5 );
// render the methods return value //
targetElement.innerHTML = render;

// select element to render in //
targetElement = document.getElementById("array-includes");
// search with includes //
render = characters.includes("orc");
// render the methods return value //
targetElement.innerHTML = render;

// select element to render in //
targetElement = document.getElementById("array-every");
// search with every //
render = characters.every( (item) => item.length >= 3 );
// render the methods return value //
targetElement.innerHTML = render;

// select element to render in //
targetElement = document.getElementById("array-some");
// search with some //
render = characters.some( (item) => typeof item === "object");
// render the methods return value //
targetElement.innerHTML = render;

//******** Object Methods ********//

// select element to render in //
targetElement = document.getElementById("object-values");
// get object values //
render = Object.values(boromir);
// render the methods return value //
targetElement.innerHTML = render;

// select element to render in //
targetElement = document.getElementById("object-keys");
// get object keys //
render = Object.keys(boromir);
// render the methods return value //
targetElement.innerHTML = render;

// select element to render in //
targetElement = document.getElementById("object-entries");
// get keys and values //
render = Object.entries(gandalf);
// render the methods return value //
targetElement.innerHTML = render;

// select element to render in //
targetElement = document.getElementById("object-freeze");
// freezes object so cant add new properties or delete existing ones. Existing properties cannot be changed //
render = Object.freeze(smeagol);
// render the methods return value.name //
targetElement.innerHTML = render.name;

// select element to render in //
targetElement = document.getElementById("object-seal");
// freezes object cant add new properties or delete existing ones, can only change existing values if writeable //
render = Object.seal(saruman);
render.name = "Saruman the white";
// render the methods return value.name //
targetElement.innerHTML = render.name;

// select element to render in //
targetElement = document.getElementById("object-new");
// create a new date object //
render = new Date();
// render the current date //
targetElement.innerHTML = `${render.getMonth()} ${render.getDate()} ${render.getFullYear()}`;

// select element to render in //
targetElement = document.getElementById("object-delete");
// delete a property //
delete gandalf.age;
// try to render the deleted properties value //
targetElement.innerHTML = gandalf.age;