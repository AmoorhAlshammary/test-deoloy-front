import React, { useEffect } from 'react';
import useStorage from './useStorage';

const ProgressBar = ({ file, setFile,setImg}) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      console.log(url);
      setFile(null);
      setImg(url)
      // console.log(url) 
    }
  }, [url, setFile]);

  return (
    <div>
      {progress} %
    </div>
  );
} 

export default ProgressBar;