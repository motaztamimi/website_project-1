import useStorage from '../hooks/useStorage';
import { useEffect } from 'react';

const ProgressBar = ({ file, path, setFile }) => {
  const { url, progress } = useStorage(file, path);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return <div className='progress-bar' style={{ width: progress + '%' }}></div>;
};

export default ProgressBar;
