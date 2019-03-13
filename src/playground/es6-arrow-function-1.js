console.log("Arrow Function");

//
function square1(x)
{
    return x * x;
}
console.log(square1(3));

//
const square2 = function(x)
{
    return x *x ;
}
console.log(square2(4));

//Arrow Function type 1
const squareArrow = (x) => 
{
    return x * x;
}
console.log(squareArrow(5));

//Shorthhand Expression Arrow Function
const squareExpArrow = (x) => x * x;
console.log(squareExpArrow(6));

//Challenging task
const fullName = 'Vidya Bharathi';

const firstName = (name) => 
{
    return name.split(' ')[0];
}

console.log(firstName(fullName));

const getlastName = (name) => name.split(' ')[1];
console.log(getlastName(fullName));