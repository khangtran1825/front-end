// src/assets/components/home/ProductList/ProductList.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import WowAnimation from '../../common/Animation/WowAnimation';
import ProductMiniCard from './ProductMiniCard';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductList = () => {
  // Dữ liệu sản phẩm (Giữ nguyên)
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
    // *** Thêm class "pb-lg-5" để tăng padding bottom trên màn hình lớn ***
    <div className="container-fluid products productList overflow-hidden pb-lg-5">
      <div className="container products-mini py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
         {/* Phần tiêu đề */}
          <WowAnimation animationClass="fadeInUp" delay={0.1}>
            <h4 className="text-primary border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Products
            </h4>
          </WowAnimation>
          <WowAnimation animationClass="fadeInUp" delay={0.3}>
            <h1 className="mb-0 display-3">
              All Product Items
            </h1>
           </WowAnimation>
        </div>

        {/* Swiper Component */}
        {allProducts.length > 0 ? (
          // *** Thêm position-relative cho WowAnimation container ***
          <WowAnimation className='product-list-container position-relative' animationClass="fadeInUp" delay={0.5}>
            <Swiper
              modules={[Navigation, Autoplay]}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 }, // Tăng spaceBetween
                768: { slidesPerView: 2, spaceBetween: 25 }, // Tăng spaceBetween
                992: { slidesPerView: 3, spaceBetween: 30 }, // Tăng spaceBetween
              }}
              loop={true}
              autoplay={{ delay: 5000 }}
              navigation={{
                nextEl: '.productList-next',
                prevEl: '.productList-prev',
              }}
              className="productList-carousel pt-4"
              // *** Bỏ paddingBottom inline style ở đây ***
            >
              {allProducts.map((product) => (
                // *** Thêm class "h-100" cho SwiperSlide ***
                <SwiperSlide key={product.id} className="h-100" style={{ minHeight: '200px' }}> {/* Đặt minHeight nếu cần */}
                  {/* *** Thêm class "h-100" cho ProductMiniCard *** */}
                  <ProductMiniCard product={product} className="h-100" />
                </SwiperSlide>
              ))}

              {/* Navigation Buttons - Đặt bên ngoài Swiper nhưng bên trong WowAnimation container */}

            </Swiper>
            {/* *** Di chuyển nút ra ngoài Swiper *** */}
            <div className="swiper-button-prev productList-prev custom-swiper-button">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="swiper-button-next productList-next custom-swiper-button">
              <i className="fas fa-chevron-right"></i>
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