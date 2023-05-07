import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import imageA from "../../assets/images/profile.jpg";
import imageB from "../../assets/images/GallC.jpg";
import imageC from "../../assets/images/GallE.jpg";
import imageD from "../../assets/images/galleryB.png";

const Slider = [
  {
    id: 1,
    image: imageA,
    message:
      "The staff was friendly and welcoming, making me feel comfortable from the moment I walked in",
    name: "Chandra Shah",
    rating: 5,
  },
  {
    id: 2,
    image: imageB,
    message:
      "The salon was clean and well-maintained, and the service was excellent",
    name: "Rita Patel",
    rating: 4,
  },
  {
    id: 3,
    image: imageC,
    message:
      "I loved my new haircut! The stylist was very talented and listened to what I wanted",
    name: "Sara Lee",
    rating: 3,
  },
  {
    id: 4,
    image: imageD,
    message:
      "The prices are very reasonable for the quality of service you receive",
    name: "Tom Smith",
    rating: 2,
  },
  {
    id: 5,
    image: imageA,
    message:
      "I would highly recommend this salon to anyone looking for a great haircut and friendly service",
    name: "John Doe",
    rating: 1,
  },
];
SwiperCore.use([Autoplay, Pagination]); // SwiperCore is a global object exported by Swiper which includes all components and methods.
function Review() {
  return (
    <>
      <div className="main-container-review">
        <div className="container-review-heading">
          <h2 className="title_font">
            What Our{" "}
            <span className="textcolor_primary title_font">
              Client Says About Us
            </span>
          </h2>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
            {Slider.map((slide, index) => {
              const stars = [];
              for (let i = 1; i <= slide.rating; i++) {
                stars.push(<span key={i}>&#9733;</span>);
              }
              for (let i = slide.rating + 1; i <= 5; i++) {
                stars.push(<span key={i}>&#9734;</span>);
              }
              return (
                <SwiperSlide key={index}>
                  <div className="container-client-message">
                    <div className="container-reviewmessage">
                      <p>&#128483;{"  "}" {slide.message} "</p>
                      <p className="rating">{stars}</p>
                    </div>
                    <div className="container-customer-info">
                      <img src={slide.image} alt="image" />
                      <div className="container-customer-info_name">
                        <h3>{slide.name}</h3>
                        <p>patient</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

export default Review;
