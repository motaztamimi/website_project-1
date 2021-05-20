import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import DoctorCard from './DoctorCard';
import img0 from '../imges/manger.jpg';
import img1 from '../imges/manger3.jpg';
import img2 from '../imges/manger2.jpg';
import '../style/DoctorSlid.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DoctorSlid = () => {
  const list = [
    { id: 1, name: 'mahmoud', text: "i'm engenering", img: img0 },
    { id: 2, name: 'mahmoud', text: "i'm engenering", img: img1 },
    { id: 3, name: 'mahmoud', text: "i'm engenering", img: img2 },
    { id: 4, name: 'mahmoud', text: "i'm engenering", img: img0 },
    { id: 5, name: 'mahmoud', text: "i'm engenering", img: img1 },
    { id: 6, name: 'mahmoud', text: "i'm engenering", img: img2 },
    { id: 7, name: 'mahmoud', text: "i'm engenering", img: img0 },
  ];
  return (
    <div className="DoctorSlid">
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      
        <div >
          {list.map((element) => (<SwiperSlide key={element.id}>
          <DoctorCard key={element.id} index={element} />
          </SwiperSlide>
        ))}
        </div>
        
        
      
    </Swiper>
    </div>  );
};
export default DoctorSlid;
