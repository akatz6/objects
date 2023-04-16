//This is how you create an object with values
const instructor = {
  first_name: "Aaron",
  last_name: "Katz",
  career: "Senior Software Developer",
  company: "Capital One",
  city: "Seattle",
  pet: "dog",
  motto() {
    return "That is a you problem, not a me problem";
  },
};

//If you want to make a deep copy don't forget to use ...
const instr = { ...instructor };
console.log(instr.first_name);

//When using a method don't forget to add the () to activate the method
//If you forget it will just print the method
const mottoStr = instr.motto();
console.log(mottoStr);

//This is how you loop over a method
for (const element in instructor) {
  console.log(element);
  console.log(typeof instructor[element]);
  if (typeof instructor[element] === "function") {
    //To get a function to run
    console.log(instructor[element]());
  } else {
    //You can use dot notation or bracket for non functions
    console.log(instructor.element);
  }
}

instr.office = "At home";
console.log(instr.office);
console.log(instructor.office);

//Over here we create a shallow copy so you can see when you make a change
//to one you make a change to both
const instTwo = instructor;
instTwo.office = "Cubicle";
console.log(instructor.office);

//If you need the all the keys or all the objects
console.log(Object.keys(instr));
console.log(Object.values(instr));

//This is an example of a question you will get during a technical interview
//We want to count the cars by brand
const countCars = (cars) => {
  const carsObj = {};
  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    // If the car is found in out object
    if (car in carsObj) {
      // We just increment the value by one
      carsObj[car] = carsObj[car] + 1;
    } else {
      // Else we create a new key and give in a value of 1
      carsObj[car] = 1;
    }
  }
  // Here we are returning the count of cars by brand
  return carsObj;
};

const cars = ["Toyota", "Honda", "Mercedes", "Toyota", "Ford", "BMW", "Ford"];
// Create a method that returns how many cars of each type there are
console.log(countCars(cars));
