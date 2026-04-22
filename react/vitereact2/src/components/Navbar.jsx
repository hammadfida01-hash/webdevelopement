import {Link} from 'react-router-dom'
import './navbar.css'
function Navbar(){
        return(
            <div id='nav'>
                <span> <Link to=''>Home</Link> </span>
                  <span> <Link to='/About'>About</Link> </span>
                    {/* <span> <Link to='/Error'>Error</Link> </span> */}
            </div>
        );
    }
    export default Navbar;