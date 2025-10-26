import React from 'react';

const Footer = () => {
  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      content: '123 Street New York.USA'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Mail Us',
      content: 'info@example.com'
    },
    {
      icon: 'fa fa-phone-alt',
      title: 'Telephone',
      content: '(+012) 3456 7890'
    },
    {
      icon: 'fab fa-firefox-browser',
      title: 'Yoursite@ex.com',
      content: '(+012) 3456 7890'
    }
  ];

  const customerService = [
    'Contact Us',
    'Returns',
    'Order History',
    'Site Map',
    'Testimonials',
    'My Account',
    'Unsubscribe Notification'
  ];

  const information = [
    'About Us',
    'Delivery infomation',
    'Privacy Policy',
    'Terms & Conditions',
    'Warranty',
    'FAQ',
    'Seller Login'
  ];

  const extras = [
    'Brands',
    'Gift Vouchers',
    'Affiliates',
    'Wishlist',
    'Order History',
    'Track Your Order',
    'Track Your Order'
  ];

  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-4 rounded mb-5" style={{ background: 'rgba(255, 255, 255, .03)' }}>
          {contactInfo.map((info, index) => (
            <div key={index} className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div
                  className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: '70px', height: '70px' }}
                >
                  <i className={`${info.icon} fa-2x text-primary`}></i>
                </div>
                <div>
                  <h4 className="text-white">{info.title}</h4>
                  <p className="mb-2">{info.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <div className="footer-item">
                <h4 className="text-primary mb-4">Newsletter</h4>
                <p className="mb-3">
                  Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                </p>
                <div className="position-relative mx-auto rounded-pill">
                  <input
                    className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Customer Service</h4>
              {customerService.map((item, index) => (
                <a key={index} href="#" className="">
                  <i className="fas fa-angle-right me-2"></i>{item}
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Information</h4>
              {information.map((item, index) => (
                <a key={index} href="#" className="">
                  <i className="fas fa-angle-right me-2"></i>{item}
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Extras</h4>
              {extras.map((item, index) => (
                <a key={index} href="#" className="">
                  <i className="fas fa-angle-right me-2"></i>{item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;