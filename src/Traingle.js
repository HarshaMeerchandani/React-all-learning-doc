import React, { Component } from 'react'

export default class Traingle extends Component {
    constructor(){
        super();
        this.state = {
            b:0,
            l:0,
            h:0,
            a:0,
            p:0
        }
    }

    TringleArea = () =>{
        const Traingleperi = parseInt(this.state.b) + parseInt(this.state.l) + parseInt(this.state.h)
        const Trainglearea = parseInt(this.state.b) * parseInt(this.state.l) / 2
        this.setState(
            {
                    a: Trainglearea/3,
                    p:  Traingleperi
            }
        )
    }

    render() {
        return (
            <div>
             <h2>Traingle Area</h2> 
             <input type="text" value={ this.state.b } onChange={(event) => this.setState({b:event.target.value})} />
             <input type="text" value={ this.state.l } onChange={ (event) => this.setState({l:event.target.value})} />
             <input type="text" value={ this.state.h } onChange={ (event) => this.setState({h:event.target.value}) } />
             <button onClick={ this.TringleArea }>FInd the Area</button>
             <button onClick={ this.Traingleperi }>find perimeter</button>  
             <p>Area: { this.state.a }</p>
             <p>Perimeter: { this.state.p }</p>
            </div>
        )
    }
}

