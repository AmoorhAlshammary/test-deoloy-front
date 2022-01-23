import { useState, useEffect } from 'react';
import {base,A} from './Firebase/Config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {

    const storaged = base.ref(file.name);
    const collectiond = A.collection('images');
    
    storaged.put(file).on('state_changed', (snap) => {
      let img = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(img);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storaged.getDownloadURL();
      await collectiond.add({ url });
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;