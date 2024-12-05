import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './utils/i18/i18n';


import store from './store/store';
import AppRouter from './Routes/AppRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

import i18n from './utils/i18/i18n'; 


function App() {
  const [toastConfig, setToastConfig] = useState({
    position: i18n.language === 'en' ? 'top-left' : 'top-right',
    rtl: i18n.language !== 'en',
  });

  useEffect(() => {
    const languageChangedHandler = (lng) => {
      setToastConfig({
        position: lng === 'en' ? 'top-left' : 'top-right',
        rtl: lng !== 'en',
      });
    };

    i18n.on('languageChanged', languageChangedHandler);


    return () => {
      i18n.off('languageChanged', languageChangedHandler);
    };
  }, []); 


  return (
    <StrictMode>
      <Provider store={store}>
        <ToastContainer
          position={toastConfig.position}
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
          rtl={toastConfig.rtl}
          theme="dark"
          draggable
        />
        <AppRouter />
      </Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
