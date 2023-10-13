import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((imageUrl, index) => (
        <div key={index} className="image-item">
          <img src={imageUrl} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
