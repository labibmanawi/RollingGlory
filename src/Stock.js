import React from 'react';

const Stock = ({ stock }) => {
  let text;
  let color;

  if (stock > 5) {
    text = 'In Stock';
    color = 'blue';
  } else if (stock === 0) {
    text = 'Sold Out';
    color = 'red';
  } else {
    text = 'Stock < 5';
    color = 'red';
  }

  return <span style={{ color }}>{text}</span>;
};


export default Stock;