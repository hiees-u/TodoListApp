// src/components/TodoList.tsx
import { useSelector } from 'react-redux';
import type { RootState } from '../store/Store';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '../store/TodoStore';
import styles from '../styles/TodoList.module.scss';


const TodoList = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [typeMessage, setTypeMessage] = useState(false);

  const todos = useSelector((state: RootState) => state.todo.todos);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setTypeMessage(false);
      setMessage('Please enter a task. The "Todo" field must not be empty.!!')

      setTimeout(() => {
        setMessage('');
      }, 5000);

      return;
    }

    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      title: title.trim(),
      completed: false,
    };

    setTypeMessage(true);
    dispatch(addTodo(newTodo));
    setMessage('Add todo succes!!')
    setTitle('');
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <div className={styles.todoContainer}>
      <h2>Todo List</h2>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.todoItem}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} {todo.completed ? '✅' : '⏳'}
            </Link>
          </li>
        ))}
      </ul>

      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.todoInput}
          placeholder="Enter todo"
        />
        {message !== '' && <p className={`${styles.message} ${typeMessage ? styles.success : styles.error}`}>
          {message}
        </p>
        }
        <button type="submit" className={styles.todoButton}>ADD TODO</button>
      </form>
    </div>
  );
};

export default TodoList;
