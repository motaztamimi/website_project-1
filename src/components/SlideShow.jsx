import img1 from "../imges/img1.jpg";
import img2 from "../imges/img2.jpg"
import img3 from "../imges/img3.jpg"
import {useState ,useEffect} from "react"
const SlideShow = () => {

    const [slidenum, setSlide]=useState(1);
    const [firstrender, setfirstrender ]=useState(true);
    const Showslide=(n)=>{
        let i;
        let slide=document.getElementsByClassName("myslide");
        console.log(slidenum);
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
         if ( firstrender ){
         Showslide(1);
         setfirstrender(false);
         }
     });


    return (
    
      < div className="slideShow-container">
            <div className="myslide">
                <img src={img1}   />
            </div>
            <div className="myslide">
                <img src={img2}  />
            </div>
            <div className="myslide">
                <img src={img3}  />
            </div>

            <a className="prev"   onClick={()=> plusSlides(-1)}>&#10094;</a>
            <a className="next"  onClick={()=> plusSlides(1)}>&#10095;</a>
        </div>
     
  

    )
}

export default SlideShow
