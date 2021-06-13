import React, { useState, useEffect } from 'react';
import AppleLogo from '../images/apple.svg';
import '../styles/Apple.css';

const Apple = (props) => {
  const apples = props.apples;
  const [inTimeout, setInTimeout] = useState(false);
  const [inTimeoutForBasketApple, setInTimeoutForBasketApple] = useState(false); // after falls end

  useEffect(() => {
    setInTimeout(true);
    setTimeout(() => {
      setInTimeout(false);
    }, 5000);
    setTimeout(() => {
      setInTimeoutForBasketApple(true);
    }, 6000);

  }, []);

  return (
    <div>
      {props.classNameApple === "In-Basket" && inTimeoutForBasketApple && apples.map((item, index) =>
        <img src={AppleLogo} className={props.classNameApple}
          id={props.classNameApple} alt="logo" key={index} style={{
            top: item.fallingAppleX + "%",
            left: item.fallingAppleY + "%"
          }}
        />)}
      {props.classNameApple === "Fallen" && inTimeout && apples.map((item, index) =>
        <img src={AppleLogo} className={"Fallen"}
          id={"Fallen"} alt="logo" key={index}
        />)}
    </div>
  );
}
export default Apple;
