// import email from './images/Mail.png';
// import linkedin from './images/Vector.png';
import React from 'react'
// import star from './images/filledStar.jpg';
import Star from './Star.js'


function Header(){
    const [contact, setContact] = React.useState({
        firstName:'Onyekachi',
        LastName:"Edemba",
        phone:"+234-902-176-7322",
        email:'edembaonyekachi@ymail.com',
        isFavorite:false
    })
    
    
   function changeStar(){
    setContact(prevState =>{
        return{
            ...prevState,
            isFavorite: !contact.isFavorite
        }
    })
   }
         
    return(
        <header className="header">
            <img alt='' className="profilepicture"></img >
            <div className='details'>
                <h2>{contact.LastName} {contact.firstName}</h2>
                <p className='detailPara'>Frontend Developer <Star isFilled={contact.isFavorite} handleClick={changeStar} /> </p>
                <p className='detailPara2'>github/cornbeef111</p>
            </div>
            <div className='btndiv'>
                <button className='btn email'><img src='./images/Mail.png' className='email-icon' alt='' /> Email</button>
                <button className='btn link'><img src='./images/Vector.png' className='link-icon' alt='' /> LinkedIn</button>
            </div>
        </header>
    )
}

export default Header;