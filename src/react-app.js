//Nesting Component
class IndecisionApp extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handlePickup = this.handlePickup.bind(this);
        this.addOptionSubmit = this.addOptionSubmit.bind(this);
        //state
        this.state = {
            options: []
        }
    }

    addOptionSubmit(option)
    {
        this.setState((prevState) => {
            return{
               options: prevState.options.concat(option)
            };
        });
    }

    handleRemoveOption()
    {
       this.setState( () => {
           return {
             options: []
           };
        });
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
                <Options options={this.state.options} handleRemoveOption = {this.handleRemoveOption}/>
                <AddOption addOptionSubmit={this.addOptionSubmit}/>
            </div>
        );
    }
}

//Building a React Component
class Header extends React.Component
{
    render()
    {
        //inject jsx template
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h4>{this.props.subtitle}</h4>
            </div>
        ); 
    }
}

class Action extends React.Component{

    render(){
        return(
            <div>
                <button onClick={this.props.handlePickup} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{

    render(){
        return (
            <div>
                <button onClick={this.props.handleRemoveOption}>Remove All</button>
                {
                    this.props.options.map((option) =>  <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
           <div>
               {this.props.optionText}
           </div>
        );
    }
}

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