const names=['Tommy','John','Cena','Dummy'];
const petNames=['Pluto','Coffee','Magic'];
const combo=[...names, ...petNames]; //Spread operator
combo.forEach(n=>console.log(n));

const [first, second, ...rest]=combo;
console.log('------------------------------------------');
console.log(first);
console.log(second);
console.log(rest);

const person={
    name: "adam",
    age: 48,
    gender: "M",
};
const{name,age,gender}=person; //destructuring
console.log("-------------------------------------------");
console.log(name);
console.log(age);
console.log(gender);



