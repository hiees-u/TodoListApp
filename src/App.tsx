import { Route, Routes } from 'react-router-dom';

import '@/App.css';
import TodoList from '@/pages/TodoList';
import TodoDetail from '@/pages/TodoDetail';
import ROUTE_PATHS from '@/routes/paths';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTE_PATHS.TASK_LIST} element={<TodoList />} />
        <Route path={ROUTE_PATHS.TASK_DETAIL(':id')} element={<TodoDetail />} />
        <Route path={ROUTE_PATHS.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
