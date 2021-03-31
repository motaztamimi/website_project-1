import Nav from "./Nav";
import {AiOutlineSearch } from "react-icons/ai";
import logo from "../imges/logo.png"; 

const Header = () => {
    return (
        <>
            <div className="Header">
            <img style={{width:750}} src={logo} alt=""/>
            <input  type="text" placeholder="Search..."/>
            <AiOutlineSearch/>
            </div>
            <Nav/>
        </>
    )
}

export default Header
