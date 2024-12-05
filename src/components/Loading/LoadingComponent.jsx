import React, { useState } from 'react';
import { RingLoader } from 'react-spinners';

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div className="loading-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {loading ? (
        <RingLoader color="#36d7b7" loading={loading} size={150} />   
      ) : (
        <div>تم التحميل!</div>
      )}
    </div>
  );
};

export default LoadingComponent;
