import React from 'react'

function Hello(props){
   
        console.log(props)
        return (   
        // <h1>{ props.a + props.b }</h1>
        <h1>{ props.name }</h1>
    )
}


export default Hello;