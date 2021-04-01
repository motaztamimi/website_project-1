import Nav from "./Nav";
import logo from "../imges/logo.png"; 

const Header = () => {
    return (
        <>
            <div className="Header">
            <img src={logo} alt=""/>
            <Nav/>
            </div>
            
        </>
    )
}

export default Header
