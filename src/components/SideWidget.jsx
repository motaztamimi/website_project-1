import img1 from '../imges/newsimg1.jpg';


const SideWidget = ({photo})=>{

    return(
        <>  
            <div className='SideWidget'>
                <img src={[photo]} alt=""/>
            </div>
        </>

    );

}

export default SideWidget;