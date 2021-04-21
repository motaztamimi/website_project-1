import img1 from "../imges/1.jpg";
import img2 from "../imges/2.jpg";
import img3 from "../imges/3.jpg";
import img4 from "../imges/4.jpg";
import img5 from "../imges/5.jpg";
import img6 from "../imges/6.jpg";
import img7 from "../imges/7.jpg";
import img8 from "../imges/8.jpg";
import '../style/SlideShow.css';


import {useState ,useEffect} from "react"
const SlideShow = () => {

    const [slidenum, setSlide]=useState(1);
    const [firstrender, setfirstrender ]=useState(true);
    const Showslide=(n)=>{
        let i;
        let slide=document.getElementsByClassName("myslide");
          let a  = Array.from(slide);
    
        let curentindex=n;
        if (curentindex >a.length){ curentindex=1}
        if ( curentindex <= 0){curentindex=a.length}
        for( i=0;i<a.length;i++){
            a[i].style.display="none"
        }
      
        a[curentindex-1].style.display = "block";  
        setSlide(curentindex);
    }

    function plusSlides(n) {
        Showslide(slidenum+n);
      }  
     useEffect(()=> {
         Showslide(1);
         setfirstrender(false);
         
     }, [firstrender]);


    return (
    
      < div className="slideShow-container">
            <div className="myslide">
                <img src={img1}  alt='' />
            </div>
            <div className="myslide">
                <img src={img2}  alt=''/>
            </div>
            <div className="myslide">
                <img src={img3}  alt=''/>
            </div>
            <div className="myslide">
                <img src={img4}  alt='' />
            </div>
            <div className="myslide">
                <img src={img5}  alt=''/>
            </div>
            <div className="myslide">
                <img src={img6} alt='' />
            </div>
            <div className="myslide">
                <img src={img7} alt='' />
            </div>
            <div className="myslide">
                <img src={img8} alt=''/>
            </div>

            <button className="prev"   onClick={()=> plusSlides(-1)}>&#10094;</button>
            <button className="next"  onClick={()=> plusSlides(1)}>&#10095;</button>
        </div>
     
  

    )
}

export default SlideShow