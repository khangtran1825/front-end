import React from 'react';

const Copyright = () => {
  return (
    <div className="container-fluid copyright py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-md-0">
            <span className="text-white">
              <a href="#" className="border-bottom text-white">
                <i className="fas fa-copyright text-light me-2"></i>Your Site Name
              </a>
              , All right reserved.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end text-white">
            Designed By <a className="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a>.
            Distributed By <a className="border-bottom text-white" href="https://themewagon.com">ThemeWagon</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;