import React from "react";

export default class Event extends React.Component{
//*****************one way*********** */
    constructor(props) {
        super(props) 
        this.state = ({
            value: 'My event name'
        })
    }
    click(){
        this.setState({
            value: 'Rajesh Anuragi'
        })
    }
    render(){
        return(
            <div>
                <input placeholder="Enter Something" />
                <button onClick={()=>this.click()} >click me!</button>
                <p>Input should come here</p>
            </div>
        )
    }

    //***********second way********** */
    // click(){
    //     alert("Event successful")
    // }
    // render(){
    //     return(
    //         <div>
    //             <h1>My Event</h1>
    //             <button onClick={this.click.bind(this)} >click me!</button>
    //         </div>
    //     )
    // }

    //*********With function components** */

    
}


//****** with function */


// export default function EventWithFunctin(){
//     function Myfunction(){
//         alert("yes had some clearty with function events")
//         console.log(" yes done")
//     }

//     return(
//         <div>
//             <h1>My Event With Function Components</h1>
//             <button onClick={Myfunction} >Click Me!</button>
//         </div>
//     )
// }