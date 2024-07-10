import React from 'react'

function Star(props){
    let starIcon = props.isFilled? './images/filledStar.jpg' : './images/emptyStar.png';
    return(
        <img src={starIcon} className='star--img' alt='' onClick={props.handleClick} />
    )
}

export default Star