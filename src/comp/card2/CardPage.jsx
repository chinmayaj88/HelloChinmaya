// import React from "react";
// import "./cp.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import CardTwo from "./CardTwo";
// import { data2 } from "./card2";

// const CardPage = () => {
//   return (
//     <div className="cp-cont">
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={3}
//         loop={true} // Enable infinite loop
//         grabCursor={true} // Enable grab cursor
//       >
//         {data2.map((item) => (
//           <SwiperSlide key={item.id}>
//             <CardTwo item={item} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CardPage;
import React from "react";
import "./cp.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardTwo from "./CardTwo";
import { data2 } from "./card2";

const CardPage = () => {
  return (
    <div className="cp-cont">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true} // Enable infinite loop
        grabCursor={true} // Enable grab cursor
        mousewheel={true} // Enable smooth scroll with mousewheel
        keyboard={true} // Enable keyboard navigation
        speed={2000} // Set the scroll speed in milliseconds
        renderedSlides={3}
      >
        {data2.map((item) => (
          <SwiperSlide key={item.id}>
            <CardTwo item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardPage;
