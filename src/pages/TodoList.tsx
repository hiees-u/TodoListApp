// src/components/TodoList.tsx
import { useSelector } from 'react-redux';
import type { RootState } from '../store/Store';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} {todo.completed ? '✅' : '❌'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
