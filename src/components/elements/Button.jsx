import React from 'react';

export default function Button(props) {
  const { icon, children, className = '', ...otherProps } = props;
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-opacity-80 transition-all disabled:cursor-not-allowed ${className}`}
      {...otherProps}
    >
      {icon}
      {children}
    </button>
  );
}
