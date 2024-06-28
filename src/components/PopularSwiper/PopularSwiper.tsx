import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "../../shared";
import styles from "./PopularSwiper.module.css";
import { Navigation, Pagination } from "swiper/modules";

export const PopularSwiper = () => {
  return (
    <div className={styles.wrapper}>
      <Typography className={styles.title} tag="h3" variant="regular100">
        Популярные букеты
      </Typography>
      <Typography
        transform="lowercase"
        className={styles.desc}
        tag="p"
        variant="light20"
      >
        Самые любимые композиции наших клиентов
      </Typography>
      <div className={styles.inner}>
        <Swiper
          slidesPerView={3}
          spaceBetween={120}
          loop={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
