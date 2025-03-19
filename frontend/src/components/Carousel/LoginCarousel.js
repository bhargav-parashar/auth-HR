import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({
  data,
  slidesPerView = 1,
  spaceBetween = 30,
  speed = 1100,
  delay = 3000
}) {
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{
          delay: delay,
          pauseOnMouseEnter: true,
        }}
        speed= {speed}
        style={{
          width: "90%",
          paddingBottom: "10px", 
        }}
      >
        {data.map((slide,idx) => (
          <SwiperSlide
            key={idx}
            style={{
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="swiper-pagination"
        style={{
          position: "relative",
          marginTop: "0px", 
        }}
      ></div>

      <style>
        {`
    /* Non-active dot color */
    .swiper-pagination-bullet {
      background-color: gray;
      width: 20px; /* Rectangle width */
      height: 5px; /* Rectangle height */
      border-radius: 5px; /* Slightly rounded corners */
      opacity: 1; /* Override Swiper's default opacity */
    }

    /* Active dot color */
    .swiper-pagination-bullet-active {
      background-color: white;
    }
  `}
      </style>
    </>
  );
}
