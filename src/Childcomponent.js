import React , { Component} from "react";


class Childcomponent extends Component{
    render(){
        return(
            <div className="myclass">
            Name : {this.props.name} <br />
            Age : {this.props.age} <br/>
            Salary : {this.props.sal} <hr/>
              </div>
           
        )

    }
}

export default Childcomponent;