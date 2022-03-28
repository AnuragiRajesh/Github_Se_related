import React from "react";
class Mystate extends React.Component{
    constructor(){

        super();
        this.state={
            name:"Vikas",
            email: "vikash@test.com",
            count: 0
        }
    }
    updateState(){
        this.setState({
            name: "Saikiran",
            count:this.state.count+100**400
            

        })
    }
    render(){
        return(
            <div>
                <h1>Name {this.state.name}</h1>
                <h2> Email: {this.state.email} </h2>
                <h3>count {this.state.count}</h3>
                <button onClick={()=>{this.updateState()}}>Uptade States</button></div>
        )
    }
}
export default Mystate;