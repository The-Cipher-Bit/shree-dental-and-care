import React from "react";
import "./gallery.css";
import photoA from "../../assets/images/image 41.png";
import photoB from "../../assets/images/image 41.png";
import photoC from "../../assets/images/image 41.png";

const images = [
  { id: 1, src: photoA },
  { id: 2, src: photoB },
  { id: 3, src: photoC },
];

function Gallery() {
  return (
    <>
      <div className="main-conatiner-gallery">
      <h3>Our <span className='textcolor_primary'>Gallery</span></h3>
        <div className="gallery-container">
          {images.map((image) => (
            <div className="image-container" key={image.id}>
              <img src={image.src} alt={`photo-${image.id}`} />
              <div className="image-overlay">
                <p className="image-overlay-text">Image {image.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
