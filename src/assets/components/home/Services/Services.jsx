import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-sync-alt',
      title: 'Free Return',
      description: '30 days money back guarantee!',
      delay: '0.1s'
    },
    {
      icon: 'fab fa-telegram-plane',
      title: 'Free Shipping',
      description: 'Free shipping on all order',
      delay: '0.2s'
    },
    {
      icon: 'fas fa-life-ring',
      title: 'Support 24/7',
      description: 'We support online 24 hrs a day',
      delay: '0.3s'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Receive Gift Card',
      description: 'Recieve gift all over oder $50',
      delay: '0.4s'
    },
    {
      icon: 'fas fa-lock',
      title: 'Secure Payment',
      description: 'We Value Your Security',
      delay: '0.5s'
    },
    {
      icon: 'fas fa-blog',
      title: 'Online Service',
      description: 'Free return products in 30 days',
      delay: '0.6s'
    }
  ];

  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        {services.map((service, index) => (
          <div
            key={index}
            className={`col-6 col-md-4 col-lg-2 ${index === 0 ? 'border-start' : ''} border-end wow fadeInUp`}
            data-wow-delay={service.delay}
          >
            <div className="p-4">
              <div className="d-flex align-items-center">
                <i className={`${service.icon} fa-2x text-primary`}></i>
                <div className="ms-4">
                  <h6 className="text-uppercase mb-2">{service.title}</h6>
                  <p className="mb-0">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;