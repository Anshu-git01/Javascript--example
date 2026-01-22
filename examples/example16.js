const person={
    name:'John',
    age:34,
    gender:'M',
};
console.log(person);
let name={...person}; //spread operator for copying
console.log(name);

let cp={...person, age:23}; //used highly in React
// cp.age=23;
console.log(person);
console.log(cp);