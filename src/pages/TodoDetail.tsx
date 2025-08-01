// src/components/TodoDetail.tsx
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/Store';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/TodoStore';


const TodoDetail = () => {
  const { id } = useParams();
  const todoId = Number(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todo = useSelector((state: RootState) =>
    state.todo.todos.find((t) => t.id === todoId)
  );

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  }

  const handleRemove = (id: number) => {
    const confirmed = window.confirm("Bạn có chắc muốn xoá?");
    if (confirmed) {
      dispatch(removeTodo(id));
      navigate('/');
    }
  }

  if (!todo) return <div>Todo not found</div>;

  return (
    <div>
      <h2>Todo Detail</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Status:</strong> {todo.completed ? '✅ Done' : '⏳ Processing'}</p>
      {!todo.completed && <p><button onClick={() => handleToggle(todo.id)}>COMPLETE ✅</button></p>}
      {todo.completed && <p><button onClick={() => handleRemove(todo.id)}>REMOVE 🗑️</button></p>}
      <Link to="/">← Back to list</Link>
    </div>
  );
};

export default TodoDetail;
