import React , { Component } from "react"
import City from "./City.js"

class Cities extends Component{
    render()
    {
        return(
            <div>
                <City City_id="123" city_name="banglore" city_area="6000"/>
                <City City_id="12345" city_name="bhopal" city_area="6000"/>
                <City City_id="123456" city_name="tikamgarh" city_area="8000"/>
            </div>
        )
    }
}

export default Cities;
