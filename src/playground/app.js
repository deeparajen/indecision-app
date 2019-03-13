// redefine and reassign is possible
var nameVar = 'Andrew';
var nameVar = 'Julie';

console.log('namevar',nameVar);

//let doesn't allow to redefine but reassign is possible
let nameLet = 'John';
nameLet = 'Smitha';
console.log('nameLet',nameLet);

// const doesn't allow both redefine and reassign
const nameConst = 'Chitra';
console.log('nameConst',nameConst);

// function scoping
function getName()
{
    const fName = 'John Peter';
    return fName;
}
const petName = getName();
console.log('name',petName);

// block scoping
var fullName = 'Prajna Ravikumar';
let firstName;

if(fullName)
{
    firstName = fullName.split(' ')[0];
}
console.log('firstname',firstName);
