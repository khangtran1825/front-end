import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import WowAnimation from '../../common/Animation/WowAnimation';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductList = () => {
  const productGroups = [
    // ... data giữ nguyên
  ];

  return (
    <div className="container-fluid products productList overflow-hidden">
      <div className="container products-mini py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-primary border-bottom border-primary border-2 d-inline-block p-2 title-border-radius" animationClass="fadeInUp" delay={0.1}>
            Products
          </h4>
          <h1 className="mb-0 display-3" animationClass="fadeInUp" delay={0.3}>
            All Product Items
          </h1>
        </div>

        {/* Outer Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: '.productList-next',
            prevEl: '.productList-prev',
          }}
          className="productList-carousel owl-carousel pt-4"
          animationClass="fadeInUp"
          style={{ height: '215px' }}
        >
          {productGroups.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              {/* Inner Swiper */}
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: `.productImg-next-${groupIndex}`,
                  prevEl: `.productImg-prev-${groupIndex}`,
                }}
                className="productImg-carousel productList-item"
              >
                {group.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductMiniCard product={product} />
                  </SwiperSlide>
                ))}
                
                {/* Inner Navigation */}
                <div className={`swiper-button-prev productImg-prev-${groupIndex}`}>
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className={`swiper-button-next productImg-next-${groupIndex}`}>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </Swiper>
            </SwiperSlide>
          ))}

          {/* Outer Navigation */}
          <div className="swiper-button-prev productList-prev">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="swiper-button-next productList-next">
            <i className="fas fa-chevron-right"></i>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductList;