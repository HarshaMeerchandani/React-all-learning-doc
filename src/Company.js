import React, { Component } from 'react'
import  Childcomponent from "./Childcomponent" 


export default class Company extends Component {
   constructor(){
       super();
       this.state ={
    emp1_name : "Mohan",
    emp1_age : "21",
    emp1_sal : "400",
    // emp2_name : "Sohan",
    // emp2_age : "22",
    // emp2_sal : "300",
    // emp3_name : "Rohan",
    // emp3_age : "23",
    // emp3_sal : "200"
       }
   }
    render() {
        return (
            <div>
                {/* dynamic content */}
             <Childcomponent name={ this.state.emp1_name} sal={ this.state.emp1_name} age={ this.state.emp1_age}/>
             {/* static content */}
             <Childcomponent name="Sohan" age="22" sal="300"/>
                
            <Childcomponent/>
            </div>
        )
    }
}
