import { useState } from 'react';
import '../style/Preview.css';
const Preview = (element) => {
  const [stylemodel, setstylemodel] = useState(null);
  const [thisSrc, setthisSrc] = useState(null);
  let stO = {
    display: 'block',
  };
  let stN = {
    display: 'none',
  };
  function showPhoto(e) {
    setstylemodel(stO);
    setthisSrc(e);
  }
  function closePhoto(e) {
    if (e.target.id !== 'imgg') {
      setstylemodel(stN);
    }
  }
  return (
    <div>
      <img
        id='myImg'
        src={element.element.url}
        alt=''
        onClick={() => showPhoto(element.element.url)}
      />
      <div className='modal' style={stylemodel} onClick={(e) => closePhoto(e)}>
        <div className='modelImg'>
          <img id='imgg' src={thisSrc} alt='' />
        </div>
      </div>
    </div>
  );
};
export default Preview;
