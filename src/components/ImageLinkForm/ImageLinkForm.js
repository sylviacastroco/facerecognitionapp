import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 pt5 mh5'>
        {'This magic brain will detect faces in your pictures.'}
      </p>
      <p className='f3'>{'Give it a try 👇'}</p>
      <div className='center pa4'>
        <div className='center form pa4 br3 shadow-5'>
          <input
            className='f4 pa2 w-70 center'
            type='text'
            onChange={onInputChange}
          />
          <button
            className='btn_background w-30 grow f4 link ph3 pv2 dib white'
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
