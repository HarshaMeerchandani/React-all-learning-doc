import React , { Component } from "react";

// class component
// class Welcome extends Component{
// render(){
//     return(
//     <div>
//         harsha Meerchandani
//     </div>)
// }
// }

// props with class component
class Welcome extends Component{
    render(){
        return(
            <div>
            <h1>Welcome { this.props.name } { this.props.marks}</h1>
        </div>
        ) 
    }
}

export default Welcome;