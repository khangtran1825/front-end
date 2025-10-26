// src/assets/components/home/Products/OurProducts.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Đảm bảo đường dẫn import đúng
import WowAnimation from '../../common/Animation/WowAnimation'; // Đảm bảo đường dẫn import đúng

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState('tab-1');

  // Dữ liệu sản phẩm (Điền đầy đủ dữ liệu cho các mảng còn lại nếu cần)
  const allProducts = [
    { id: 1, name: 'Apple iPad Mini G2356', category: 'SmartPhone', image: 'img/product-3.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'New' },
    { id: 2, name: 'Camera Canon EOS 5D', category: 'Camera', image: 'img/product-4.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'Sale' },
    { id: 3, name: 'Lens Sigma 24-70mm', category: 'Lens', image: 'img/product-5.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 4, name: 'Camera Yi Home', category: 'Security Cam', image: 'img/product-6.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'New' },
    { id: 5, name: 'Camera Polaroid', category: 'Camera', image: 'img/product-7.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'Sale' },
    { id: 6, name: 'Headphone Sony', category: 'Headphone', image: 'img/product-8.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 7, name: 'Desktop Set Apple', category: 'Desktop', image: 'img/product-9.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'New' },
    { id: 8, name: 'iPhone Stack', category: 'SmartPhone', image: 'img/product-10.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4, badge: 'Sale' }
  ];

  const newArrivals = [ // Ví dụ dữ liệu
    { id: 9, name: 'New Arrival 1', category: 'Camera', image: 'img/product-3.png', price: '1,150.00', oldPrice: '1,350.00', rating: 5, badge: 'New' },
    { id: 10, name: 'New Arrival 2', category: 'Laptop', image: 'img/product-11.png', price: '950.00', oldPrice: '1,150.00', rating: 4, badge: 'New' },
    { id: 11, name: 'New Arrival 3', category: 'Watch', image: 'img/product-2.png', price: '350.00', oldPrice: '450.00', rating: 4, badge: 'New' },
    { id: 12, name: 'New Arrival 4', category: 'Headphone', image: 'img/product-8.png', price: '250.00', oldPrice: '350.00', rating: 5, badge: 'New' }
  ];

  const featured = [ // Ví dụ dữ liệu
    { id: 13, name: 'Featured Product 1', category: 'Desktop Set', image: 'img/product-9.png', price: '1,550.00', oldPrice: '1,850.00', rating: 5 },
    { id: 14, name: 'Featured Product 2', category: 'Smartphone', image: 'img/product-10.png', price: '850.00', oldPrice: '950.00', rating: 4 },
    { id: 15, name: 'Featured Product 3', category: 'Laptop', image: 'img/product-11.png', price: '1,050.00', oldPrice: '1,250.00', rating: 4 },
    { id: 16, name: 'Featured Product 4', category: 'Monitor', image: 'img/product-12.png', price: '450.00', oldPrice: '550.00', rating: 4 }
  ];

  const topSelling = [ // Ví dụ dữ liệu
    { id: 17, name: 'Top Selling 1', category: 'Drone', image: 'img/product-14.png', price: '1,950.00', oldPrice: '2,250.00', rating: 5 },
    { id: 18, name: 'Top Selling 2', category: 'Smartphone', image: 'img/product-15.png', price: '750.00', oldPrice: '850.00', rating: 4 },
    { id: 19, name: 'Top Selling 3', category: 'Smartphone Case', image: 'img/product-17.png', price: '50.00', oldPrice: '70.00', rating: 4 },
    { id: 20, name: 'Top Selling 4', category: 'Smartphone', image: 'img/product-16.png', price: '990.00', oldPrice: '1,190.00', rating: 5 }
  ];

  const tabs = [
    { id: 'tab-1', label: 'All Products', products: allProducts },
    { id: 'tab-2', label: 'New Arrivals', products: newArrivals },
    { id: 'tab-3', label: 'Featured', products: featured },
    { id: 'tab-4', label: 'Top Selling', products: topSelling }
  ];

  const delays = [0.1, 0.3, 0.5, 0.7, 0.1, 0.3, 0.5, 0.7]; // Delay values in seconds

  return (
    <div className="container-fluid product py-5"> 
      <div className="container py-5">
        <div className="tab-class">
          <div className="row g-4">
            <WowAnimation animationClass="fadeInLeft" delay={0.1} className="col-lg-4 text-start">
              <h1>Our Products</h1>
            </WowAnimation>
            <WowAnimation animationClass="fadeInRight" delay={0.1} className="col-lg-8 text-end">
              {/* Sửa lại cấu trúc Nav Pills */}
              <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                {tabs.map((tab) => (
                  <li key={tab.id} className="nav-item">
                    <button
                      className={`nav-link mx-2 py-2 rounded-pill ${activeTab === tab.id ? 'active' : 'bg-light'}`}
                      onClick={() => setActiveTab(tab.id)}
                      style={{ border: 'none', width: '130px' }}
                      type="button" // Thêm type="button"
                    >
                      <span className={`${activeTab === tab.id ? '' : 'text-dark'}`}>{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </WowAnimation>
          </div>
          <div className="tab-content">
            {tabs.map((tab) => (
              <div key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''} p-0`}>
                <div className="row g-4">
                  {/* Kiểm tra nếu tab.products tồn tại và là mảng */}
                  {Array.isArray(tab.products) && tab.products.map((product, index) => (
                    <WowAnimation
                      key={product.id}
                      animationClass="fadeInUp"
                      delay={delays[index % delays.length]}
                      className="col-md-6 col-lg-4 col-xl-3"
                    >
                      {/* Truyền product xuống ProductCard */}
                      <ProductCard product={product} />
                    </WowAnimation>
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