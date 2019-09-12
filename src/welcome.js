import React, { Component } from "react";

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
// class Welcome extends Component{
//     render(){
//         return(
//             <div>
//             <h1>Welcome { this.props.name } { this.props.marks}</h1>
//         </div>
//         )
//     }
// }

// export default Welcome;

// class component with this
// class India extends Component{
//   gitName(){
//     return "Class component with this"
//   }
//   render(){
//     return(
//       <div>
//          <h1>Helllloooo</h1>
//          { this.gitName() }
//       </div>
//     )
//   }
// }
// export default India;

// class component with state count example
// class India extends Component{
//     constructor(){
//         super();
//        this.state = {
//           count:0
//        } 

//        this.incrementconurt = this.incrementconurt.bind(this);
//     }

//     incrementconurt(){
//         let count = this.state.count;
//             this.setState(
//                 {
//                     count: count + 1
//                 }
//             )
//     }

//   render() {
//     return(
//     <div>harsha new 
//     { this.state.count }
//     <button onClick = { this.incrementconurt }>Add counter</button>
//     </div>
//     ) 
//   }
// }

// export default India;


class Example extends Component{
    constructor(){
        super();
        this.state = {
            btntext:"Subcribe here"
        }
    }

    changebtntext(){
        this.setState({
            btntext:"thnakyou"
        })
    }

    
    render(){
        return(
            <div>
                <h1>{ this.state.btntext }</h1>
                <button onClick={() => this.changebtntext() }>CLick here</button>
                </div>        
        )
    }
}

export default Example;

