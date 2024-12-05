import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 
const BtnAnimation = () => {
  return (
    <div className="centerer">
      <div className="wrap">
        <Link className="btn-collision" to="/shop">Shop Now</Link>
      </div>
    </div>
  );
}

export default BtnAnimation;