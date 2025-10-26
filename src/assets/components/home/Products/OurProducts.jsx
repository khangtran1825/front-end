import React, { useState } from 'react';
import ProductCard from './ProductCard';

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState('tab-1');

  const allProducts = [
    { id: 1, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-3.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'New' },
    { id: 2, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-4.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'Sale' },
    { id: 3, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-5.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 4, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-6.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'New' },
    { id: 5, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-7.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'Sale' },
    { id: 6, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-8.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 7, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-9.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'New' },
    { id: 8, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-10.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'Sale' }
  ];

  const newArrivals = [
    { id: 9, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-3.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'New' },
    { id: 10, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-4.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'New' },
    { id: 11, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-5.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'New' },
    { id: 12, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-6.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'New' }
  ];

  const featured = [
    { id: 13, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-9.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 14, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-10.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 15, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-11.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 16, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-12.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 }
  ];

  const topSelling = [
    { id: 17, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-14.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 18, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-15.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 19, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-17.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 20, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-16.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 }
  ];

  const tabs = [
    { id: 'tab-1', label: 'All Products', products: allProducts },
    { id: 'tab-2', label: 'New Arrivals', products: newArrivals },
    { id: 'tab-3', label: 'Featured', products: featured },
    { id: 'tab-4', label: 'Top Selling', products: topSelling }
  ];

  const delays = ['0.1s', '0.3s', '0.5s', '0.7s', '0.1s', '0.3s', '0.5s', '0.7s'];

  return (
    <div className="container-fluid product py-5">
      <div className="container py-5">
        <div className="tab-class">
          <div className="row g-4">
            <div className="col-lg-4 text-start wow fadeInLeft" data-wow-delay="0.1s">
              <h1>Our Products</h1>
            </div>
            <div className="col-lg-8 text-end wow fadeInRight" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                {tabs.map((tab) => (
                  <li key={tab.id} className="nav-item mb-4">
                    <button
                      className={`d-flex mx-2 py-2 bg-light rounded-pill ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                      style={{ border: 'none' }}
                    >
                      <span className="text-dark" style={{ width: '130px' }}>{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tab-content">
            {tabs.map((tab) => (
              <div key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''} p-0`}>
                <div className="row g-4">
                  {tab.products.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      delay={delays[index % delays.length]}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;