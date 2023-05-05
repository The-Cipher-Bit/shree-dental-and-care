import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
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
    Name: "Chandra Shah",
  },
  {
    id: 2,
    image: imageB,
    message:
      "The salon was clean and well-maintained, and the service was excellent",
    Name: "Rita Patel",
  },
  {
    id: 3,
    image: imageC,
    message:
      "I loved my new haircut! The stylist was very talented and listened to what I wanted",
    Name: "Sara Lee",
  },
  {
    id: 4,
    image: imageD,
    message:
      "The prices are very reasonable for the quality of service you receive",
    Name: "Tom Smith",
  },
  {
    id: 5,
    image: imageA,
    message:
      "I would highly recommend this salon to anyone looking for a great haircut and friendly service",
    Name: "John Doe",
  },
];

SwiperCore.use([Pagination, Autoplay]);
function Review() {
  return (
    <>
      <div className="main-container-review">
        <div className="container-review-heading">
          <h3 className="title_font">What Our <span className="textcolor_primary title_font">Client Says About Us</span></h3>
        
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
          <SwiperSlide>
            <div className="container-client-message">
              <div className="container-message">
                <p>{Slider[0].message}</p>
                <span className="rating">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </div>
              <div className="container-customer-info">
                <img src={Slider[0].image} alt="image" />
                <h3>{Slider[0].Name}</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-client-message">
              <div className="container-message">
                <p>{Slider[1].message}</p>
                <span className="rating">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </div>
              <div className="container-customer-info">
                <img src={Slider[1].image} alt="image" />
                <h3>{Slider[1].Name}</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-client-message">
              <div className="container-message">
                <p>{Slider[2].message}</p>
                <span className="rating">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </div>
              <div className="container-customer-info">
                <img src={Slider[2].image} alt="image" />
                <h3>{Slider[2].Name}</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-client-message">
              <div className="container-message">
                <p>{Slider[3].message}</p>
                <span className="rating">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </div>
              <div className="container-customer-info">
                <img src={Slider[3].image} alt="image" />
                <h3>{Slider[3].Name}</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-client-message">
              <div className="container-message">
                <p>{Slider[4].message}</p>
                <span className="rating">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </div>
              <div className="container-customer-info">
                <img src={Slider[4].image} alt="image" />
                <h3>{Slider[4].Name}</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Review;
