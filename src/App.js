import React, { useEffect, useState } from 'react';
import ImageDisplay from './components/ImagesDisplay';
import Form from './components/Form';
import Modal from './components/Modal';
import { getApiData } from './utils';

import './App.css';

const App = () => {
  const [show, setShow] = useState(false);
  const [images, setImages] = useState();
  const [/*fastImages*/, setFastImages] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    getApiData('images?limit=10', 'timer1', setImages);
    getApiData('fast-loading?limit=10', 'timer2', setFastImages);
  }, []);

  return (
    <>
      <h1 className="main-display-title">Gallery</h1>
      <div className="main-display">
        <Form />
        <ImageDisplay
          images={images}
          show={show}
          setShow={setShow}
          setImage={setImage}
        />
      </div>
      {show && <Modal setShow={setShow} image={image} />}
    </>
  );
};

export default App;
