import React, { useState } from 'react';
import headerstyle from "./header.module.css";
import TopHeader from './TopHeader';
import globe from "../../assets/images/globe2.svg";
import { NavLink } from 'react-router-dom';
import logo from "../../assets/Logo/logo nabtaty-03.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const nav__link = [
  { category: 'Indoor Plants', display: 'Indoor Plants' },
  { category: 'Flowering Plants', display: 'Flowering Plants' },
  { category: 'Cacti and Succulents', display: 'Cacti and Succulents' },
  { category: 'Hanging plants', display: 'Hanging Plants' },
  { category: 'Indoor Tree Plants', display: 'Indoor Tree Plants' },
  { category: 'Gifts', display: 'Gifts' },
  { category: 'Subscription', display: 'Subscription' },
  { category: 'Planters & Accessories', display: 'Planters & Accessories' },
];


const Header = ({ setSelectedCategory }) => {
  const { t, i18n } = useTranslation();
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false); // State for offcanvas visibility

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value); // تغيير اللغة
  };

  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr'; // تحديد الاتجاه


  // Function to handle closing the offcanvas
  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
    // Manually triggering the close for offcanvas
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    offcanvas.hide();
  };

  return (
    <header className={`fixed-top ${direction === 'rtl' ? headerstyle.rtl : headerstyle.ltr} bg-white`}>
      <TopHeader />
      <nav className={`${headerstyle.navbar__geen} navbar navbar-expand-lg`}>
        <div className="container">
          {/* تعديل مكان زر navbar-toggler بناءً على اللغة */}
          <button 
            className={`navbar-toggler bg-light ${direction === 'ltr' ? 'ms-auto' : 'me-auto'}`} 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={() => setIsOffcanvasOpen(true)} // Open offcanvas
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {nav__link.map(({ category, display }) => (
              <li key={category} className={`${headerstyle.nav__item} nav-item px-3 fw-bold`}>
                <NavLink
                  to={`/shop/${category.replace(/\s+/g, '-').toLowerCase()}`}
                  className={({ isActive }) =>
                    `${isActive ? 'nav__active' : ''} ${headerstyle.textStyle}`
                  }
                  onClick={() => setSelectedCategory(category)} // تحديث الفلترة عند النقر
                >
                  {t(display)}
                </NavLink>
              </li>
            ))}
          </ul>

            <div className={`${headerstyle.lngua} d-flex justify-content-center`}>
              <img src={globe} alt="globe icon" className={headerstyle.globe} />
              <select className='lung' onChange={handleLanguageChange}>
                <option value="en">{t('English')}</option>
                <option value="ar">{t('Arabic')}</option>
              </select>
            </div>
          </div>

          {/* Offcanvas for mobile */}
          <div 
            className={`offcanvas ${direction === 'rtl' ? 'offcanvas-end' : 'offcanvas-start'} d-lg-none`} 
            tabIndex="-1" 
            id="offcanvasNavbar" 
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link to="/">
                <img src={logo} alt="logo" className={headerstyle.custom__logo} />
              </Link>
              {/* زر الإغلاق مع التعديل في مكانه بناءً على اللغة */}
              <button 
                type="button" 
                className="btn-close text-reset" 
                data-bs-dismiss="offcanvas" 
                aria-label="Close" 
                style={{ marginLeft: direction === 'ltr' ? 'auto' : '0', marginRight: direction === 'rtl' ? 'auto' : '0' }}
                onClick={closeOffcanvas} // Close offcanvas on button click
              ></button>
            </div>
            <div className="offcanvas-body">


            <ul className="navbar-nav mx-auto p-0">
              {nav__link.map(({ category, display }) => (
                <li key={category} className={`${headerstyle.Offcanvas__item} nav-item px-3 fw-bold`}>
                  <NavLink
                    to={`/shop/${category.replace(/\s+/g, '-').toLowerCase()}`}
                    className={({ isActive }) => `${isActive ? 'nav__active' : ''} ${headerstyle.Offcanvas__textStyle}`}
                    // onClick={closeOffcanvas}
                    onClick={() => setSelectedCategory(category)} 
                  >
                    {t(display)}
                  </NavLink>
                </li>
              ))}
            </ul>

              <div className="col-auto">
                <div className={`${headerstyle.searchLg} search-lg`}>
                  <form className={`${headerstyle.serch__inpo} d-flex w-100`} role="search">
                    <input className="form-control m-0" type="search" placeholder={t('searchPlaceholder')} aria-label="Search" />
                    <button className={headerstyle.btn__searh} type="submit">{t('Search')}</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
