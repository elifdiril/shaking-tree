import './App.css';
import Apple from './components/Apple'
import Tree from './components/Tree'
import Basket from './components/Basket'
import React, { useState } from 'react';

function App() {
  const [shake, setShake] = useState(false); //Tree effect control
  const [fall, setFall] = useState(false); //Apple effect control
  const [totalAppleNumber, setTotalAppleNumber] = useState(0);

  const [apples, setApple] = useState([]); // Apples coordinates

  const animate = () => {
    setShake(true);
    setTimeout(() => setShake(false), 2000);

    setTimeout(() => setFall(true), 3000); // Fall apple after 3s
    setTimeout(() => setFall(false), 4000);

    let randomAppleCount = Math.floor(Math.random() * 4) + 1;

    for (let i = 0, arrBasket = apples; i < randomAppleCount; i++) {
      arrBasket.push({
        appleInBasketX: Math.floor(Math.random() * 5) + 100,
        appleInBasketY: Math.floor(Math.random() * 3) + 390
      })

      if (i === randomAppleCount - 1) {
        setApple(arrBasket)
      }
    } // set apples coordinates at random

    setTotalAppleNumber(totalAppleNumber + randomAppleCount);
  }

  return (
    <div className="row">
      <div className="col">
        <Tree classNameTree={shake ? "Tree-logo" : "Stand-still"} />
      </div>
      <div className="col">
        <Basket />
      </div>
      <div className="col">
        <button onClick={animate}> Shake the Tree </button>
      </div>
      <div className="col">
        <Apple classNameApple={fall ? "Fallen" : "In-Basket"}
          apples={apples}
        /></div>
    </div>
  );
}

export default App;
