import '../style/UploadPhotoForm.css';
import { useState } from 'react';
const UploadPhotoFrom = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'img/jpg'];
  const OnChangeHandeler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please Select an image file (png , jpeg or jpg');
    }
  };
  return (
    <form className='UploadPhotoForm'>
      <input type='file' name='uploadPhoto' onChange={OnChangeHandeler} />
      <div className='UploadPhotoError'>{error}</div>
    </form>
  );
};

export default UploadPhotoFrom;
