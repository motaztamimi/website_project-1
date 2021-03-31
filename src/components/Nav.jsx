import { BsSearch } from 'react-icons/bs';
import { useState} from 'react';
import DropDown from './DropDown';
const Nav = () => {
    const [inputToggle, inputToggleSet] = useState(false); 
    return (
        <div className="NavBar">
            
            <ul>
                <li>מי אנחנו<DropDown items={['שלום', 'היי', 'לול']}/></li>
                <li>ביה''ח כפר שאול<DropDown items={['שלום', 'היי', 'לול']}/></li>
                <li>ביה''ח איתנים<DropDown items={['שלום', 'היי', 'לול']}/></li>
                <li>השירות הקהילתי<DropDown items={['שלום', 'היי', 'לול']}/></li>
                <li>מחקרים ופעילות אקדמית <DropDown items={['שלום', 'היי', 'לול']}/></li>
                <li>רפואה , סיעוד , מינהל<DropDown items={['שלום', 'היי', 'לול']}/></li>
            </ul>
            {  inputToggle && <input type="text" placeholder='חיפוס... '/>  }
            <BsSearch size='35px' style={{margin: 20}} onClick={()=>inputToggleSet(!inputToggle)}/>
            
        </div>
    )
}

export default Nav
