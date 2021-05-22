/** @format */

import { useState, useEffect } from 'react';
import { dataBase } from '../config/firebase';

const useDataBase = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unSub = dataBase
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unSub();
  }, [collection]);

  return { docs };
};

export default useDataBase;
