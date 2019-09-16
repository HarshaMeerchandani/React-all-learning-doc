import React , { Component } from "react"

class Addsetstate extends Component{
    constructor(){
        super();
        this.state ={
            a: 30,
            b: 40,
            c: 0
        }
    }

    setA = (event) => {
        this.setState(
            {
                a: event.target.value
            }
        )
    }

    setB= ( event) =>{
        this.setState(
            {
                b:event.target.value
            }
        )
    }

    
    AddNumbers = () =>{
        const ans = parseInt(this.state.a) + parseInt(this.state.b);
        this.setState({
            c : ans
          })
    }

    render()
    {
        return(
            <div>
                First Number: <input type="text" onChange={ this.setA } value={ this.state.a } id="first_num"/>
               <br></br>
                Second Number: <input type="text" onChange={ this.setB } value={ this.state.b } id="second_num"/>
               <br></br>
               <button onClick={ this.AddNumbers } value={ this.state.a + this.state.b } id="second_num">Addtion </button>
                                <p>
                    The sum is {this.state.c}
                    </p>

            </div>
        )
    }
}

export default Addsetstate;