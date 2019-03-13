console.log('Indecision App.js is running');

// if condition
//ternary operation
//logical and operator

// JSX - Javascript XML
// throws error if babel and its plugin is not installed
const app = {
    title: "Indecision App",
    subtitle: "Dream without fear",
    options: []
};

let count = 0; // count will get reassign

const calculateCount = (e) =>
{
    e.preventDefault(); // avoid to re-load/refresh the browser on form submit
    count++;
    console.log("enters function");
    console.log("Count" + count);
    //console.log(e.target.elements.option.value);
    app.options.push(e.target.elements.option.value);
    e.target.elements.option.value = '';
    reRender();
}

const resetCount = () => {
    console.log("reset function enters");
    count = 0;
    app.options =[];
    reRender();
}

const appRoot= document.getElementById('app');

// View
const reRender = () => {
const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are my options: " : "No options"}</p>
    <p>{app.options.length}</p>
    
    <ol>
    {app.options.map((option) => {
      return <li id={option}>{option}</li>;
    })
    }
    </ol>
    
    <p>Count: {count}</p>

    {/* Create a form, text box ad button with event handler 
      // class attribute changed to className
    */}
    <form onSubmit = {calculateCount}>
        <input type="text" name="option"/>
        <button id = "add" className="button">Add</button>
    </form>
    <button id = "clear" className="button" onClick= {resetCount} >Clear</button>    
 </div>   
    ); 
    ReactDOM.render(template,appRoot)
};

reRender();

// create Object
const user = {
    userName: 'Deepa Rajendran',
    userAge: 17,
    userLocation: 'IndiA'
};

function getLocation(location)
{
    if(location)
    {
        return <p>Location: {location}</p>;
    }
};


const templateTwo = (
   <div>
       <h1>{user.userName ? user.userName : 'Anonymous'}</h1> 
       {user.userAge >= 26 && <p>Age: {user.userAge}</p> }
       {getLocation(user.userLocation)}
       {<h1>My day !!!</h1>}
   </div>
);

//render the template into DOM using ReactDOM
//ReactDOM.render(template,appRoot);
//ReactDOM.render(templateTwo,appRoot);
