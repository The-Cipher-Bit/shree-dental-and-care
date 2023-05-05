import React, { useState } from "react";
import "./gallery.css";
import photoA from "../../assets/images/GalleryA.png";
import photoB from "../../assets/images/GalleryB.png";
import photoC from "../../assets/images/GalleryC.png";

const images = [
  { id: 1, src: photoA },
  { id: 2, src: photoB },
  { id: 3, src: photoC },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="main-container-gallery">
        <h3 className="title_font">
          Our <span className="textcolor_primary title_font">Gallery</span>
        </h3>
        <div className="gallery-container">
          {images.map((image, index) => (
            <div
              className={`image-container ${index === 0 ? "large-image" : ""}`}
              key={image.id}
            >
              <img
                src={image.src}
                alt={`photo-${image.id}`}
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedImage.src} alt={`photo-${selectedImage.id}`} />
            <button className="close-button" onClick={handleCloseClick}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
