const persons=[
    [
        {
            name:"tommy",
            age:2,
        },
        {
            name:"Pluto",
            age:3,
        }
    ],
    [
        {
            name:"tommy",
            age:2,
        },
        {
            name:"Pluto",
            age:3,
        }
    ],
];
const names=persons.flatMap((p,i)=>{
    return p.map(n=>n.name);

}).forEach(x=>console.log(x));


const names_2=persons.map((p,i)=>{
    return p.map(n=>n.name);

}).forEach(x=>console.log(x));
// console.log(names);
  

        
    
