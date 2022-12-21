import React from 'react';

const Modal = ({ setShow, image }) => {
  return (
    <div className="modal-screen">
      <div className="modal-content">
        <div onClick={() => setShow(false)} className="modal-close">
          <img
            src="https://img.icons8.com/ios/50/null/close-window.png"
            alt="close"
          />
        </div>
        <div>
          <img
            className="modal-image-size"
            src={`${image.url}.jpg`}
            alt={image.description}
          />
        </div>
        <span className="description-text description-text-format">
          {image.description}
        </span>
      </div>
    </div>
  );
};

export default Modal;
