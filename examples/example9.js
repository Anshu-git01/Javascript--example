// function addNumbers(a,b){
//     return Number(a)+Number(b);
// }
// addNumbers(10,20);
function addNumbers(a,b=null){
    a=a+2;
    b=b+2;
    return Number(a)+Number(b);
}
let a=10;
// let b=null;
console.log(addNumbers(a));
// console.log(a+" "+b);