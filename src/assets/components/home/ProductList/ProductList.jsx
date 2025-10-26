import React, { useEffect } from 'react';
import ProductMiniCard from './ProductMiniCard';

const ProductList = () => {
  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.productList-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        dots: true
      });

      window.$('.productImg-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        dots: false
      });
    }
  }, []);

  const productGroups = [
    [
      { id: 1, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-4.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 2, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-4.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 3, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-6.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 4, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-7.png', price: '1,050.00', oldPrice: '1,250.00' }
    ],
    [
      { id: 5, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-8.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 6, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-9.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 7, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-10.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 8, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-11.png', price: '1,050.00', oldPrice: '1,250.00' }
    ],
    [
      { id: 9, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-12.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 10, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-13.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 11, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-14.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 12, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-15.png', price: '1,050.00', oldPrice: '1,250.00' }
    ],
    [
      { id: 13, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-16.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 14, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-17.png', price: '1,050.00', oldPrice: '1,250.00' },
      { id: 15, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-3.png', price: '1,050.00', oldPrice: '1,250.00' }
    ]
  ];

  return (
    <div className="container-fluid products productList overflow-hidden">
      <div className="container products-mini py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-primary border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp" data-wow-delay="0.1s">
            Products
          </h4>
          <h1 className="mb-0 display-3 wow fadeInUp" data-wow-delay="0.3s">All Product Items</h1>
        </div>
        <div className="productList-carousel owl-carousel pt-4 wow fadeInUp" data-wow-delay="0.3s">
          {productGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="productImg-carousel owl-carousel productList-item">
              {group.map((product) => (
                <ProductMiniCard key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;