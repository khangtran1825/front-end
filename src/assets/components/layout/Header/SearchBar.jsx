import React from 'react';

const SearchBar = () => {
  return (
    <div className="container-fluid px-5 py-4 d-none d-lg-block">
      <div className="row gx-0 align-items-center text-center">
        <div className="col-md-4 col-lg-3 text-center text-lg-start">
          <div className="d-inline-flex align-items-center">
            <a href="/" className="navbar-brand p-0">
              <h1 className="display-5 text-primary m-0">
                <i className="fas fa-shopping-bag text-secondary me-2"></i>Electro
              </h1>
            </a>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 text-center">
          <div className="position-relative ps-4">
            <div className="d-flex border rounded-pill">
              <input
                className="form-control border-0 rounded-pill w-100 py-3"
                type="text"
                placeholder="Search Looking For?"
              />
              <select className="form-select text-dark border-0 border-start rounded-0 p-3" style={{ width: '200px' }}>
                <option value="All Category">All Category</option>
                <option value="Category-1">Category 1</option>
                <option value="Category-2">Category 2</option>
                <option value="Category-3">Category 3</option>
                <option value="Category-4">Category 4</option>
              </select>
              <button type="button" className="btn btn-primary rounded-pill py-3 px-5" style={{ border: 0 }}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 text-center text-lg-end">
          <div className="d-inline-flex align-items-center">
            <a href="#" className="text-muted d-flex align-items-center justify-content-center me-3">
              <span className="rounded-circle btn-md-square border">
                <i className="fas fa-random"></i>
              </span>
            </a>
            <a href="#" className="text-muted d-flex align-items-center justify-content-center me-3">
              <span className="rounded-circle btn-md-square border">
                <i className="fas fa-heart"></i>
              </span>
            </a>
            <a href="#" className="text-muted d-flex align-items-center justify-content-center">
              <span className="rounded-circle btn-md-square border">
                <i className="fas fa-shopping-cart"></i>
              </span>
              <span className="text-dark ms-2">$0.00</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;