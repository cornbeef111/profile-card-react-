import React from "react"
function Box(props){
  
    const styles ={
        backgroundColor:props.on? '#222222' : '#cccccc',
        color: props.id % 2 === 0? 'black' : "white"
    }
    return(
        <div 
        className='box' 
        style={styles} 
        onClick= {props.changeFunction}> {props.id} </div> 
    )
}

export default Box




