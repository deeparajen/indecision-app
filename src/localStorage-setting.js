// LocalStorage - Loading and Setting Option Data
class IndecisionApp extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handlePickup = this.handlePickup.bind(this);
        this.addOptionSubmit = this.addOptionSubmit.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        //state
        this.state = {
            options: []
        }
    }

    // LifeCycle of Component
    componentDidMount(){
        console.log("fetched");
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        this.setState(() => ({ options: options } ))
    }

    componentDidUpdate(prevProps,prevState) // two arguments 1. props 2. state
    {
        // local storage set the options
        if (prevState.options.length !== this.state.options.length)
        {
            console.log("updated");
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
        
    }

    componentWillMount()
    {

    }
    // end of lifecycle

    addOptionSubmit(option)
    {
        this.setState((prevState) => ({options: prevState.options.concat(option) }))
    }

    handleRemoveOption()
    {
    this.setState(() => ({options: []}))
    }
    
    handleDeleteOption(removeOption)
    {
     this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
            return removeOption !== option;
        })
     }))
    }

    handlePickup()
    {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectOption = this.state.options[randomNum];
        alert(selectOption);
       
    }

    render(){
        const title = 'Indecision App';
        const subtitle = 'Dream without fear';
        
        return(
            <div>
                
                <Header title={title} subtitle={subtitle}/>
                <Action handlePickup={this.handlePickup} hasOptions ={this.state.options.length > 0}/>
                <Options 
                options={this.state.options} 
                handleRemoveOption = {this.handleRemoveOption} 
                handleDeleteOption ={this.handleDeleteOption}/>
                <AddOption addOptionSubmit={this.addOptionSubmit}/>
            </div>
        );
    }
}

// Another way of creating React Component using Stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
        </div>
    ); 
}

//Stateless functional component
const Action = (props) => {
    return(
        <div>
            <button onClick={props.handlePickup} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
}

//Stateless functional component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveOption}>Remove All</button>
            {
                props.options.map((option) =>  (
                     <Option 
                         key={option} 
                         optionText={option} 
                         handleDeleteOption = {props.handleDeleteOption}
                         />
                     )
                )
            }
        </div>
    );
}

//Stateless functional component
const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
            onClick = {(e) => {
                props.handleDeleteOption(props.optionText)
             }}
            key={props.optionText}
            >
            Remove
            </button>
        </div>
     );
}

//class based component
class AddOption extends React.Component{
    constructor(props)
    {
        super(props);
        this.addOptionSubmit = this.addOptionSubmit.bind(this);
    }
    addOptionSubmit(e)
    {
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        if (value)
        {
            this.props.addOptionSubmit(value);
        }
        e.target.elements.option.value='';
    }

    render()
    {
        return(
            <div>
                <form onSubmit={this.addOptionSubmit}>
                    <input type="text" id="option"/>
                    <button id = "add"> Add </button>
                </form>
            </div>
        );
    }
}

/*
const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);
*/

//ReactDOM.render(jsx,document.getElementById('app'));

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));