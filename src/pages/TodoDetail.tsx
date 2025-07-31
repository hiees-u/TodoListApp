// src/components/TodoDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/Store';

const TodoDetail = () => {
  const { id } = useParams();
  const todoId = Number(id);
  const todo = useSelector((state: RootState) =>
    state.todo.todos.find((t) => t.id === todoId)
  );

  if (!todo) return <div>Todo not found</div>;

  return (
    <div>
      <h2>Todo Detail</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Status:</strong> {todo.completed ? '✅ Done' : '❌ Not done'}</p>
      {!todo.completed && <p><button>COMPLETE ✅</button></p>}
      <Link to="/">← Back to list</Link>
    </div>
  );
};

export default TodoDetail;
