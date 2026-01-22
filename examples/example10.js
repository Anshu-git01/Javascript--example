//function as a variable
// const add = function addNumbers(a,b){
//     return a+b;
    
// }
// const r=add(10,20);
// console.log(r);


const add=(a,b)=>a+b;  //if we have to write one statement, no need of curly braces
const add_2=(a,b)=>{  //if more than one statement, then use curly braces
    a=a+2;
    b=b+2;
    return a+b;
}
const square=a=>a*a; //if one parameter, no need of braces

const x=add_2(10,20);
const r=add(10,20);
console.log(square(10));
console.log(r);
console.log(x);