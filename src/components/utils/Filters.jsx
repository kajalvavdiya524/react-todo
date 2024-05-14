import React, { useCallback } from 'react';
import Input from '../elements/Input';
import Select from '../elements/Select';
import { statusOptions } from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../store/todos/actions';

const filterstatusOptions = [
  {
    name: 'Select Status',
    value: '',
  },
  ...statusOptions,
];

export default function Filters() {
  const { filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Update state of filters
  const handleSearch = useCallback(
    (event) => {
      const { name, value } = event.target;

      dispatch(
        updateFilter({
          [name]: value,
        })
      );
    },
    [filter]
  );

  return (
    <div className="flex items-center gap-6">
      <Input
        placeholder="Search..."
        value={filter.search}
        name="search"
        onChange={handleSearch}
      />
      <Select
        options={filterstatusOptions}
        value={filter.status}
        name="status"
        onChange={handleSearch}
      />
    </div>
  );
}
