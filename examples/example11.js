const person={
    name: "Tommy",
    age: 12,
};
console.log(person);
console.log(person.name);
console.log(JSON.stringify(person,null,2));
const jsonPerson=JSON.stringify(person,null,2);
console.log(JSON.parse(jsonPerson));