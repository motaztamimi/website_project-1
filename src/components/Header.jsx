import Nav from "./Nav";
import {BsSearch } from "react-icons/bs";
import logo from "../imges/logo.png"; 

const Header = () => {
    return (
        <>
            <div className="Header">
            <img src={logo} alt="" srcset=""/>
            <Nav/>
            </div>
            
        </>
    )
}

export default Header
