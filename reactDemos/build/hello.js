/**
 * Created by ufei on 2016/7/23.
 */

var Hello = React.createClass({displayName: "Hello",
    getInitialState:function(){
        return {
            name:""
        };
    },
    handleChange:function(event){
        this.setState({name:event.target.value});
        console.log(this.state.name);
    },
    render: function(){
        return React.createElement("div", null, 
        React.createElement("a", null, " hello ", this.state.name ? this.state.name : "world"), 
            React.createElement("input", {type: "text", onChange: this.handleChange})
        )
    }
});
ReactDOM.render(React.createElement(Hello, null),document.getElementById('hello'));
