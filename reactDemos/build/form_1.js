/**
 * Created by ufei on 2016/7/20.
 */

var ComentBox = React.createClass({displayName: "ComentBox",
    getInitialState:function(){
        return {
                text:"",
                items:[],
                counts:0
        }
    },
    handleClick:function(event){
        event.preventDefault();
        console.log("ok");
        var nextItem = this.state.items.concat([{text:this.state.text,id:Date.now().toString()}]);
        var nextText='';
        this.setState({items:nextItem,text:nextText,counts:this.state.counts+1});
    },
    handleChange:function(event){
        this.setState({text:event.target.value});
    },
    render:function(){
        return React.createElement("div", null, 
            React.createElement(ComentList, {items: this.state.items}), 
            React.createElement("form", {onSubmit: this.handleClick}, 
                React.createElement("textarea", {placeholder: "please enter", onChange: this.handleChange, value: this.state.text}), 
                React.createElement("button", null, "run ", this.state.counts)
            )
        )
    }
});

var ComentList = React.createClass({displayName: "ComentList",
    render:function(){
        var createMap=function(item){
          return React.createElement("li", {key: item.id, className: "ave"}, item.text)
        };
        return React.createElement("ul", null, this.props.items.map(createMap))
    }
});

ReactDOM.render(React.createElement(ComentBox, null),document.getElementById('coment'));