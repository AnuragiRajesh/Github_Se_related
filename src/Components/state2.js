import React from "react";
class abc extends React.Component{

    state={
        name: "rajesh",
        age:24
    }
    render(){
        return(
            <h1>Hello! {this.state.age}</h1>
        )
    }
}
export default abc; 

