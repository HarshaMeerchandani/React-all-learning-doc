import React , { Component} from "react"

class Average extends Component{
    constructor(){
        super();
        this.state = {
            phy_marks:70,
            chm_marks: 60,
            math_marks: 90,
            eng_marks: 70 , 
            hindi_marks: 40
        }
    }
    render(){
        return(
            <div className="avg">
            <h4>Average of marks</h4>
            Physiscs Marks: <input type="text" value={ this.state.phy_marks} id="stu-pys" />
            <br/>
            Math Marks: <input type="text" value={ this.state.math_marks } id="stu-math" />
            <br/>
            Chemisrty Marks: <input type="text" value={ this.state.chm_marks} id="stu-che" />
            <br/>
            English Marks: <input type="text" value={ this.state.eng_marks } id="stu-eng" />
            <br/>
            Hindi Marks: <input type="text" value={ this.state.hindi_marks } id="stu-eng" />
            <br/>
            Average: { (this.state.math_marks + this.state.chm_marks + this.state.phy_marks + this.state.eng_marks + this.state.hindi_marks) /2 }
            </div>
        )
    }

}

export default Average;
