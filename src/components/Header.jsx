import Nav from "./Nav";
import { BsSearch } from 'react-icons/bs';


const Header = () => {
    return (
        <>
            <div className="Header">
            <div className="HeaderContanier">
            <div className="HeaderUpperSection">
            <img src={`${process.env.PUBLIC_URL}/imges/LOGO.jpg`} alt=""/>
            <div>
            <input type="text" placeholder='חיפוש'/>
            <button><BsSearch size='20px' color='white'/></button>
            </div>
            </div>
            <Nav/>
            </div>
            </div>
            
        </>
    )
}

export default Header
