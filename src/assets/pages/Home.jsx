import React from 'react';
import Spinner from '../components/common/Spinner/Spinner';
import Topbar from '../components/layout/Header/Topbar';
import SearchBar from '../components/layout/Header/SearchBar';
import Navbar from '../components/layout/Navbar/Navbar';
import HeroCarousel from '../components/home/Carousel/HeroCarousel';
import Services from '../components/home/Services/Services';
import ProductOffer from '../components/home/ProductOffer/ProductOffer';
import OurProducts from '../components/home/Products/OurProducts';
import ProductBanner from '../components/home/ProductBanner/ProductBanner';
import ProductList from '../components/home/ProductList/ProductList';
import BestsellerProducts from '../components/home/Bestseller/BestsellerProducts';
import Footer from '../components/layout/Footer/Footer';
import Copyright from '../components/layout/Copyright/Copyright';
import BackToTop from '../components/common/BackToTop/BackToTop';
import '../styles/css/style.css';

const Home = () => {
  return (
    <>
      <Spinner />
      <Topbar />
      <SearchBar />
      <Navbar />
      <HeroCarousel />
      <Services />
      <ProductOffer />
      <OurProducts />
      <ProductBanner />
      <ProductList />
      <BestsellerProducts />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default Home;
