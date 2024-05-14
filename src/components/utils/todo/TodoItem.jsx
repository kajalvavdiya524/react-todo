import React, { useMemo } from 'react';
import Divider from '../../elements/Divider';
import Status from './Status';
import { status as statusType } from './../../../config';
import { TrashIcon } from '@heroicons/react/16/solid';
import Button from '../../elements/Button';

export default function TodoItem(props) {
  const {
    title,
    description = '',
    status,
    className = '',
    onChange,
    onDelete,
    ...otherProps
  } = props;

  // Check either status is done or not
  const isStatusDone = useMemo(() => status === statusType.DONE, [status]);

  return (
    <div
      className={`space-y-4 px-6 py-3 bg-white rounded-md border ${
        isStatusDone && 'opacity-70'
      } ${className}`}
      {...otherProps}
    >
      <div className="flex items-center gap-3">
        {/* Status update */}
        <input
          type="checkbox"
          className="cursor-pointer disabled:cursor-not-allowed"
          title="Mark as Done"
          checked={isStatusDone}
          onChange={onChange}
          disabled={isStatusDone}
        />
        <Divider type="vertical" />

        {/* Title */}
        <p className={`font-medium ${isStatusDone && 'line-through'}`}>
          {title}
        </p>

        {/* Status */}
        <Status type={status} />
      </div>

      {/* Description */}
      <div className="flex justify-between gap-3">
        <p className={`text-gray-500 text-sm ${!description && 'italic'}`}>
          {description || 'No description found!'}
        </p>

        <Button
          onClick={onDelete}
          icon={<TrashIcon className="w-5 h-5" />}
          className="text-red-500 !p-0"
        />
      </div>
    </div>
  );
}
