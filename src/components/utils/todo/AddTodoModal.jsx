import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../elements/Button';
import { PlusIcon, XMarkIcon } from '@heroicons/react/16/solid';
import Input from '../../elements/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../../store/todos/actions';

const initialForms = {
  title: '',
  description: '',
};

export default function AddTodoModal(props) {
  const { open, setOpen } = props;

  const {} = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [form, setForm] = useState(initialForms);

  const handleInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setForm((prev) => ({
        ...prev,
        [name]: value.trim(),
      }));
    },
    [form]
  );

  const handleFormSave = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(addTodo(form));
      setOpen(false);

      setForm(initialForms);
    },
    [form]
  );

  if (!open) return null;
  return createPortal(
    <div
      className={`fixed w-full min-h-screen top-0 left-0 bg-black/30 z-99 mt-0 flex items-center justify-center p-6`}
    >
      <div className="max-w-screen-sm w-full bg-white rounded-md border">
        <div className="px-6 py-3 border-b flex items-center justify-between">
          <h3>Add Todo</h3>
          <Button
            onClick={() => setOpen(false)}
            icon={<XMarkIcon className="w-6 h-6" />}
            className="!p-0"
          />
        </div>
        <form onSubmit={handleFormSave} className="p-6 space-y-3">
          <div className="space-y-2">
            <label>Title</label>
            <Input
              autoFocus
              className="!bg-gray-50"
              placeholder="e.g. Create a Repository"
              value={form.title}
              name="title"
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label>
              Description{' '}
              <span className="text-gray-500 text-sm">(optional)</span>
            </label>
            <textarea
              className="form-control bg-gray-50"
              value={form.description}
              name="description"
              rows={6}
              placeholder="Write a brief description of your task here"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <Button
            className="bg-blue-500 text-white disabled:bg-gray-500 ml-auto"
            disabled={!form.title.trim()}
          >
            <PlusIcon className="w-4 h-4" />
            <span>Add</span>
          </Button>
        </form>
      </div>
    </div>,
    document.body
  );
}
