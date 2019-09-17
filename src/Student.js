import React , { Component } from "react"

class Student extends Component{
    constructor(){
        super();
        this.state = {
            P:30,
            C:20,
            M:50,
            H:40,
            E:80,
            markavg: 0
        }
    }

    FindAverage = () =>{
        const avg = parseInt(this.state.P) + parseInt(this.state.M) + parseInt(this.state.C) + parseInt(this.state.H) + + parseInt(this.state.E)
        
        this.setState(
            {
                markavg: avg/5
            }
        )
    }
    
   
  
    render(){
        return(
            <div>
                <h6>Average with setState all subject</h6>
                P:  <input type="text" value={ this.state.P } onChange={ (event) => this.setState({ P:event.target.value })}/>
                <br></br>
                C:  <input type="text" value={ this.state.C } onChange={ (event) => this.setState({ C:event.target.value })}/>
                <br></br>
                M:  <input type="text" value={ this.state.M } onChange={ (event) => this.setState({ M:event.target.value })}/>
                <br></br>
                H:  <input type="text" value={ this.state.H } onChange={ (event) => this.setState({ H:event.target.value })}/>
                <br></br>
                E:  <input type="text" value={ this.state.E } onChange={ (event) => this.setState({ E:event.target.value })}/>
                <br></br>
                <button onClick={ this.FindAverage }> Find Average</button>
                <p> Average: { this.state.markavg }</p>
            </div>
        )
    }
}

export default Student;