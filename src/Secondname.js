import React from 'react'
import Firstname from './Firstname'
import Box from './Box.js'

function Secondname(){
    const [boxes, setBoxes] = React.useState(Firstname)

    function changeColor(id){
       setBoxes(prevBox => {
        return prevBox.map((boxx) => {
               return boxx.id === id ? {...boxx, on: !boxx.on} : boxx;
        })
       })
    }
    
   
    let boxArray = boxes.map((box) =>{
        
        return(
           <Box on={box.on} key={box.id} id={box.id} changeFunction={() => changeColor(box.id)} />
        )
    })
    return(
    <div>
         <p>Boxes go under</p>
         {boxArray}
    </div>
      
    )
}

export default Secondname