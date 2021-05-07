import { useState, useEffect } from 'react';
import { storage, dataBase, timestamp } from '../config/firebase';

const useStorage = (file, path, collection) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(path + '/' + file.name);
    const collectionRef = dataBase.collection(collection);
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let perentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(perentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });

        setUrl(url);
      }
    );
  }, [file, path, collection]);

  return { progress, url, error };
};

export default useStorage;
