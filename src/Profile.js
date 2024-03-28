import email from './images/Mail.png';
import linkedin from './images/Vector.png';


function Header(){
    return(
        <header className="header">
            <img alt='' className="profilepicture"></img >
            <div className='details'>
                <h2>Edemba Onyekachi</h2>
                <p className='detailPara'>Frontend Developer</p>
                <p className='detailPara2'>github/cornbeef111</p>
            </div>
            <div className='btndiv'>
                <button className='btn email'><img src={email} className='email-icon' alt='' /> Email</button>
                <button className='btn link'><img src={linkedin} className='link-icon' alt='' /> LinkedIn</button>
            </div>
        </header>
    )
}

export default Header;