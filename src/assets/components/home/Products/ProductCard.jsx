import React from 'react';

const ProductCard = ({ product }) => {
  // Kiểm tra xem product có tồn tại không trước khi truy cập thuộc tính
  if (!product) {
    return null; // Hoặc hiển thị một placeholder/thông báo lỗi
  }

  return (
    <div className="product-item rounded">
      <div className="product-item-inner border rounded">
        <div className="product-item-inner-item">
          {/* Sửa lại đường dẫn ảnh */}
          <img src={`/${product.image}`} className="img-fluid w-100 rounded-top" alt={product.name || "Product image"} />
          {product.badge && (
            <div className={`product-${product.badge.toLowerCase()} position-absolute top-0 end-0 m-2 px-2 py-1 rounded-pill ${product.badge.toLowerCase() === 'sale' ? 'bg-danger text-white' : 'bg-primary text-white'}`} style={{fontSize: '0.8em'}}>
              {product.badge}
            </div>
          )}
          <div className="product-details">
            <a href="#"><i className="fa fa-eye fa-1x"></i></a>
          </div>
        </div>
        <div className="text-center rounded-bottom p-4">
          <a href="#" className="d-block mb-2">{product.category}</a>
          <a href="#" className="d-block h4">{product.name}</a>
          {/* Kiểm tra oldPrice trước khi hiển thị */}
          {product.oldPrice && <del className="me-2 fs-5">${product.oldPrice}</del>}
          <span className="text-primary fs-5">${product.price}</span>
        </div>
      </div>
      <div className="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
        <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4">
          <i className="fas fa-shopping-cart me-2"></i>Add To Cart
        </a>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            {/* Đảm bảo product.rating là số */}
            {[...Array(5)].map((_, i) => (
              <i key={i} className={`fas fa-star ${i < (product.rating || 0) ? 'text-primary' : 'text-muted'}`}></i>
            ))}
          </div>
          <div className="d-flex">
            <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3">
              <span className="rounded-circle btn-sm-square border">
                <i className="fas fa-random"></i>
              </span>
            </a>
            <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0">
              <span className="rounded-circle btn-sm-square border">
                <i className="fas fa-heart"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;