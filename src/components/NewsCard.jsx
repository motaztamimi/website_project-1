
const NewsCard = ({news})=>{


    return(

        <div className='NewsCard'>
            <div className='CardImg'><img src={news.img} alt=""/></div>
            <div className='CardBody'>
                <h1>{news.title}</h1>
                <h3>{news.brife}</h3>
            </div>
        </div>



    );


}

export default NewsCard;