import React from 'react';

export default function Input(props) {
  const { className = '', ...otherProps } = props;
  return (
    <input className={`form-control bg-white ${className}`} {...otherProps} />
  );
}
