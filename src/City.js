import React , { Component } from "react"

class City extends Component{
    render(){
        return(
            <div>
                { this.props.City_id }
                { this.props.City_name }
                { this.props.City_area }
            </div>
        )
    }
}

export default City;
