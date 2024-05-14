import React, { useMemo } from 'react';
import { statusOptions } from '../../../config';

export default function Status({ type }) {
  const option = useMemo(() => {
    return statusOptions.find((option) => option.value === type) || {};
  }, [type]);

  return (
    <span
      className={`px-2 py-1 text-xs capitalize rounded-md ml-auto ${
        option.colorCode || ''
      }`}
    >
      {option.name}
    </span>
  );
}
