import './AdminVideos.css';
import { useState } from 'react';
import {  dataBase, timestamp } from '../../config/firebase';
import AdminVideosShow from './AdminVideosShow';
import { AiOutlineUser } from 'react-icons/ai';
const AdminVideos = () => {
  const [file, setFile] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  const collectionRef = dataBase.collection('Videos');

  const div = (
    <div className='loading'>
      <div className='loader'></div>
    </div>
  );
  const OnChangeFileHandeler = (e) => {
    const selected = e.target.value;
    console.log(selected);
    if (selected) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  const submithandeler = (e) => {
    e.preventDefault();
    console.log(file);
    if (file) {
      setShowDiv(true);

      collectionRef
        .add({
          VideoURL: file,
          createdAt: timestamp(),
        })
        .then(() => {
          setShowDiv(false);
          document.getElementById('uploadFromVideos').value=' ';
        });
    } else {
      alert('please upload an embed url');
      return;
    }
  };

  return (
    <div>
      <div className='EditVideosPage'>
        {showDiv && div}

        <form className='EditVideosForm' onSubmit={submithandeler}>
          <span>עלית תמונה </span>
          <a href='/Admin'>
            <AiOutlineUser
              title='AdminPage'
              className='AdminButtonVideos'
              id='accessIMG'
              color='#151e4d'
            />
          </a>
          <input
            type='url'
            id='uploadFromVideos'
            placeholder='embed URL'
            title='please fill an emded URL'
            onChange={OnChangeFileHandeler}
            required
          />

          <input type='submit' value='upload' className='submitPhoto' />
        </form>

        {<AdminVideosShow collection={'Videos'} />}
      </div>
    </div>
  );
};

export default AdminVideos;
