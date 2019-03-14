"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// LocalStorage - Loading and Setting Option Data
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);
        _this.handlePickup = _this.handlePickup.bind(_this);
        _this.addOptionSubmit = _this.addOptionSubmit.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

        //state
        _this.state = {
            options: []
        };
        return _this;
    }

    // LifeCycle of Component


    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("fetched");
            var json = localStorage.getItem('options');
            var options = JSON.parse(json);
            this.setState(function () {
                return { options: options };
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) // two arguments 1. props 2. state
        {
            // local storage set the options
            if (prevState.options.length !== this.state.options.length) {
                console.log("updated");
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {}
        // end of lifecycle

    }, {
        key: "addOptionSubmit",
        value: function addOptionSubmit(option) {
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: "handleRemoveOption",
        value: function handleRemoveOption() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(removeOption) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return removeOption !== option;
                    })
                };
            });
        }
    }, {
        key: "handlePickup",
        value: function handlePickup() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var selectOption = this.state.options[randomNum];
            alert(selectOption);
        }
    }, {
        key: "render",
        value: function render() {
            var title = 'Indecision App';
            var subtitle = 'Dream without fear';

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { handlePickup: this.handlePickup, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleRemoveOption: this.handleRemoveOption,
                    handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOption, { addOptionSubmit: this.addOptionSubmit })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// Another way of creating React Component using Stateless functional component


var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h4",
            null,
            props.subtitle
        )
    );
};

//Stateless functional component
var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handlePickup, disabled: !props.hasOptions },
            "What should I do?"
        )
    );
};

//Stateless functional component
var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleRemoveOption },
            "Remove All"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

//Stateless functional component
var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionText,
        React.createElement(
            "button",
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                },
                key: props.optionText
            },
            "Remove"
        )
    );
};

//class based component

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.addOptionSubmit = _this2.addOptionSubmit.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: "addOptionSubmit",
        value: function addOptionSubmit(e) {
            e.preventDefault();
            var value = e.target.elements.option.value.trim();
            if (value) {
                this.props.addOptionSubmit(value);
            }
            e.target.elements.option.value = '';
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.addOptionSubmit },
                    React.createElement("input", { type: "text", id: "option" }),
                    React.createElement(
                        "button",
                        { id: "add" },
                        " Add "
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
