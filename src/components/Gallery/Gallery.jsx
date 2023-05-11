import React, { useState } from "react";
import "./gallery.css";
import photoA from "../../assets/images/galleryA.png";
import photoB from "../../assets/images/galleryB.png";
import photoC from "../../assets/images/galleryC.png";
import photoD from "../../assets/images/GallA.jpg";
import photoE from "../../assets/images/GallB.webp";
import photoF from "../../assets/images/GallC.jpg";
import { HiOutlineXCircle } from "react-icons/hi";
import Masonry from "react-masonry-css";

const images = [
  { id: 1, src: photoA },
  { id: 2, src: photoB },
  { id: 3, src: photoC },
  { id: 4, src: photoD },
  { id: 5, src: photoE },
  { id: 6, src: photoF },
];

const breakpointColumnsObj = {
  default: 3,
  800: 2,
  480: 1,
};

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <div className="main-container-gallery" id="gallery">
        <h2 className="title_font">
          Our <span className="textcolor_primary title_font">Gallery</span>
        </h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <div
              className={`image-container ${index === 0 ? "large-image" : ""} ${
                index === 1 || index === 3 ? "masonry-item--lower" : ""
              } ${index === 4 ? "special-image" : ""}`}
              key={image.id}
            >
              <img
                src={image.src}
                alt={`photo-${image.id}`}
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </Masonry>
      </div>
      {selectedImage && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <img src={selectedImage.src} alt={`photo-${selectedImage.id}`} />
            <HiOutlineXCircle
              className="close-button"
              onClick={handleCloseClick}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
