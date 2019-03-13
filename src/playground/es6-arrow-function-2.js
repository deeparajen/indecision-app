const add = (a,b) => {
    // Arrow function doesn't support arguments object.  but regular function can.
    //console.log(arguments); 
    return a + b;
}

// Arugments mismatch doesn't throws an error, skip the leftover unmatched arguments.
console.log(add(2,8,9)); 

// Arrow function doesn't support this keyword

// create an object
const user = {
    firstName: 'Anu',
    lastName: 'priya',
    cities: ['Frankfurt','Munich','Bohn'],

    // define function
    getUserCities() {
        console.log(this.firstName);
        console.log(this.lastName);

        //iterate the array using forEach regular function
        //Uncaught TypeError: Cannot read property 'FirstName' of undefined
      /*  this.cities.forEach(function(city) {
            console.log(this.FirstName + 'has lived in '+ city);
        }); */

        //iterate the array using forEach arrow function
        this.cities.forEach((city) => {
            console.log(this.firstName + ' has lived in '+ city);
        });

        //iterate through map function
        const citiesMsg = this.cities.map((city) => {
                return city + '!';
        });
        console.log(citiesMsg);
    }
};

user.getUserCities();

//Challenging task

const multiplier = {
    numbers: [1,2,3],
    multipyBy: 2,
    
    // function
    multiply()
    {
        //iterate through map function
        return this.numbers.map((number) => number * this.multipyBy);
    }

}

console.log(multiplier.multiply());