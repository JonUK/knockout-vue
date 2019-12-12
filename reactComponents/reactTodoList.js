// Mixin is defined first and then the component defined after
var KnockoutMixin = {

    updateKnockout() {
        this.__koTrigger(!this.__koTrigger());
    },

    componentDidMount() {
        console.log('React component mounted');

        this.__koTrigger = ko.observable(true);
        this.__koModel = ko.computed(function () {
            this.__koTrigger(); // subscribe to changes of this...

            return {
                props: this.props,
                state: this.state
            };
        }, this);

        ko.applyBindings(this.__koModel, this.getDOMNode());
    },

    componentWillUnmount() {
        ko.cleanNode(this.getDOMNode());
    },

    componentDidUpdate() {
        this.updateKnockout();
    }
};



// Component definition
window.reactTodoListComponent = React.createClass({
    mixins: [ KnockoutMixin ],

    propTypes: {
        todos: React.PropTypes.array.isRequired,
        handleUpdate: React.PropTypes.func.isRequired
    },

    componentDidMount: function () {
        setInterval(() => {
            // debugger;

            const localTodos = [...this.props.todos];
            localTodos.shift();
            localTodos.push("Added in React context - " + Math.random());

            if (this.props.handleUpdate) {
                this.props.handleUpdate(localTodos);
            }

        }, 2000);
    },


    render() {
        // return (
        //     <ul data-bind="foreach: props.todos">
        //         <li data-bind="text: $data"></li>
        //     </ul>
        // );

        // Converted at: https://babeljs.io/repl/#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlLYmkMA8I6iAJgIZQcC0ARjDBsAvACJgcChwjIAXIgAOZOAoDOAOihw2cVaIB89BscSN0Mdl14ChYqKgAeUeQBJO3A4wD05wydNeLH6IuADcRAC-REA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.7.5&externalPlugins=

        return React.createElement("div", null, React.createElement("h2", null, "Rendered as React component"), React.createElement("ul", {
            "data-bind": "foreach: props.todos"
        }, React.createElement("li", {
            "data-bind": "text: $data"
        })));
    }
});
