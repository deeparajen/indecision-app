

//create a class
class Person{
    //define a constructor
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    
    getGreeting()
    {
        return `Hi. I am ${this.name}. `;
    }

    //define a function
    getDescription()
    {
        console.log("getdescription");
        return `${this.name} is ${this.age} years(s) old.`;
    }
}

//create a subclass name Traveller
class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation()
    {
        return !!this.homeLocation; // returns true if it has value
    }

    //override function
    getGreeting()
    {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation())
        {
            greeting += ` I'm from ${this.homeLocation}`;
        }
        return greeting;
    }
}

// create an instance
const p = new Person();
console.log(p.getDescription());
const p2 = new Person("Andrew",26);
console.log(p2.getDescription());

const t = new Traveller('Riya',23,'India');
console.log(t.hasHomeLocation());
console.log(t.getGreeting());

const t1= new Traveller();
console.log(t1.getGreeting());

const t2= new Traveller(undefined,undefined,'Nowhere');
console.log(t2.getGreeting());