import { BsSearch } from 'react-icons/bs';


const MobNav = ()=>{

    return(
        <div className='MobNav'>
            <div>
            <input type="text" placeholder='חיפוש'/>
            <button><BsSearch size='20px' color='white'/></button>            
            </div>
            <ul>
                <li>מי-אנחנו</li>
                <li>ביה-כפר-שאול</li>
                <li>ביה''ח-איתנים</li>
                <li>השירות-הקהילתי</li>
                <li>מחקרים,ופעילות-אקדמית</li>
                <li>רפואה,סיעוד,מינהל</li>
            </ul>
        </div>

    );



}


export default MobNav;