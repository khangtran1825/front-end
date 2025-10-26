import React from 'react';
import WowAnimation from '../../common/Animation/WowAnimation';

const ProductOffer = () => {
  const offers = [
    {
      category: 'Camera',
      title: 'Smart Camera',
      discount: '40%',
      image: 'img/product-1.png',
      delay: 0.2,
      animation: 'fadeInLeft'
    },
    {
      category: 'Whatches',
      title: 'Smart Whatch',
      discount: '20%',
      image: 'img/product-2.png',
      delay: 0.3,
      animation: 'fadeInRight'
    }
  ];

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row g-4">
          {offers.map((offer, index) => (
            <WowAnimation
              key={index}
              animationClass={offer.animation}
              delay={offer.delay}
              className="col-lg-6"
            >
              <a href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
                <div>
                  <p className="text-muted mb-3">Find The Best {offer.category} for You!</p>
                  <h3 className="text-primary">{offer.title}</h3>
                  <h1 className="display-3 text-secondary mb-0">
                    {offer.discount} <span className="text-primary fw-normal">Off</span>
                  </h1>
                </div>
                <img src={`/${offer.image}`} className="img-fluid" alt={offer.title} style={{ maxWidth: '150px' }} />
              </a>
            </WowAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOffer;