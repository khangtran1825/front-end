// src/assets/components/home/ProductList/ProductList.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import WowAnimation from '../../common/Animation/WowAnimation';
import ProductMiniCard from './ProductMiniCard';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductList = () => {
  const allProducts = [
    { id: 21, name: 'Product A', category: 'Category 1', image: 'img/product-1.png', price: '100.00', oldPrice: '120.00' },
    { id: 22, name: 'Product B', category: 'Category 2', image: 'img/product-2.png', price: '150.00', oldPrice: '180.00' },
    { id: 23, name: 'Product C', category: 'Category 1', image: 'img/product-3.png', price: '200.00', oldPrice: '250.00' },
    { id: 24, name: 'Product D', category: 'Category 3', image: 'img/product-4.png', price: '120.00', oldPrice: '140.00' },
    { id: 25, name: 'Product E', category: 'Category 2', image: 'img/product-5.png', price: '180.00', oldPrice: '200.00' },
    { id: 26, name: 'Product F', category: 'Category 1', image: 'img/product-6.png', price: '90.00', oldPrice: '110.00' },
    { id: 27, name: 'Product G', category: 'Category 3', image: 'img/product-7.png', price: '210.00', oldPrice: '240.00' },
    { id: 28, name: 'Product H', category: 'Category 2', image: 'img/product-8.png', price: '160.00', oldPrice: '190.00' },
  ];

  return (
    <div className="container-fluid products productList overflow-hidden pb-5">
      <div className="container products-mini py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <WowAnimation animationClass="fadeInUp" delay={0.1}>
            <h4 className="text-primary border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Products
            </h4>
          </WowAnimation>
          <WowAnimation animationClass="fadeInUp" delay={0.3}>
            <h1 className="mb-0 display-3">All Product Items</h1>
          </WowAnimation>
        </div>

        {allProducts.length > 0 ? (
          <WowAnimation animationClass="fadeInUp" delay={0.5}>
            <div className="position-relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 25 },
                  992: { slidesPerView: 3, spaceBetween: 30 },
                }}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                  nextEl: '.productList-next',
                  prevEl: '.productList-prev',
                }}
                className="productList-carousel"
              >
                {allProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductMiniCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="swiper-button-prev productList-prev">
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className="swiper-button-next productList-next">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </WowAnimation>
        ) : (
          <p className="text-center">Không có sản phẩm nào để hiển thị.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;