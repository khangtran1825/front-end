import React from 'react'; // Import React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import WowAnimation from '../../common/Animation/WowAnimation'; // Import WowAnimation
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  const carouselItems = [
    {
      image: 'img/carousel-1.png',
      discount: '$400',
      title: 'On Selected Laptops & Desktop Or Smartphone',
      delay: 0.1 // Chuyển sang số
    },
    {
      image: 'img/carousel-2.png',
      discount: '$200',
      title: 'On Selected Laptops & Desktop Or Smartphone',
      delay: 0.1 // Chuyển sang số
    }
  ];

  return (
    <div className="container-fluid carousel bg-light px-0">
      <div className="row g-0 justify-content-end">
        <div className="col-12 col-lg-7 col-xl-9">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.hero-swiper-button-next', // Sử dụng class duy nhất
              prevEl: '.hero-swiper-button-prev', // Sử dụng class duy nhất
            }}
            pagination={{
              el: '.hero-swiper-pagination', // Sử dụng class duy nhất
              clickable: true
            }}
            className="header-carousel py-5" // Xóa owl-carousel nếu không cần
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="row g-0 header-carousel-item align-items-center">
                   {/* Áp dụng WowAnimation cho ảnh */}
                   <WowAnimation animationClass="fadeInLeft" delay={item.delay} className="col-xl-6 carousel-img">
                     <img src={`/${item.image}`} className="img-fluid w-100" alt="Carousel item" />
                   </WowAnimation>
                   {/* Phần content với WowAnimation */}
                   <div className="col-xl-6 carousel-content p-4">
                     <WowAnimation animationClass="fadeInRight" delay={0.1}>
                       <h4 className="text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>
                         Save Up To A {item.discount}
                       </h4>
                     </WowAnimation>
                     <WowAnimation animationClass="fadeInRight" delay={0.3}>
                       <h1 className="display-3 text-capitalize mb-4">
                         {item.title}
                       </h1>
                     </WowAnimation>
                     <WowAnimation animationClass="fadeInRight" delay={0.5}>
                       <p className="text-dark">
                         Terms and Condition Apply
                       </p>
                     </WowAnimation>
                     <WowAnimation animationClass="fadeInRight" delay={0.7}>
                       <a className="btn btn-primary rounded-pill py-3 px-5" href="#">
                         Shop Now
                       </a>
                     </WowAnimation>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation và Pagination với class duy nhất */}
            <div className="swiper-button-prev hero-swiper-button-prev">
              <i className="fas fa-chevron-left"></i> {/* Đổi icon nếu muốn */}
            </div>
            <div className="swiper-button-next hero-swiper-button-next">
              <i className="fas fa-chevron-right"></i> {/* Đổi icon nếu muốn */}
            </div>
            <div className="swiper-pagination hero-swiper-pagination"></div>
          </Swiper>
        </div>

        {/* Right banner */}
        <WowAnimation animationClass="fadeInRight" delay={0.1} className="col-12 col-lg-5 col-xl-3">
          <div className="carousel-header-banner h-100">
            <img src="/img/header-img.jpg" className="img-fluid w-100 h-100"
                 style={{ objectFit: 'cover' }} alt="Header Banner" />
            <div className="carousel-banner-offer rounded-pill bg-primary d-flex align-items-center p-2">
              <h4 className="text-white">Get Any <span className="text-dark">Offer</span></h4>
              <i className="fas fa-chevron-right fa-2x text-secondary ms-2"></i>
            </div>
            <div className="carousel-banner rounded">
              <p className="text-white fs-4 mb-3">Free Delivery For You</p>
              <h2 className="text-secondary display-5 mb-4">On Your First Order</h2>
              <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Shop Now</a>
            </div>
          </div>
        </WowAnimation>
      </div>
    </div>
  );
};

export default HeroCarousel;