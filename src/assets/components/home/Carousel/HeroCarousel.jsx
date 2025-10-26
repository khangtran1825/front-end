import React, { useEffect } from 'react';

const HeroCarousel = () => {
  useEffect(() => {
    // Initialize Owl Carousel
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.header-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        dots: true
      });
    }
  }, []);

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
          <div className="header-carousel owl-carousel bg-light py-5">
            {carouselItems.map((item, index) => (
              <div key={index} className="row g-0 header-carousel-item align-items-center">
                <div className="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay={item.delay}>
                  <img src={item.image} className="img-fluid w-100" alt="Image" />
                </div>
                <div className="col-xl-6 carousel-content p-4">
                  <h4 className="text-uppercase fw-bold mb-4 wow fadeInRight" data-wow-delay="0.1s" style={{ letterSpacing: '3px' }}>
                    Save Up To A {item.discount}
                  </h4>
                  <h1 className="display-3 text-capitalize mb-4 wow fadeInRight" data-wow-delay="0.3s">
                    {item.title}
                  </h1>
                  <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">Terms and Condition Apply</p>
                  <a className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s" href="#">
                    Shop Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay="0.1s">
          <div className="carousel-header-banner h-100">
            <img src="img/header-img.jpg" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} alt="Image" />
            <div className="carousel-banner-offer">
              <p className="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">Save $48.00</p>
              <p className="text-primary fs-5 fw-bold mb-0">Special Offer</p>
            </div>
            <div className="carousel-banner">
              <div className="carousel-banner-content text-center p-4">
                <a href="#" className="d-block mb-2">SmartPhone</a>
                <a href="#" className="d-block text-white fs-3">Apple iPad Mini <br /> G2356</a>
                <del className="me-2 text-white fs-5">$1,250.00</del>
                <span className="text-primary fs-5">$1,050.00</span>
              </div>
              <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
                <i className="fas fa-shopping-cart me-2"></i>Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;