import React from "react";

export default function Select(props) {
  const { className = "", options = [], ...otherProps } = props;
  return (
    <select
      className={`px-4 py-2 text-sm bg-white rounded-md border ${className}`}
      {...otherProps}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
