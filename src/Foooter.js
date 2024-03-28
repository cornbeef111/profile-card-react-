import twitter from './images/Twitter.png';
import facebook from './images/Facebook.png';
import instagram from './images/Instagram.png';
import git from './images/GitHub.png';

function Footer(){
    return(
        <footer>
            <img src={twitter} className='twitter' alt=''></img>
            <img src={facebook} alt=''></img>
            <img src={instagram} alt=''></img>
            <img src={git} alt=''></img>
        </footer>
    )
}

export default Footer