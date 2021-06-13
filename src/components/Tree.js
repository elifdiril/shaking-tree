import React from 'react';
import TreeLogo from '../images/tree.svg';
import '../styles/Tree.css';

const Tree = (props) => {
  return (
    <img src={TreeLogo} className={props.classNameTree}
      id={props.classNameTree} alt="logo" />
  );
}
export default Tree;
