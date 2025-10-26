import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  const carouselItems = [
    {
      image: 'img/carousel-1.png',
      discount: '$400',
      title: 'On Selected Laptops & Desktop Or Smartphone',
      delay: '0.1s'
    },
    {
      image: 'img/carousel-2.png',
      discount: '$200',
      title: 'On Selected Laptops & Desktop Or Smartphone',
      delay: '0.1s'
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
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              el: '.swiper-pagination',
              clickable: true 
            }}
            className="header-carousel owl-carousel bg-light py-5"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="row g-0 header-carousel-item align-items-center">
                  <div className="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay={item.delay}>
                    <img src={item.image} className="img-fluid w-100" alt="Image" />
                  </div>
                  <div className="col-xl-6 carousel-content p-4">
                    <h4 className="text-uppercase fw-bold mb-4 wow fadeInRight" 
                        data-wow-delay="0.1s" 
                        style={{ letterSpacing: '3px' }}>
                      Save Up To A {item.discount}
                    </h4>
                    <h1 className="display-3 text-capitalize mb-4 wow fadeInRight" 
                        data-wow-delay="0.3s">
                      {item.title}
                    </h1>
                    <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">
                      Terms and Condition Apply
                    </p>
                    <a className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" 
                       data-wow-delay="0.7s" href="#">
                      Shop Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation */}
            <div className="swiper-button-prev">
              <i className="bi bi-arrow-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="bi bi-arrow-right"></i>
            </div>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>

        {/* Right banner giữ nguyên */}
        <div className="col-12 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay="0.1s">
          <div className="carousel-header-banner h-100">
            <img src="img/header-img.jpg" className="img-fluid w-100 h-100" 
                 style={{ objectFit: 'cover' }} alt="Image" />
            {/* ... rest of banner code ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;