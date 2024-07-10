import React from 'react'


function Joke(props){
     const [isShown, setIsShown] = React.useState(false)


 
     function Toggle(){
        setIsShown(prevState => !prevState)
     }

    return(
        <div>
            <div>
            <h1>{props.setup}</h1>
            <h3>{isShown && props.punchline}</h3>
            {<button onClick={Toggle}>{isShown? 'Hide' : 'Show'} punchline</button>}
          
            <hr />
            </div>
            
        </div>
    )
}

export default Joke