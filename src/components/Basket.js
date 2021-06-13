import React from 'react';
import BasketLogo from '../images/basket.svg';
import '../styles/Basket.css';

const Basket = () => {
  return (
    <img src={BasketLogo} className="Basket-logo" id="Basket-logo" alt="logo" />
  );
}
export default Basket;
