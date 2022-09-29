import logo from '../../images/logoblue.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">
            <img className="logo" src={logo} alt="the ocean"></img>
        </div>
    )
}

export default Navbar;