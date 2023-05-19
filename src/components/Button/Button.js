import React, { children } from 'react';
import "./Button.css";

const Button = ({children, value,onSquareClick,isOperator}) => {
  return (
    <button className={`btn ${isOperator && 'operator'}`} onClick={()=>onSquareClick(value)}>
       {children? children : value}
    </button>
  )
}

export default Button