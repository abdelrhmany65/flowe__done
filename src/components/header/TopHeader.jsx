import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import headerstyle from "./header.module.css";
import logo from "../../assets/Logo/logo nabtaty-03.png";
import cart from "../../assets/images/bi_cart.svg";
import heart from "../../assets/images/heart.svg";
import globe from "../../assets/images/globe2.svg";
import { useTranslation } from 'react-i18next';

const TopHeader = () => {
  const { i18n } = useTranslation();
  const cartItems = useSelector((state) => state.cart.items); 
  const cartCount = cartItems.length;

  const favoritesItems = useSelector((state) => state.favorites.items); 
  const favoritesCount = favoritesItems.length;

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang); // تغيير اللغة
  };

  return (
    <div className={headerstyle.topheader}>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          {/* الشعار */}
          <div className="col-auto">
            <Link to="/">
              <img src={logo} alt="logo" className={headerstyle.custom__logo} />
            </Link>
          </div>

          {/* شريط البحث */}
          <div className="col-auto">
            <div className={`${headerstyle.searchLg} search-lg d-none d-lg-flex`}>
              <form className={`${headerstyle.serch__inpo} d-flex`} role="search">
                <input className="form-control m-0" type="search" placeholder="Search" aria-label="Search" />
                <button className={headerstyle.btn__searh} type="submit">Search</button>
              </form>
            </div>
          </div>

          
          <div className={`${headerstyle.__botom} col-auto d-flex align-items-center`}>
            
            <div className={`${headerstyle.cart__icon} fs-5 btn-primary position-relative px-3`}>
              <Link to="/cart">
                <img src={cart} alt="cart icon" className={headerstyle.icon} />
                <span className={`${headerstyle.count} position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark`}>
                  {cartCount}
                </span>
              </Link>
            </div>
            
            <div className={`${headerstyle.cart__icon} fs-5 btn-primary position-relative px-3`}>
              <img src={heart} alt="heart icon" className={headerstyle.icon__heart} />
              <span className={`${headerstyle.count} position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark`}>
                {favoritesCount}
              </span>
            </div>

            <div className={`d-flex justify-content-center d-lg-none`}>
              <img src={globe} alt="globe icon" className={headerstyle.globe__mobile} />
              <select className='lung ms-2' onChange={handleLanguageChange} value={i18n.language}>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
