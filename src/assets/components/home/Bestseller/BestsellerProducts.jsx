import React from 'react';
import ProductMiniCard from '../ProductList/ProductMiniCard';
import WowAnimation from '../../common/Animation/WowAnimation';

const BestsellerProducts = () => {
  const products = [
    { id: 1, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-3.png', price: '1,050.00', oldPrice: '1,250.00' },
    { id: 2, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-4.png', price: '1,050.00', oldPrice: '1,250.00' },
    { id: 3, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-5.png', price: '1,050.00', oldPrice: '1,250.00' },
    { id: 4, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-6.png', price: '1,050.00', oldPrice: '1,250.00' },
    { id: 5, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-7.png', price: '1,050.00', oldPrice: '1,250.00' },
    { id: 6, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-11.png', price: '1,050.00', oldPrice: '1,250.00' }
  ];

  const delays = [0.1, 0.3, 0.5, 0.1, 0.3, 0.5]; // Delay values in seconds

  return (
    <div className="container-fluid products pb-5">
      <div className="container products-mini py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '700px' }}>
          <WowAnimation animationClass="fadeInUp" delay={0.1}>
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Bestseller Products
            </h4>
          </WowAnimation>
          <WowAnimation animationClass="fadeInUp" delay={0.2}>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, asperiores ducimus sint quos tempore officia similique quia? Libero, pariatur consectetur?
            </p>
          </WowAnimation>
        </div>
        <div className="row g-4">
          {products.map((product, index) => (
            <WowAnimation
              key={product.id}
              animationClass="fadeInUp"
              delay={delays[index]}
              className="col-md-6 col-lg-6 col-xl-4"
            >
              <ProductMiniCard product={product} />
            </WowAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestsellerProducts;