import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <div className="nav_container">
                <Link to="/" className="navlink">Home</Link>
                <Link to="/ranking" className="navlink">Ranking</Link>
            </div>
        </>
    );
}

export default Navbar;
