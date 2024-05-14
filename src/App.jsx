import Divider from './components/elements/Divider';
import { useEffect, useMemo } from 'react';
import TodoItem from './components/utils/todo/TodoItem';
import Actions from './components/utils/Actions';
import Filters from './components/utils/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, initTodo, toggleTodo } from './store/todos/actions';

function App() {
  const { todos, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Fetching mock data to see todos on initial view
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('./data/mock.json');
        const data = await response.json();

        dispatch(initTodo(data));
      } catch (error) {
        console.error('Error:: ', error);
      }
    })();
  }, []);

  // Filtring the todos list
  const getTodos = useMemo(() => {
    if (!filter.enable) return todos;

    const searchKey = filter.search.toLowerCase();
    let filteredTodos = todos;

    // Filter by status if a specific status is selected
    if (filter.status) {
      filteredTodos = filteredTodos.filter(
        (todo) => todo.status === filter.status
      );
    }

    // Filter by search key in title or description
    filteredTodos = filteredTodos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(searchKey) ||
        todo.description.toLowerCase().includes(searchKey)
    );

    return filteredTodos;
  }, [todos, filter]);

  return (
    <div className="container space-y-6">
      {/* Actions tab: Filter and Add Todo buttons */}
      <Actions />

      {/* Filter tab will show on `enable: true` */}
      {filter.enable && <Filters />}

      <Divider />

      {/* Filtered todos list */}
      <div className="space-y-6">
        {getTodos.map((todo, idx) => (
          <TodoItem
            key={idx}
            {...todo}
            onChange={() => dispatch(toggleTodo(idx))}
            onDelete={() => dispatch(deleteTodo(idx))}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
