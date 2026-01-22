const persons=[
    {
        name: "tommy",
        age: 2,
    },
    {
        name: "Pluto",
        age: 3,
    },
];
const names=persons.map((p,i)=>{
    return i+". "+p.name;

}).forEach(n=>console.log(n));
console.log(names);