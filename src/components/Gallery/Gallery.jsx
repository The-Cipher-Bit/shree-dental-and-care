import React, { useState } from "react";
import "./gallery.css";
import photoA from "../../assets/images/galleryA.png";
import photoB from "../../assets/images/galleryB.png";
import photoC from "../../assets/images/galleryC.png";
import { HiOutlineXCircle } from "react-icons/hi";

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
      <div className="main-container-gallery" id="gallery">
        <h2 className="title_font">
          Our <span className="textcolor_primary title_font">Gallery</span>
        </h2>
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
            <HiOutlineXCircle  className="close-button" onClick={handleCloseClick}/>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
