import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// استخدام React.lazy لتحميل المكونات بشكل غير متزامن
const Layout = React.lazy(() => import('../Layout/Layout'));
const Home = React.lazy(() => import('../pages/Home'));
const AboutUs = React.lazy(() => import('../pages/AboutUs'));
const Cart = React.lazy(() => import('../pages/Cart'));
const Shope = React.lazy(() => import('../pages/Shope'));
const CheackOut = React.lazy(() => import('../pages/CheackOut'));
const ProductDeitails = React.lazy(() => import('../pages/ProductDeitails'));
const PrivacyPolicy = React.lazy(() => import('../pages/PrivacyPolicy'));
const PhotoAlbum = React.lazy(() => import('../pages/PhotoAlbum'));

// استيراد مكون LoadingComponent
import LoadingComponent from '../components/Loading/LoadingComponent';
import Error from '../pages/Error';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "aboutus",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path:  "shop/:category", 
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Shope />
          </Suspense>
        ),
      },
      {
        path: "chaekout",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <CheackOut />
          </Suspense>
        ),
      },
      {
        path: "productdetails/:productId",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <ProductDeitails />
          </Suspense>
        ),
      },
      {
        path: "PrivacyPolicy",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "photoalbum",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <PhotoAlbum />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
}

export default AppRouter;
