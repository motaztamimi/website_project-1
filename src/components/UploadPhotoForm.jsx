import '../style/UploadPhotoForm.css';
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';

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
      setError('Please Select an image file (png , jpeg or jpg)');
    }
  };
  return (
    <form className='UploadPhotoForm'>
      <label className='UploadPhotoFormLable'>
        <input type='file' name='uploadPhoto' onChange={OnChangeHandeler} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error} </div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} path={'Gallery'} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadPhotoFrom;
