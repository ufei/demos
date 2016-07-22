/**
 * Created by ufei on 2016/7/19.
 */

var Tim = React.createClass({displayName: "Tim",
    getInitialState:function(){
        return {time:0}
    },
    tim:function(){
        return this.setState({time:this.state.time+1})
    },
    componentDidMount:function(){
        this.interval=setInterval(this.tim,100);
    },
    componentDidUpdate:function(){
        if(this.state.time>30){
            console.log("ok");
            this.componentWillUnmount();
        }
    },
    componentWillUnmount:function() {
        clearInterval(this.interval);
    },
    render:function(){
        return React.createElement("div", null, React.createElement("h1", null, "Hello world"), React.createElement("p", null, this.state.time))
    }
});

ReactDOM.render(React.createElement(Tim, null),document.getElementById('example'));