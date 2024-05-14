import React, { useState } from 'react';
import Button from '../elements/Button';
import { AdjustmentsHorizontalIcon, PlusIcon } from '@heroicons/react/16/solid';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../store/todos/actions';
import AddTodoModal from './todo/AddTodoModal';

export default function Actions() {
  const { filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        {/* Toggle filter */}
        <Button
          icon={<AdjustmentsHorizontalIcon className="w-4 h-4" />}
          onClick={() => dispatch(updateFilter({ enable: !filter.enable }))}
          className="bg-gray-200"
        >
          <span>Filter</span>
        </Button>

        {/* Add todo */}
        <Button
          icon={<PlusIcon className="w-4 h-4" />}
          className="bg-blue-500 text-white"
          onClick={() => setOpen(true)}
        >
          <span>Add Todo</span>
        </Button>
      </div>

      <AddTodoModal open={open} setOpen={setOpen} />
    </>
  );
}
